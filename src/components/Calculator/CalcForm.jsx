import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOperationAPI } from "../../api/calcAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Form>
        <Form.Group>
          <Form.Label>Number 1</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Operator</Form.Label>
          <Form.Control
            as="select"
            value={operator}
            onChange={handleOperatorChange}
          >
            <option value="">Select Operator</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Number 2</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreateOperation}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CalcForm;
