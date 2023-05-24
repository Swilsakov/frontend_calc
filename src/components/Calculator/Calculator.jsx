import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOperationsAPI } from "../../api/calcAPI";
import { Button, Table } from "react-bootstrap";
import CalcForm from "./CalcForm";

const Calculator = () => {
  const operations = useSelector((state) => state.calculator.operations);
  const dispatch = useDispatch();
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    dispatch(getOperationsAPI());
  }, [dispatch]);

  const handleOperatorChange = (event) => {
    setSelectedOperator(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filterByOperatorAndDate = () => {
    const filteredItems = operations.filter((item) => {
      const matchesOperator =
        selectedOperator === "" || item.operator === selectedOperator;
      const matchesDate =
        selectedDate === "" || item.created_at.slice(0, 10) === selectedDate;
      return matchesOperator && matchesDate;
    });
    setFilteredItems(filteredItems);
  };

  const resetFilters = () => {
    setSelectedOperator("");
    setSelectedDate("");
    setFilteredItems([]);
  };
  return (
    <div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Number 1</th>
              <th>Operator</th>
              <th>Number 2</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0
              ? filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.num1}</td>
                    <td>{item.operator}</td>
                    <td>{item.num2}</td>
                    <td>{item.result}</td>
                    <td>
                      {new Date(item.created_at).toISOString().slice(0, 10)}
                    </td>
                  </tr>
                ))
              : operations.map((item) => (
                  <tr key={item.id}>
                    <td>{item.num1}</td>
                    <td>{item.operator}</td>
                    <td>{item.num2}</td>
                    <td>{item.result}</td>
                    <td>
                      {new Date(item.created_at).toISOString().slice(0, 10)}
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
      <div>
        <select value={selectedOperator} onChange={handleOperatorChange}>
          <option value="">All Operators</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <Button onClick={filterByOperatorAndDate}>Filter</Button>
        <Button variant="secondary" onClick={resetFilters}>
          Reset Filters
        </Button>
        <CalcForm />
      </div>
    </div>
  );
};

export default Calculator;
