import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import {sendUserData, setUserEmail} from "../../reducers/userDataSlice";
const useStyles = makeStyles(styles);


const Confirmation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [userEmail, setEmail] = useState('');
  const [checked, setChecked] = useState(true);
  const [error, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const goBack = () => {
    history.push('/subscription/payment');
  };

  const {
    selectedPlan,
    duration,
    plan,
    upfrontPayment,
    cardNumber,
    name,
    expiryDate,
    cardCvc,
    email,
  } = useSelector(({ subscriptionPlansSlice, userDataSlice }) => {
    return {
      ...subscriptionPlansSlice,
      ...userDataSlice,
    }
  });

  const emailValidation = (userEmail) => {
   return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(userEmail)
  };

  const saveUserData = (e) => {
    e.preventDefault();

    if (!emailValidation(userEmail) || !checked) {
      setErrorMessage('All fields must be filled correct.');
    } else {
      dispatch(setUserEmail(userEmail))
      setErrorMessage('');
    }

    dispatch(sendUserData({
      selectedPlan,
      duration,
      plan,
      upfrontPayment,
      cardNumber,
      name,
      expiryDate,
      cardCvc,
      email,
    }))
  };

  return(
    <Card className={classes.wrapper}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          E Subscription
        </Typography>

        <Typography className={classes.subtitle} color="textSecondary">
          Your email
        </Typography>
        <form autoComplete="off" className={classes.form}>
          <input type={'email'} value={userEmail} onChange={(e) => setEmail(e.target.value)}/>

          <a href={'https://www.google.com/'} aria-label={'terms-agreement'}>
            <Typography className={classes.subtitle} color="textSecondary">
              Terms and conditions agreement
              By clicking this button you agree you go to Google.
            </Typography>
          </a>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'terms-agreement' }}
            onChange={handleChange}
          />
          <Typography className={classes.error}>{error}</Typography>
          <Button size="small" type={'submit'} onClick={(e) => saveUserData(e)}>Confirm</Button>
        </form>
      </CardContent>

      <CardActions>
        <Button size="small" className={classes.btn} onClick={goBack}>Back</Button>
      </CardActions>
    </Card>
  )
};

export default Confirmation;