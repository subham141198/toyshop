
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERI ,
//   appId: import.meta.env.VITE_APPID,
// };
  
const firebaseConfig = {
  apiKey: "AIzaSyDD1WaFJvX-0VR_Tii2w26aH72mHEJu89A",
  authDomain: "toybazar-b033b.firebaseapp.com",
  projectId: "toybazar-b033b",
  storageBucket: "toybazar-b033b.appspot.com",
  messagingSenderId: "243155776627",
  appId: "1:243155776627:web:031233eef6e59b04736606"
};

 const app = initializeApp(firebaseConfig)
 export  const auth = getAuth(app)
 export default app