import axios from "axios";
import { setUserActionCreator } from "../redux/reducers/UserReducer";

let base_url = "http://localhost:8000/";

export const registrationAPI = async (email, password) => {
  try {
    const res = await axios.post(`${base_url}api/auth/registration`, {
      email,
      password,
    });
    alert(res.data.message);
    console.log(res.data);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const loginAPI = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${base_url}api/auth/login`, {
        email,
        password,
      });
      dispatch(setUserActionCreator(res.data.user));
      localStorage.setItem("token", res.data.token, "userId", res.data.user.id);
      console.log(res.data);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
};

export const checkSession = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${base_url}api/auth/protected`, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      });
      dispatch(setUserActionCreator(res.data.user));
    } catch (error) {
      if (
        error.response.status === 401 &&
        error.response.data.message === "Token expired"
      ) {
        localStorage.removeItem("token");
      } else {
        // localStorage.removeItem("token");
        console.log(error);
      }
    }
  };
};
