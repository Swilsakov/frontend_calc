import React, { useState } from "react";
import Input from "../../utils/Input";
import { createOperationAPI } from "../../api/calcAPI";
import { useDispatch } from "react-redux";

const CalcForm = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operator, setOperator] = useState("");
  const dispatch = useDispatch();

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCreateOperation = () => {
    dispatch(createOperationAPI(num1, num2, operator));
  };

  return (
    <div>
      <div>
        <Input
          value={num1}
          setValue={setNum1}
          type="number"
          placeholder="Number 1"
        />
        <br />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="">Select Operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <br />
        <Input
          value={num2}
          setValue={setNum2}
          type="number"
          placeholder="Number 2"
        />
      </div>
      <button onClick={handleCreateOperation}>create</button>
    </div>
  );
};

export default CalcForm;
