import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Auth.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name, surName)
      .then((userCredential) => {
        navigate("/Profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <h1>Sign Up</h1>
    <div className="Sign-in-container">
      <Row>
        <Col>
          <img src="fashion.jpg" alt="" srcset="" className="fas-img"/>
        </Col>
        <Col>
          <form onSubmit={SignUp} className="container">
            <label>
              Name<span>*</span>
            </label>
            <br />
            <input
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>
              SurName<span>*</span>
            </label>
            <br />
            <input
              type="Surname"
              placeholder="Enter your Surname"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
            <br />
            <label>
              Email<span>*</span>
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>
              Password<span>*</span>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="log-in"
              onClick={() => navigate("/Profile")}
            >
              Sign Up
              {/* <Link to="/Profile">Sign Up</Link> */}
            </button>
          </form>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default SignUp;
