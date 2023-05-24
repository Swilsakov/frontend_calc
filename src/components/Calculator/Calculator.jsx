import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOperationsAPI } from "../../api/calcAPI";
import Button from "react-bootstrap/Button";
import CalcForm from "./CalcForm";

const Calculator = () => {
  const operations = useSelector((state) => state.calculator.operations);
  const dispatch = useDispatch();

  const handleGetOperations = () => {
    dispatch(getOperationsAPI());
  };

  return (
    <div>
      <Button variant="primary" onClick={handleGetOperations}>
        Get Operations
      </Button>
      <div>
        {!operations ? null : (
          <div>
            {operations.map((item) => (
              <span key={item.id}>
                {item.num1}
                {item.operator}
                {item.num2}={item.result}
                <br />
              </span>
            ))}
          </div>
        )}
      </div>
      <div>
        <CalcForm />
      </div>
    </div>
  );
};

export default Calculator;
