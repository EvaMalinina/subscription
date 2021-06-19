import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {useSelector} from "react-redux";


const useStyles = makeStyles(styles);

const SnackBar = () => {
  const classes = useStyles();

  const {
    selectedPlan
  } = useSelector(({ subscriptionPlansSlice }) => {
    return {
      selectedPlan: subscriptionPlansSlice.selectedPlan,
    }
  });
  return(
    <>
      {
        selectedPlan.length > 0 &&
        <Paper className={classes.wrapper}>
          <Typography>Selected plan</Typography>
          <Typography>Duration: {selectedPlan[0].duration_months}</Typography>
          <Typography>$/Gb: {selectedPlan[0].price_usd_per_gb}</Typography>
          {
            selectedPlan[0].price_with_discount &&
              <Typography className={classes.discount}>$/Gb: {selectedPlan[0].price_with_discount}</Typography>
          }
        </Paper>
      }
    </>
  )
};

export default SnackBar;