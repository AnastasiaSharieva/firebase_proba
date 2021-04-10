import React, { useContext } from 'react';

import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';


const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar color='secondary' position="static">
            <Toolbar>
                <Grid container justify={'flex-end'}>
                    {user

                        ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Out</Button>
                        :
                        <NavLink to='/login'>
                            <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar;