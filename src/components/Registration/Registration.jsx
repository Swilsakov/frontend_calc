import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Input from "../../utils/Input";
import { registrationAPI } from "../../api/authAPI";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegistration = () => {
    registrationAPI(email, password);
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
        <Button variant="primary" type="submit" onClick={handleRegistration}>
          Registration
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
