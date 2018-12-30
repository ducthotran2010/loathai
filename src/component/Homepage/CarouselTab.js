import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(() => ({
  root: {
    textTransform: 'initial',
    width: 200,
  },
  selected: {},
}))(Tab);
