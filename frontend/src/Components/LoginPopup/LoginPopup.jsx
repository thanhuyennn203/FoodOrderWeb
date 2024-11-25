import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useContext(StoreContext);

  const handleSubmit = () => {
    if (password.length != 0 && email != 0) {
      if (currState === "Sign Up") {
        //register
        const data = { name, email, password };
        fetch("http://localhost:8801/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              return Promise.reject("Failed...");
            }
            return response.json();
          })
          .then((data) => {
            setCurrState("Login");
          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
      } else {
        //log in
        const userLogin = { email, password };
        fetch("http://localhost:8801/api/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(userLogin),
        })
          .then((response) => {
            if (!response.ok) {
              return Promise.reject("Failed...");
            }
            return response.json();
          })
          .then((data) => {
            alert("login");
            setShowLogin(false);
            console.log("call login local: ", data);
            login(data);
          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
      }
    }
  };

  return (
    <div className="login-popup" id="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>{" "}
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={handleSubmit}>
          {currState === "Login" ? "Login" : "Create account"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
