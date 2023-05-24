import React, { useState } from "react";
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleRegistration}>
          Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
