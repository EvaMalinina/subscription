import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {setUserParameters} from "../../reducers/userDataSlice";
import {getSubscriptionPlans, selectSubscriptionPlan, updateSubscriptionPlan} from "../../reducers/subscriptionPlans";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const useStyles = makeStyles(styles);

const Parameters = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [duration, setDuration] = useState('12');
  const [plan, setPlan] = useState('5');
  const [upfrontPayment, setUpfrontPayment] = useState('no');
  const { price } = useSelector((state) => ({
    price: state.subscriptionPlansSlice.selectedPlan[0] ? state.subscriptionPlansSlice.selectedPlan[0].price_usd_per_gb : null,
  }));

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    dispatch(selectSubscriptionPlan(event.target.value));
  };

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handlePaymentTypeChange = (event) => {
    setUpfrontPayment(event.target.value);
    if (event.target.value === 'yes') {
      dispatch(updateSubscriptionPlan({price, decrease: true}));
    } else if (event.target.value === 'no') {
      dispatch(updateSubscriptionPlan({price, decrease: false}));
    }
  };

  const saveParameters = () => {
    dispatch(setUserParameters({duration, plan, upfrontPayment}));
    history.push('/subscription/payment');
  };

  useEffect(() => {
    dispatch(getSubscriptionPlans());
  }, [dispatch]);

  return(
    <Card className={classes.wrapper}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          E Subscription
        </Typography>

        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.subtitle}>Select subscription parameters</FormLabel>
          <RadioGroup row aria-label="position" name="position" value={duration} onChange={handleDurationChange}>
            <FormControlLabel
              value="3"
              control={<Radio color="primary" />}
              label="3"
              labelPlacement="top"
            />
            <FormControlLabel
              value="6"
              control={<Radio color="primary" />}
              label="6"
              labelPlacement="top"
            />
            <FormControlLabel
              value="12"
              control={<Radio color="primary" />}
              label="12"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.subtitle}>Amount of gigabytes in a cloud</FormLabel>
          <RadioGroup row aria-label="position" name="position" value={plan} onChange={handlePlanChange}>
            <FormControlLabel
              value="5"
              control={<Radio color="primary" />}
              label="5"
              labelPlacement="top"
            />
            <FormControlLabel
              value="10"
              control={<Radio color="primary" />}
              label="10"
              labelPlacement="top"
            />
            <FormControlLabel
              value="50"
              control={<Radio color="primary" />}
              label="50"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.subtitle}>Upfront payment</FormLabel>
          <RadioGroup row aria-label="position" name="position" value={upfrontPayment} onChange={handlePaymentTypeChange}>
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="yes"
              labelPlacement="top"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="no"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>

      <CardActions>
        <Button size="small" className={classes.btn} onClick={saveParameters}>Next</Button>
      </CardActions>
    </Card>
  )
};

export default Parameters;