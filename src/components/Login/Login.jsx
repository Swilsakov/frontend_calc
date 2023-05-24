import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Input from "../../utils/Input";
import { loginAPI } from "../../api/authAPI";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    dispatch(loginAPI(email, password));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email"
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
        />
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
