import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import useSWR, { mutate, trigger } from 'swr';
import moment from 'moment';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    const { dataServer, dataType, dataStatus, dataAssignee, setLoading, setOpenSnackBar, setTypeSnack } = props;
    const { data } = useSWR(fetchURL, { initialData: dataServer });
    const classes = useStyles();
    return (
        <Formik
            initialValues={{
                task_name: '',
                task_type: 'Task',
                start_date: moment(new Date()).format('YYYY-MM-DD').toString(),
                end_date: moment(new Date()).format('YYYY-MM-DD').toString(),
                status: 'New',
                assignee: 'NguyenHao',
            }}
            onSubmit={async (values, formikHelpers) => {
                mutate(fetchURL, [...data, values], false);
                setLoading(true);
                await axios.post(fetchURL, values);
                setLoading(false);
                setTypeSnack("Added Successfully");
                setOpenSnackBar(true);
                setTimeout(() => {
                    setOpenSnackBar(false);
                }, 3000);
                trigger(fetchURL);
                console.log(dataDialog);
                formikHelpers.resetForm();
                console.log("homepage -> typeSnack", typeSnack)
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
                //onChange={handleChangeComboType}
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
                    defaultValue={moment(new Date())}
                    variant="outlined"
                    placeholder="start_date" />
                <Field as={TextField}
                    type="date"
                    id="outlined-basic"
                    name="end_date"
                    className={classes.input}
                    size="small"
                    defaultValue={moment(new Date())}
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
                //onChange={handleChangeComboStatus}
                >
                    {dataStatus && dataStatus.length && dataStatus.map((option, id) => (
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
                //onChange={handleChangeComboAssignee}
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
    )
}