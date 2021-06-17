import axios from "axios";
import { GET_DATA } from "../actionTypes"; 



export const getData = () => async (dispatch) => {
  axios.get('https://demo7242716.mockable.io/products')
  .then(response => {
    dispatch({
      type: GET_DATA,
      payload:response.data
  })})
};
