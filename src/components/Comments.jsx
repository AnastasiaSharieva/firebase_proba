import { Box, Container, Grid, TextField, Button, Avatar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../index';
import firebase from 'firebase';

import useStyles from '../styles';

const Comments = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);

    const [textField, setTextField] = useState('');

    const [message, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendComm = async () => {
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
        return <div>...load</div>
    }
    return (
        <Container>
            <Grid alignItems={'center'} container direction={'column'}>
                <Box className={classes.boxDivComm}>
                    {message.map(message =>
                        <Box style={{
                            margin: 20,
                            padding: 5,
                            border: user.uid === message.uid ? '3px solid green' : '2px solid grey',
                            marginLeft: '10px',
                            width: '90%'
                        }}>

                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <Box>{message.displayName}</Box>
                            </Grid>
                            <Typography color={'textPrimary'} style={{
                                wordWrap: 'break-word'
                            }}> {message.text}</Typography>
                        </Box>
                    )}
                </Box>
                <Grid alignItems={'center'} container direction={'column'} >
                    <TextField multiline rows={2} variant="outlined" value={textField} onChange={event => setTextField(event.target.value)} />
                    <Button color={'primary'} variant={'outlined'} onClick={sendComm}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Comments;