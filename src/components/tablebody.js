import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import useSWR, { mutate, trigger } from 'swr';
import moment from 'moment';
import axios from 'axios';

import EditTask from '../components/edittask'
import HeadTable from '../components/tablehead'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import config from '../common/config'

const fetchURL = `${config.apiGetTaskUrl}`;

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

export default function BodyTable(props) {
    const {data, dataServer, dataDialog, dataType, dataStatus, dataAssignee, openDialog, handleCloseDialog, handleOpenDialog, setLoading, setOpenSnackBar, setTypeSnack } = props;
    const classes = useStyles();

    return (
        <TableBody>
            {data && Array.isArray(data) && data.map((row) => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.task_name}
                    </TableCell>
                    <TableCell align="center">{row.task_type}</TableCell>
                    <TableCell align="center">{moment(row.start_date).format("YYYY-MM-DD")}</TableCell>
                    <TableCell align="center">{moment(row.end_date).format("YYYY-MM-DD")}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">{row.assignee}</TableCell>
                    <TableCell align="center">
                        <Dialog
                            open={openDialog}
                            onClose={handleCloseDialog}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <EditTask
                                dataServer={dataServer}
                                dataDialog={dataDialog}
                                dataType={dataType}
                                dataStatus={dataStatus}
                                dataAssignee={dataAssignee}
                                handleOpenDialog={handleOpenDialog}
                                handleCloseDialog={handleCloseDialog}
                                 />
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
                                const url = fetchURL;
                                mutate(url, data.filter(c => c.id !== row.id), false);
                                setLoading(true);
                                await axios.delete(deleteUrl);
                                setLoading(false);
                                setOpenSnackBar(true);
                                setTypeSnack('Deleted Successfully');
                                trigger(url);
                                setTimeout(() => {
                                    setOpenSnackBar(false)
                                }, 3000);
                            }}
                        >
                            Delete
                                    </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}