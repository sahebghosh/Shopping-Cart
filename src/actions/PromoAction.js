import { PROMO_CODE } from "./type";

export const handelChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  });
};
