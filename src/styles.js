import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  gridAllLogin: {
    height: window.innerHeight - 64,
  },
  gridBox: {
    width: '400px',
    backgroundColor: 'lightblue',

  },

  boxDivComm:{
    width: '80%',
    height: '70vh',
    border: '1px solid green',
    overflowY: 'auto',
    marginBottom: '10px'
  }
}));

export default useStyles;

