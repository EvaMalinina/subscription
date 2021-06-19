import withStyles from "@material-ui/core/styles/withStyles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const styles = ((theme) => ({
  root: {
    minWidth: '280px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    marginBottom: '15px'
  },
  subtitle: {
    fontSize: 12,
    marginBottom: '10px'
  }
}));

export default styles;

export const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    // marginRight: theme.spacing(3.5),
    // marginBottom: theme.spacing(4),
    margin: '0 10px 10px 0',
    padding: '0 20px',
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:last-child': {
      marginRight: theme.spacing(0),
    },
    color: 'black',
    fontSize: '17px'
  },
}))(ToggleButtonGroup);