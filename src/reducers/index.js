import { combineReducers } from "redux";
import PromoReducer from "./PromoReducer";

export default combineReducers({
  promoCode: PromoReducer
});
