import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Field, Form, ErrorMessage } from "formik";

import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import Cookie from 'js-cookie';

import axios from 'axios';

import config from '../common/config';

import * as yup from 'yup'
import { useRouter } from 'next/router'

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

const LoginValidation = yup.object().shape({
    username: yup
        .string()
        .min(6)
        .max(20)
        .required(),
    password: yup
        .string()
        .min([5])
        .max(16)
        .required(),
})

export default function SignIn() {
    const router = useRouter()
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [loginError, setLoginError] = React.useState('');
    const timer = React.useRef();

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">

                </Typography>

                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={LoginValidation}
                    onSubmit={async (values) => {
                        if (!loading) {
                            try {
                                setLoading(true);
                                fetch(`${config.apiSignInUrl}`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values),
                                }).then((r) => {
                                    return r.json();
                                }).then((data) => {

                                    Cookie.set('token', data.token, { expires: 100 });
                                    const datacookie = Cookie.get('token');
                                   
                                    console.log("SignIn -> datacookie", datacookie)

                                    //const apime = await axios.get('http://192.168.100.16:3000/api/me', datacookie);
                                    fetch(`${config.apiMeUrl}`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json',
                                            'authorization': `Bearer ${datacookie}`
                                        },
                                    }).then((r) => {
                                        return r.json();
                                    }).then((data) => {
                                        
                                         if (data[0] && data[0].username) {
                                             //set cookie
                                             setLoading(false);
                                             Cookie.set('username', data[0].username, { expires: 100 });
                                             router.push('/');
                                             alert(data[0].username);
                                        }
                                    });
                                    // const apimejson = await apime.data;
                                    // setLoading(false);
                                    // console.log("SignIn -> apimejson", apimejson);
                                    // if (data && data.errors) {
                                    //     setLoading(false);
                                    //     setLoginError(data.errors);
                                    //     alert(data.errors);
                                    // }
                                    // if (data && data.token) {
                                    //     //set cookie


                                    //     //Cookie.set('username', apimejso, { expires: 100 });
                                    // }
                                });

                                // fetch('http://192.168.100.16:3000/api/me', {
                                //     method: 'GET',
                                //     headers: {
                                //         'Content-Type': 'application/json',
                                //     },
                                //     body: JSON.stringify(Cookie.get('token')),
                                // }).then((r) => {
                                //     return r.json();
                                // }).then((data) => {
                                //     if (data && data.username) {
                                //         //set cookie
                                //         setLoading(false);
                                //         Cookie.set('username', data.username, { expires: 100 });
                                //         router.push('/homepage');
                                //         //alert(data.token);
                                //     }
                                // });
                            } catch (e) {
                                setLoading(false);
                                alert(e.message);
                            }
                        }
                        //const res1 = await axios.post('http://192.168.100.14:3000/api/employee/register', values);
                    }}
                >
                    <Form className={classes.form} noValidate>
                        <Field as={TextField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                        />
                        <ErrorMessage name="username" />
                        <Field as={TextField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <ErrorMessage name="password" />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            className={classes.submit}
                        >
                            Đăng nhập
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </Button>
                        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="./signup" variant="body2">
                                    {"Không có tài khoản? Đăng ký"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
