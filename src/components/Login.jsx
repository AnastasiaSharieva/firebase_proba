import React, { useContext } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { Context } from '../index';
import firebase from 'firebase';

import useStyles from '../styles';


const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider);
    }

    const classes = useStyles();
    return (
        <Container>
            <Grid className={classes.gridAllLogin}>
                <Grid container className={classes.gridBox}>
                    <Box p={5}>
                        <Button onClick={login} variant='outlined'>
                            Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Login;