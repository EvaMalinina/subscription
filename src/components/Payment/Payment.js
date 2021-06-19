import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles, {StyledToggleButtonGroup} from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ToggleButton from '@material-ui/lab/ToggleButton';
import {useDispatch} from "react-redux";
import {setUserParameters} from "../../reducers/userDataSlice";


const useStyles = makeStyles(styles);

const Parameters = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [alignment, setAlignment] = useState('right');
  const [duration, setDuration] = useState('12');
  const [plan, setPlan] = useState('5');
  const [upfrontPayment, setUpfrontPayment] = useState('no');

  const handleDurationChange = (event, newDuration) => {
    setDuration(newDuration);
  };

  const handlePlanChange = (event, newPlan) => {
    setPlan(newPlan);
  };

  const handlePayChange = (event, newPaymentType) => {
    setUpfrontPayment(newPaymentType);
  };

  const saveParameters = () => {
    dispatch(setUserParameters({duration, plan, upfrontPayment}));
    history.push('/subscription/payment');
  };

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          E Subscription
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          select subscription parameters
        </Typography>

        <StyledToggleButtonGroup size="large" value={duration} exclusive onChange={handleDurationChange}>
          <ToggleButton value="3">
            3
          </ToggleButton>
          <ToggleButton value="6">
            6
          </ToggleButton>
          <ToggleButton value="12">
            12
          </ToggleButton>
        </StyledToggleButtonGroup>

        <Typography className={classes.subtitle} color="textSecondary">
          Amount of gigabytes in a cloud
        </Typography>

        <StyledToggleButtonGroup size="large" value={plan} exclusive onChange={handlePlanChange}>
          <ToggleButton value="5">
            5
          </ToggleButton>
          <ToggleButton value="10">
            10
          </ToggleButton>
          <ToggleButton value="50">
            50
          </ToggleButton>
        </StyledToggleButtonGroup>

        <Typography className={classes.subtitle} color="textSecondary">
          Upfront payment
        </Typography>

        <StyledToggleButtonGroup size="large" value={upfrontPayment} exclusive onChange={handlePayChange}>
          <ToggleButton value="yes">
            yes
          </ToggleButton>
          <ToggleButton value="no">
            no
          </ToggleButton>
        </StyledToggleButtonGroup>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={saveParameters}>Next</Button>
      </CardActions>
    </Card>
  )
};

export default Parameters;