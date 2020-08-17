import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';

//Component
import Header from '../components/header'
import Footer from '../components/footer'
import AddTask from '../components/addtask'
import EditTask from '../components/edittask'
import HeadTable from '../components/tablehead'
import BodyTable from '../components/tablebody'

//Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form, ErrorMessage } from "formik"; 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment';
import axios from 'axios';
import useSWR, { mutate, trigger } from 'swr';

import config from '../common/config'

import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    table: {
        minWidth: 650,
    },
    caption: {
        display: 'flex',
    },
    input: {
        width: '100%',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    button: {
        marginLeft: theme.spacing(1),
    },
    buttonAction: {
        marginLeft: theme.spacing(1),
    },
}));

const ITEM_HEIGHT = 48;

const fetchURL = `${config.apiGetTaskUrl}`;
const fetchType = `${config.apiGetTypeUrl}`;
const fetchStatus = `${config.apiGetStatusUrl}`;
const fetchAssignee = `${config.apiGetAssigneeUrl}`;

//const fetchURL = "https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task";

export default function homepage(props) {
    const router = useRouter();
    const { dataServer, dataType, dataStatus, dataAssignee } = props;
    const { data } = useSWR(fetchURL, { initialData: dataServer });
    const classes = useStyles();

    const [taskList, setTaskList] = useState([]);
    const [dataDialog, setDataDialog] = useState([]);
    const [onsubmit, setsubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [typeSnack, setTypeSnack] = useState('');

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenDialog = (data) => {
        console.log("handleOpenDialog -> data", data)
        setOpenDialog(true);
        setDataDialog(data);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    return (
        <div>
            <Container >
                <Header loading={loading} />
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <caption>
                            <AddTask
                                dataServer={dataServer}
                                dataType={dataType}
                                dataStatus={dataStatus}
                                dataAssignee={dataAssignee}
                                setLoading={setLoading}
                                setOpenSnackBar={setOpenSnackBar}
                                setTypeSnack={setTypeSnack} />
                        </caption>
                        <HeadTable />
                        <BodyTable 
                            data={data} 
                            dataServer={dataServer} 
                            dataDialog={dataDialog}
                            dataType={dataType}
                            dataStatus={dataStatus}
                            dataAssignee={dataAssignee}
                            openDialog={openDialog}
                            handleCloseDialog={handleCloseDialog}
                            handleOpenDialog={handleOpenDialog}
                            setLoading={setLoading}
                            setOpenSnackBar={setOpenSnackBar}
                            setTypeSnack={setTypeSnack}
                        />
                    </Table>
                </TableContainer>
                <Footer opensnack={openSnackBar} typesnack={typeSnack} />
            </Container>
        </div >
    )
}

homepage.getInitialProps = async ctx => {
    const res = await axios.get(`${config.apiGetTaskUrl}`)
    const res1 = await axios.get(`${config.apiGetTypeUrl}`)
    const res2 = await axios.get(`${config.apiGetStatusUrl}`)
    const res3 = await axios.get(`${config.apiGetAssigneeUrl}`)
    return { dataServer: res.data, dataType: res1.data, dataStatus: res2.data, dataAssignee: res3.data }
}