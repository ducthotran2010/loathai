import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(() => ({
  root: {
    textTransform: 'initial',
    width: 74,
    minWidth: 74,
    padding: 0,
    margin: 5,
    borderRadius: 5,
    border: '2px solid #ddd',
    marginBottom: 0,
    '&:hover': {
      opacity: 1,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  labelContainer: {
    padding: 0,
  },
  selected: {
    border: '2px solid #4a90e2',
  },
}))(Tab);
