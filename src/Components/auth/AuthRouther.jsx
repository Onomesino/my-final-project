import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Link to="/signup">Create an account</Link>
      <div>
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    </Router>
  );
};

const SignIn = () => {
  // ...
};

const SignUp = () => {
  // ...
};

const AuthDetails = () => {
  // ...
};

export default App;









// import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Link to="/signup">Create an account</Link>
//     </Router>
//   );
// };

// export default App;
