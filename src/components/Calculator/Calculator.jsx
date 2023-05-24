import React from "react";
import { getOperationsAPI } from "../../api/calcAPI";
import { useDispatch, useSelector } from "react-redux";
import CalcForm from "./CalcForm";

const Calculator = () => {
  const operations = useSelector((state) => state.calculator.operations);
  const dispatch = useDispatch();

  const handleGetOperations = () => {
    dispatch(getOperationsAPI());
  };

  return (
    <div>
      <button onClick={handleGetOperations}>Get Operations</button>
      <div>
        {!operations
          ? null
          : operations.map((item) => {
              return (
                <>
                  <span key={item.id}>
                    {item.num1}
                    {item.operator}
                    {item.num2}={item.result}
                  </span>
                  <br />
                </>
              );
            })}
      </div>
      <div>
        <CalcForm />
      </div>
    </div>
  );
};

export default Calculator;
