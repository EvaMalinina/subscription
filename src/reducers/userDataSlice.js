import { createSlice } from '@reduxjs/toolkit';


const userDataSlice = createSlice({
  name: 'data',
  initialState: {
    duration: '12',
    plan: '3',
    upfrontPayment: 'no',
    cardNumber: null,
    name: null,
    expiryDate: null,
    cardCvc: null,
    email: '',
    isLoading: false,
    error: false
  },
  reducers: {
    setUserParameters(state, action) {
      const { duration, plan, upfrontPayment} = action.payload;

      state.duration = duration;
      state.plan = plan;
      state.upfrontPayment = upfrontPayment;
    },
    setUserPaymentDetails(state, action) {
      const { number, name, expiry, cvc } = action.payload;

      state.cardNumber = number;
      state.name = name;
      state.expiryDate = expiry;
      state.cardCvc = cvc;
    },
    setUserEmail(state, action) {
      state.email = action.payload;
    },
    sendUserData(state, action) {
      state.isLoading = true;
    },
    sendUserDataSuccess(state) {
      state.isLoading = false;
    },
    sendUserDataError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

const { actions, reducer } = userDataSlice;
export const { setUserParameters, setUserPaymentDetails, setUserEmail, sendUserData, sendUserDataSuccess, sendUserDataError } = actions;
export default reducer;
