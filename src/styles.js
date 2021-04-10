import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  gridAllLogin: {
    height: window.innerHeight - 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridBox: {
    width: '400px',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    flexDirection: 'column',

  },
  buttons:{
    marginTop: '40px'
  },

  boxDivChat:{
    width: '80%',
    height: '70vh',
    border: '1px solid green',
    overflowY: 'auto',
    marginBottom: '10px'
  }
}));

export default useStyles;

