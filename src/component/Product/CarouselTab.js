import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(() => ({
  root: {
    textTransform: 'initial',
    width: 70,
    minWidth: 70,
    padding: 0,
    margin: 5,
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
    border: '1px solid #4a90e2',
  },
}))(Tab);
