import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'
import {useDispatch} from "react-redux";
import {setUserPaymentDetails} from "../../reducers/userDataSlice";
import {useHistory} from "react-router-dom";


const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async values => {
    dispatch(setUserPaymentDetails({...values}));
    history.push('/subscription/confirmation');
  }

  const goBack = () => {
    history.push('/subscription/parameters');
  };

  return(
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={({
                   handleSubmit,
                   form,
                   submitting,
                   pristine,
                   invalid,
                   values,
                   active
                 }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Card
                number={values.number || ''}
                name={values.name || ''}
                expiry={values.expiry || ''}
                cvc={values.cvc || ''}
                focused={active}
              />
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
                  validate={val => val ? undefined : 'Required'}
                />
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                  validate={val => val ? undefined : 'Required'}
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                  validate={val => val ? undefined : 'Required'}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                  validate={val => val ? undefined : 'Required'}
                />
              </div>
              <div className="buttons">
                <button type="button" onClick={goBack}>
                  Back
                </button>

                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>

                <button type="submit" disabled={submitting || invalid}>
                  Next
                </button>
              </div>
            </form>
          )
        }}
      />
    </Styles>
  );
}

export default Payment;