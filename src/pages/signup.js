import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as yup from 'yup'
import axios from 'axios';

import config from '../common/config';

import { Formik, Field, Form, ErrorMessage } from "formik";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginValidation = yup.object().shape({
    username: yup
        .string()
        .min(6)
        .max(20)
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(8)
        .max(16)
        .required(),
})

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng ký
                </Typography>
                <Formik
                    initialValues={{ username: "", email: "", password: "" }}
                    validationSchema={LoginValidation}
                    onSubmit={async (values) => {
                        /*const res = await fetch('http://192.168.100.14:3000/api/employee/register', {
                            method: 'POST',
                            
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8',
                                'Access-Control-Allow-Origin': '*'
                            },
                            body: JSON.stringify({
                                username: values.username,
                                email: values.email,
                                password: values.password})
                        }).then(response => response.json());
                        console.log(res);
                        //await axios.post('https://jsonplaceholder.typicode.com/users', values);
                        //alert(JSON.stringify(values, null, 2));
                        setTimeout(() => {
                            alert(JSON.stringify(res, null, 2));
                        }, 400);*/
                        const response = await fetch(`${config.apiSignUpUrl}`, {
                            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                            
                            headers: {
                                'Content-Type': 'application/json',
                                //'Access-Control-Allow-Origin': '*'
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                            body: JSON.stringify(values) // body data type must match "Content-Type" header
                            
                        });
                        //const res1 = await axios.post('http://192.168.100.14:3000/api/employee/register', values);
                        const json = await response.json();
                        console.log("00000",json);
                        const {message} = json;
                        alert(message);
                        
                    }}
                >
                    <Form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field as={TextField}
                                    autoComplete="off"
                                    label="Username"
                                    name="username"
                                    fullWidth
                                />
                                <ErrorMessage name="username" />
                            </Grid>
                            <Grid item xs={12}>
                                <Field as={TextField}
                                    autoComplete="off"
                                    label="Email"
                                    name="email"
                                    fullWidth
                                />
                                <ErrorMessage name="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <Field as={TextField}
                                    autoComplete="off"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    fullWidth
                                />
                                <ErrorMessage name="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Gửi thông báo tới email của bạn"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                    </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Đã có tài khoản? Đăng Nhập
                            </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}