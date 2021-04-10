import { Box, Container, Grid, TextField, Button, Avatar } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../index';
import firebase from 'firebase';

import useStyles from '../styles';
import Loader from './Loader';

const Chat = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);

    const [textField, setTextField] = useState('');

    const [message, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMess = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: textField,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTextField('');
    }

    const classes = useStyles();

    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid direction={'column'} className={classes.gridAllLogin}>
                <Box className={classes.boxDivChat}>
                    {message.map(message =>
                        <Box style={{
                            margin: 15,
                            border: user.uid === message.uid ? '3px solid green' : '2px soled gray',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content'
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <Box>{message.displayName}</Box>
                            </Grid>
                            <Box>{message.text}</Box>
                        </Box>
                    )}
                </Box>
                <Grid container direction={'column'} alignItems={'center'} >
                    <TextField value={textField} onChange={event => setTextField(event.target.value)} rowsMax={2} variant={'outlined'} />
                    <Button onClick={sendMess}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Chat;