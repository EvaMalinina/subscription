import {combineReducers} from "redux";
import userDataSlice from "./userDataSlice";
import subscriptionPlansSlice from "./subscriptionPlans";


const rootReducer = combineReducers({
  userDataSlice,
  subscriptionPlansSlice,
});

export default rootReducer;