import axios from "axios";
import {
  setOperationsActionCreator,
  setOperationActionCreator,
} from "../redux/reducers/CalculatorReducer";

let base_url = "http://localhost:8000/";

export const createOperationAPI = (num1, num2, operator) => {
  return async (dispatch) => {
    let user_id = localStorage.getItem("userId");
    try {
      const res = await axios.post(
        `${base_url}api/calculator`,
        { num1, num2, operator, user_id },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setOperationActionCreator(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOperationsAPI = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${base_url}api/calculator`);
      dispatch(setOperationsActionCreator(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
};
