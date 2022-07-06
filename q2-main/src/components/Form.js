import React from "react";
import { useState } from "react";

function Form(props) {
  const initContact = {
    id: 1,
    userName: "Avinash Sharma",
    userEmail: "admin@avinash-sharma.com",
    userPhone: "8885559999",
    userProfile: "https://images.unsplash.com/photo-1656954261081-93c805b386b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  };

  const [userState, setUserState] = useState(initContact);

  const handleUserChange = e => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!userState.userName || !userState.userEmail || !userState.userPhone) return;
    props.addUser(userState);
    setUserState(initContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Please enter your name</label>
      <br />
      <input type="text" name="userName" onChange={handleUserChange} />
      <br />
      <label>Please enter your email</label>
      <br />
      <input type="email" name="userEmail" onChange={handleUserChange} />
      <br />
      <label>Enter your Contact Number</label>
      <br />
      <input type="number" name="userPhone" onChange={handleUserChange} />
      <br />
      <label>Paste your profile picture URL:</label>
      <br />
      <input type="url" name="userProfile" onChange={handleUserChange} />
      <br />
      <input type="submit" value="Create Card" />
    </form>
  );
}

export default Form;
