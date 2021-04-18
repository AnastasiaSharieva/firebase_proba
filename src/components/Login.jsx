import React, { useContext } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { Context } from '../index';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';


import useStyles from '../styles';


const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider);
    }

    const userGuest = () => {
        firebase.auth().signInAnonymously();
    }

    const classes = useStyles();
    return (
        <Container>
            <Grid alignItems={'center'} justify={'center'} container className={classes.gridAllLogin}>
                <Grid alignItems={'center'} container direction={'column'} className={classes.gridBox}>
                    <Box p={10}>
                        <Button onClick={login} variant='contained'>
                            Google
                        </Button>
                        <Button onClick={userGuest} variant='contained'>
                            Guest
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Login;