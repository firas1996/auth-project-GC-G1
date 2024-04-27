import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (prevState, actions) => {
  switch (actions.type) {
    case "user 9a3ed yekteb":
      return { value: actions.data, isValid: actions.data.includes("@") };
    case "ki to5rej":
      return { value: prevState.value, isValid: prevState.value.includes("@") };
    default:
      return { value: "", isValid: null };
  }
};
const passwordReducer = (prevState, actions) => {
  if (actions.type === "user 9a3ed yekteb") {
    return { value: actions.data, isValid: actions.data.trim().length > 6 };
  } else if (actions.type === "ki to5rej") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 6,
    };
  }
  return { value: "", isValid: null };
  // switch (actions.type) {
  //   case "user 9a3ed yekteb":
  //     return { value: actions.data, isValid: actions.data.trim().length > 6 };
  //   case "ki to5rej":
  //     return {
  //       value: prevState.value,
  //       isValid: prevState.value.trim().length > 6,
  //     };
  //   default:
  //     return { value: "", isValid: null };
  // }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: emailValidation } = email;
  const { isValid: passwordVAlidation } = password;
  useEffect(() => {
    let x = setTimeout(() => {
      console.log("effect");
      setFormIsValid(emailValidation && passwordVAlidation);
    }, 1000);
    return () => {
      clearTimeout(x);
      console.log("clean-up");
    };
  }, [emailValidation, passwordVAlidation]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "user 9a3ed yekteb", data: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && password.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "user 9a3ed yekteb", data: event.target.value });

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && email.value.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "ki to5rej" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "ki to5rej" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email.value, password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            password.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
