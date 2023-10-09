import React from "react";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
//import AuthDetails from "./Components/AuthDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/auth/Profile";
import ProfileManagement from "./Components/auth/manageProfile";

function App() {
  return (
    <Router>
      <Routes>
        {/* <SignIn /> */}
        {/* <SignUp />
        <AuthDetails /> */}
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile" element={<ProfileManagement />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

















// import { useState, useEffect } from "react";
// import "./App.css";
// import { db } from "./Firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";

// function App() {
//   const [newEmail, setNewEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("")

//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "users");

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, {
//       Email: newEmail,
//      Password: newPassword,
//     });
//   };

//   const updateUser = async (id, Email, Password) => {
//     const userDoc = doc(db, "users", id);
//     // const newFields = { age: age + 1 };
//     await updateDoc(userDoc);
//   };

//   const deleteUser = async (id) => {
//     const userDoc = doc(db, "users", id);
//     await deleteDoc(userDoc);
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getUsers();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Log in</h1>
//       <form>
//         <label for="fname">Email:</label>
//         <br />
//         <input
//           type="email"
//           placeholder="email..."
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
//         />
//         <br />
//         <label for="fname">Password:</label>
//         <br />
//         <input
//           type="password"
//           placeholder="password..."
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//         />
//       </form>
//       <button onClick={SignUp}>Sign Up</button>
//       {users.map((user) => {
//         return (
//           <div>
//             <h1>Name: {user.name} </h1>
//             <h1>Age: {user.age} </h1>
//             <button
//               onClick={() => {
//                 updateUser(user.id, user.age);
//               }}
//             >
//               Edit Age
//             </button>
//             <button
//               onClick={() => {
//                 deleteUser(user.id);
//               }}
//             >
//               deleteUser
//             </button>
//           </div>
//         );
//       })}{" "}
//     </div>
//   );
// }

// export default App;
