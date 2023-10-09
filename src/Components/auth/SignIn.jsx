import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import "./Auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Log In</h1>
      <div className="Sign-in-container">
        <Row>
          <Col>
            <img src="fashion.jpg" alt="" srcset="" className="fas-img" />
          </Col>
          <Col>
            <form onSubmit={SignIn}>
              <label htmlFor="email" className="email">
                Email<span>*</span>
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="password" className="password">
                Password<span>*</span>
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button
                type="submit"
                className="log-in"
                onClick={() => navigate("/Profile")}
              >
                Log In
              </button>
              <br />
              <button id="signUp">
                <Link to="/signup">create an account</Link>
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignIn;

// className="create-account"

// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Firebase";
// import "./Auth.css";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const SignIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="Sign-in-container">
//       <h1>Log In</h1>
//       <form onSubmit={SignIn}>
//         <label htmlFor="email" className="email">
//           Email<span>*</span>
//         </label>
//         <br />
//         <input
//           type="email"
//           placeholder="Enter your email..."
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label htmlFor="password" className="password">
//           Password<span>*</span>
//         </label>
//         <br />
//         <input
//           type="password"
//           placeholder="Enter your password..."
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button type="submit" className="log-in">
//           Log In
//         </button>
//         <button  type="button"  className="create-account">
//           create an account
//         </button>
//         <a href="SignUp.jsx">create an account</a>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
