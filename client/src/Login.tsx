import React, { SyntheticEvent, useState } from "react";
import Header from "./Header";
import "./css/button.scss";
import axios from "axios";
import Alert from "./Alert";
import "./css/login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

  const login = (e: SyntheticEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) return;
        setMessage(res.data.status);
        setStatus("success");
        setId(res.data.id);
        localStorage.setItem("jwt", res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
        setStatus("error");
      });
  };

  const alert = () => {
    setTimeout(() => {
      setId("");
      setMessage("");
      setStatus("");
      setPassword("");
      setEmail("");
    }, 3000);

    return <Alert message={message} status={status} id={id} />;
  };

  return (
    <div className="login">
      <Header />
      {status !== "" && alert()}
      <div className="form">
        <form onSubmit={login}>
          <div>
            {" "}
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Type here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input
              id="password"
              type="password"
              name="password"
              minLength={8}
              placeholder="Type here..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-button" id="login-button">
            <button className="btn btn-blue" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
