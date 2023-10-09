import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYy9LQt56qtJu_xj3smkj1YOCPq2Kgb30",
  //   authDomain: "fir-auth-project-21aa8.firebaseapp.com",
  projectId: "fir-auth-project-21aa8",
  //   storageBucket: "fir-auth-project-21aa8.appspot.com",
  //   messagingSenderId: "323795923288",
  //   appId: "1:323795923288:web:486694d5218ac0bd75752d",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Exporting auth here

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);



// export const auth = getAuth(app);
