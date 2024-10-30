"use client";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const usernameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const [formInputs, setFormInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
  });
  const [error, setError] = useState(null);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleKeyPress = (event, nextFieldRef) => {
    setError("");
    if (event.key === "Enter") {
      event.preventDefault();
      if (!event.target.value) {
        setError(`Enter ${event.target.name}`);
        return;
      }
      if (event.target.name === "email") {
        if (!validateEmail(event.target.value)) {
          setError("Please provide  a valid email address");
          return;
        }
      }
      if (event.target.name === "number") {
        handleSubmit(event);
      } else {
        nextFieldRef.current.focus();
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    Object.keys(formInputs).forEach((field) => {
      if (!formInputs[field]) {
        setError("Please fill the fields");
        isValid = false;
        return;
      }
    });
    if (isValid) {
      console.log("submitting", formInputs);
      router.push("/");
    }
  };
  const card = (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <h4 className="text-2xl font-serif text-black font-bold uppercase tracking-wide text-center">
            Sign Up
          </h4>
          <input
            type="text"
            name="firstname"
            className={`w-full p-2 my-2 border border-gray-300 rounded-md focus:outline-none ${
              error
                ? "focus:ring-2 focus:ring-red-500"
                : "focus:ring-2 focus:ring-blue-500"
            } `}
            placeholder="First Name"
            ref={usernameRef}
            value={formInputs.firstname}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, lastNameRef)}
          />
          <input
            type="text"
            name="lastname"
            className={`w-full p-2 my-2 border border-gray-300 rounded-md focus:outline-none ${
              error
                ? "focus:ring-2 focus:ring-red-500"
                : "focus:ring-2 focus:ring-blue-500"
            } `}
            placeholder="Last Name"
            ref={lastNameRef}
            value={formInputs.lastname}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, emailRef)}
          />
          <input
            type="email"
            name="email"
            className={`w-full p-2 my-2 border border-gray-300 rounded-md focus:outline-none ${
              error
                ? "focus:ring-2 focus:ring-red-500"
                : "focus:ring-2 focus:ring-blue-500"
            } `}
            placeholder="Email"
            ref={emailRef}
            value={formInputs.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, phoneNumberRef)}
          />
          <input
            type="number"
            name="number"
            className={`w-full p-2 my-2 border border-gray-300 rounded-md focus:outline-none ${
              error
                ? "focus:ring-2 focus:ring-red-500"
                : "focus:ring-2 focus:ring-blue-500"
            } `}
            placeholder="Phone Number"
            ref={phoneNumberRef}
            value={formInputs.number}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, null)}
          />
          {error && (
            <p className="text-red-600 text-center font-mono">
              <ErrorIcon />
              {error}
            </p>
          )}
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            size="small"
            variant="contained"
            className="mx-auto"
          >
            Submit
          </Button>
        </CardActions>
      </form>
    </React.Fragment>
  );
  return (
    <div className="flex flex-col justify-center items-center m-7 p-4">
      <Box sx={{ maxWidth: 475 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
