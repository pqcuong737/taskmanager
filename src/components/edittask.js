import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import useSWR, { mutate, trigger } from 'swr';
import moment from 'moment';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import config from '../common/config'

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

const fetchURL = `${config.apiGetTaskUrl}`;

export default function AddTask(props) {
    const { dataServer, dataDialog, dataType, dataStatus, dataAssignee, handleCloseDialog } = props;
    const { data } = useSWR(fetchURL, { initialData: dataServer });
    const classes = useStyles();
    return (
        <Formik
            initialValues={{
                task_name: dataDialog.task_name,
                task_type: dataDialog.task_type,
                start_date: moment(dataDialog.start_date).format('YYYY-MM-DD').toString(),
                end_date: moment(dataDialog.end_date).format('YYYY-MM-DD').toString(),
                status: dataDialog.status,
                assignee: dataDialog.assignee,
            }}
            onSubmit={async (values, { setSubmitting }, formikHelpers) => {
                setTimeout(async () => {
                    const editUrl = `${fetchURL}/${dataDialog.id}`;
                    //const url = fetchURL;
                    //mutate(url);
                    await axios.patch(editUrl, values);
                    setSubmitting(false);
                    window.location.reload();
                    //trigger(url);
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
                                        select
                                        name="task_type"
                                        className={classes.input}
                                        id="outlined-basic"
                                        label="task_type"
                                        size="small"
                                        variant="outlined"
                                        placeholder="task_type"
                                        onChange={handleChange} >
                                        {dataType.map((option) => (
                                            <option key={option.id} value={option.tasktype_name}>
                                                {option.tasktype_name}
                                            </option>
                                        ))}
                                    </Field>
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
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField}
                                        type="date"
                                        id="date"
                                        label="end_date"
                                        name="end_date"
                                        className={classes.input}
                                        size="small"
                                        defaultValue={moment(new Date()).format("YYYY-MM-DD")}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField}
                                        select
                                        name="status"
                                        className={classes.input}
                                        id="outlined-basic"
                                        label="task_name"
                                        size="small"
                                        variant="outlined"
                                        placeholder="status"
                                        defaultValue={dataDialog.status_name}
                                        onChange={handleChange} >
                                        {dataStatus.map((option, id) => (
                                            <option key={id} value={option.status_name}>
                                                {option.status_name}
                                            </option>
                                        ))}
                                    </Field>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField}
                                        select
                                        name="assignee"
                                        className={classes.input}
                                        id="outlined-basic"
                                        label="assignee"
                                        size="small"
                                        variant="outlined"
                                        placeholder="assignee"
                                        onChange={handleChange} >
                                        {dataAssignee.map((option, id) => (
                                            <option key={id} value={option.username}>
                                                {option.username}
                                            </option>
                                        ))}
                                    </Field>
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
    )
}