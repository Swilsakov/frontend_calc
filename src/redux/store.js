import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/UserReducer";
import calculatorReducer from "./reducers/CalculatorReducer";

const rootReducer = combineReducers({
  user: userReducer,
  calculator: calculatorReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
