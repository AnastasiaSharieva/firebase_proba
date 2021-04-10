import { Container, Grid } from '@material-ui/core';

import useStyles from '../styles';

const Loader = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid className={classes.gridAllLogin}>
                <Grid container className={classes.gridBox}>
                    <div class="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Loader;