const SET_OPERATIONS = "SET_OPERATIONS";
const SET_OPERATION = "SET_OPERATION";

const initialState = {
  operations: [],
};

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPERATIONS:
      return {
        ...state,
        operations: action.payload,
      };
    case SET_OPERATION:
      return {
        ...state,
        operations: [...state.operations, action.payload],
      };
    default:
      return state;
  }
}

export const setOperationsActionCreator = (operations) => ({
  type: SET_OPERATIONS,
  payload: operations,
});

export const setOperationActionCreator = (operation) => ({
  type: SET_OPERATION,
  payload: operation,
});
