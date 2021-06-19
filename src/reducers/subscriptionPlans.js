import { createSlice } from '@reduxjs/toolkit';

const defaultSPDuration = '12';

const subscriptionPlansSlice = createSlice({
  name: 'subscriptionPlans',
  initialState: {
    subscriptionPlans: [],
    selectedPlan: {},
    error: false,
    isLoading: false,
  },
  reducers: {
    getSubscriptionPlans(state) {
      state.isLoading = true;
    },
    setSubscriptionPlans(state, action) {
      state.subscriptionPlans = action.payload.subscription_plans;
      state.selectedPlan = state.subscriptionPlans.filter((el) => el.duration_months.toString() === defaultSPDuration);
      state.isLoading = false;
    },
    setSubscriptionPlansError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectSubscriptionPlan(state, action) {
      state.selectedPlan = state.subscriptionPlans.filter((el) => el.duration_months.toString() === action.payload);
    },
    updateSubscriptionPlan(state, action) {
      if (action.payload.decrease) {
        state.selectedPlan[0].price_with_discount =
          Number(action.payload.price) - (Number(action.payload.price) * 0.1);
      } else {
        delete state.selectedPlan[0].price_with_discount;
      }
    },
  },
});

const { actions, reducer } = subscriptionPlansSlice;
export const { getSubscriptionPlans, setSubscriptionPlans, setSubscriptionPlansError, selectSubscriptionPlan, updateSubscriptionPlan } = actions;
export default reducer;
