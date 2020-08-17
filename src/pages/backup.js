import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react'
import Header from '../components/header'
import Container from '@material-ui/core/Container';
//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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

const currencies = [
    {
      value: 'USD',
      label: 'High',
    },
    {
      value: 'EUR',
      label: 'Epic',
    },
    {
      value: 'BTC',
      label: 'Medium',
    },
    {
      value: 'JPY',
      label: 'Low',
    },
  ];

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

const fetchURL = "http://192.168.100.16:3000/api/task";
const fetchType = "http://192.168.100.16:3000/api/type";
const fetchStatus = "http://192.168.100.16:3000/api/status";
const fetchAssignee = "http://192.168.100.16:3000/api/assignee";

//const fetchURL = "https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task";

export default function homepage(props) {
    const { dataServer, dataType, dataStatus, dataAssignee } = props;
    const { data } = useSWR(fetchURL, { initialData: dataServer });
    const classes = useStyles();
    const [taskList, setTaskList] = useState([]);
    const [dataDialog, setDataDialog] = useState([]);
    const [onsubmit, setsubmit] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [currentCombo, setCurrentCombo] = React.useState();
    const open = Boolean(anchorEl);


    // const fetchTask = async () => {
    //     const res = await axios.get(fetchURL)
    //     setTaskList(res && res.data || []);
    // }

    // useEffect(async () => {
    //     // async function getServerSideProps() {
    //     //     const res = await fetch('https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task');
    //     //     const json = await res.json();
    //     //     console.log("getServerSideProps -> json", json)
    //     //     setTaskList(json);
    //     // }
    //     // if (onsubmit) {
    //     await fetchTask();
    //     // }
    // }, [...dataserver]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoading = () => {
        setload ? setHandleLoading(true) : setHandleLoading(false);
    };

    const handleOpenDialog = (data) => {
        console.log("handleOpenDialog -> data", data)
        setOpenDialog(true);
        setDataDialog(data);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleChangeCombo = (event) => {
        setCurrentCombo(event.target.value);
      };
    

    // const handleDelete = async(item) => {

    //         const deleteUrl = 'https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task' + item.ID;
    //         //const url = 'https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task';
    //         //mutate(url, data.filter(c => c.ID !== row.ID), false);
    //         await axios.delete(deleteUrl);
    //         //trigger(url);
    // }


    return (
        <div>
            <Container >
                <Header hanldeLoading={handleLoading} />
                <TableContainer component={Paper}>

                    <Table className={classes.table} aria-label="simple table">
                        <caption>
                            <Formik
                                initialValues={{
                                    task_name: '',
                                    task_type: '',
                                    start_date: moment(new Date()).format("YYYY-MM-DD").toString(),
                                    end_date: moment(new Date()).format("YYYY-MM-DD").toString(),
                                    status: '',
                                    assignee: '',
                                }}
                                onSubmit={async (values, formikHelpers) => {
                                    // const newData = {
                                    //     ...values,
                                    //     start_date: moment(values.date).format().toString()
                                    // }
                                    await axios.post(fetchURL, values);
                                    console.log(dataDialog);
                                }}
                            >
                                <Form display="flex" p={1} className={classes.root} noValidate autoComplete="off">
                                    <Field as={TextField}
                                        name="task_name"
                                        className={classes.input}
                                        id="outlined-basic"
                                        size="small"
                                        variant="outlined"
                                        placeholder="task_name" />
                                    <Field as={TextField}
                                        select
                                        name="task_type"
                                        className={classes.input}
                                        id="outlined-basic"
                                        size="small"
                                        variant="outlined"
                                        placeholder="task_type"
                                    >
                                        {dataType.map((option) => (
                                            <option key={option.id} value={option.tasktype_name}>
                                                {option.tasktype_name}
                                            </option>
                                        ))}
                                    </Field>

                                    <Field as={TextField}
                                        type="date"
                                        id="outlined-basic"
                                        name="start_date"
                                        className={classes.input}
                                        size="small"
                                        defaultValue={moment(new Date()).format("YYYY-MM-DD")}
                                        variant="outlined"
                                        placeholder="start_date" />
                                    <Field as={TextField}
                                        type="date"
                                        id="outlined-basic"
                                        name="end_date"
                                        className={classes.input}
                                        size="small"
                                        defaultValue={moment(new Date()).format("YYYY-MM-DD")}
                                        variant="outlined"
                                        placeholder="end_date" />
                                    <Field as={TextField}
                                        select
                                        name="status"
                                        className={classes.input}
                                        id="outlined-basic"
                                        size="small"
                                        variant="outlined"
                                        placeholder="status"
                                        >
                                            {dataStatus.map((option, id) => (
                                            <option key={id} value={option.status_name}>
                                                {option.status_name}
                                            </option>
                                            ))}
                                        </Field>
                                    <Field as={TextField}
                                        select
                                        name="assignee"
                                        className={classes.input}
                                        id="outlined-basic"
                                        size="small"
                                        variant="outlined"
                                        placeholder="assignee"
                                        >
                                            {dataAssignee.map((option, id) => (
                                            <option key={id} value={option.username}>
                                                {option.username}
                                            </option>
                                            ))}
                                    </Field>
                                    <Button className={classes.button} type="submit" variant="contained" size="medium" color="primary" >
                                        ADD
                                    </Button>
                                </Form>
                            </Formik>
                        </caption>

                        <TableHead>
                            <TableRow>
                                <TableCell>Task&nbsp;name</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Date&nbsp;start</TableCell>
                                <TableCell align="center">Date&nbsp;end</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Assignee</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.task_name}
                                    </TableCell>
                                    <TableCell align="center">{row.tasktype_name}</TableCell>
                                    <TableCell align="center">{row.start_date}</TableCell>
                                    <TableCell align="center">{row.end_date}</TableCell>
                                    <TableCell align="center">{row.status_name}</TableCell>
                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">
                                        <Dialog
                                            open={openDialog}
                                            onClose={handleCloseDialog}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <Formik
                                                initialValues={{ ...dataDialog }}
                                                onSubmit={async (values, { setSubmitting }, formikHelpers) => {
                                                    setTimeout(async () => {
                                                        await axios.patch(`${fetchURL}/${row.id}`, values);
                                                        setSubmitting(false);
                                                    }, 200);
                                                }}
                                            >
                                                {({
                                                    values,
                                                    errors,
                                                    touched,
                                                    handleChange,
                                                    handleBlur,
                                                    handleSubmit,
                                                    isSubmitting,
                                                }) => (
                                                        < Form noValidate autoComplete="off">
                                                            <DialogContent>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field as={TextField}
                                                                            name="task_name"
                                                                            className={classes.input}
                                                                            id="outlined-basic"
                                                                            label="task_name"
                                                                            size="small"
                                                                            variant="outlined"
                                                                            onChange={handleChange} />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field as={TextField}
                                                                            name="tasktype_name"
                                                                            className={classes.input}
                                                                            id="outlined-basic"
                                                                            label="tasktype_name"
                                                                            size="small"
                                                                            variant="outlined"
                                                                            placeholder="task_type" />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field as={TextField}
                                                                            type="date"
                                                                            id="date"
                                                                            label="task_name"
                                                                            name="start_date"
                                                                            className={classes.input}
                                                                            size="small"
                                                                            defaultValue={moment(new Date()).format("YYYY-MM-DD")}
                                                                            variant="outlined"
                                                                            InputLabelProps={{
                                                                                shrink: true,
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field as={TextField}
                                                                            type="date"
                                                                            id="date"
                                                                            label="task_name"
                                                                            name="end_date"
                                                                            className={classes.input}
                                                                            size="small"
                                                                            defaultValue={moment(new Date()).format("YYYY-MM-DD")}
                                                                            variant="outlined"
                                                                            InputLabelProps={{
                                                                                shrink: true,
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field as={TextField}
                                                                            name="status_name"
                                                                            className={classes.input}
                                                                            id="outlined-basic"
                                                                            label="task_name"
                                                                            size="small"
                                                                            variant="outlined"
                                                                            placeholder="status" />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field as={TextField}
                                                                            name="full_name"
                                                                            className={classes.input}
                                                                            id="outlined-basic"
                                                                            label="task_name"
                                                                            size="small"
                                                                            variant="outlined"
                                                                            placeholder="assignee" />
                                                                    </Grid>
                                                                </Grid>
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button onClick={handleCloseDialog} disabled={isSubmitting} color="secondary">
                                                                    Cancel
                                                                </Button>
                                                                <Button className={classes.button} type="submit" variant="contained" onClick={handleCloseDialog} color="primary" autoFocus>
                                                                    Save
                                                                </Button>
                                                            </DialogActions>
                                                        </Form>
                                                    )}
                                            </Formik>
                                        </Dialog>
                                        <Button
                                            className={classes.buttonAction}
                                            size="small"
                                            color="secondary"
                                            startIcon={<EditIcon />}
                                            onClick={() => handleOpenDialog(row)}
                                        >
                                            Edit
                                    </Button>
                                        <Button
                                            className={classes.buttonAction}
                                            size="small"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}
                                            onClick={async () => {
                                                const deleteUrl = fetchURL + "/" + row.id;
                                                //const url = '/api/todolist';
                                                //mutate(url, data.filter(c => c.ID !== row.ID), false);
                                                await axios.delete(deleteUrl);
                                                //trigger(url);
                                                console.log(row)
                                            }}
                                        >
                                            Delete
                                    </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div >
    )
}

homepage.getInitialProps = async ctx => {
    const res = await axios.get(fetchURL)
    const res1 = await axios.get(fetchType)
    const res2 = await axios.get(fetchStatus)
    const res3 = await axios.get(fetchAssignee)
    return {dataServer: res.data, dataType: res1.data, dataStatus: res2.data, dataAssignee: res3.data} 
}