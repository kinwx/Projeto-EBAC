import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB_eTWOZN2Ila2kZ4WFYmUvtSVPCfMq0Ic",
  authDomain: "tiktok---jornada-daa5c.firebaseapp.com",
  projectId: "tiktok---jornada-daa5c",
  storageBucket: "tiktok---jornada-daa5c.appspot.com",
  messagingSenderId: "884862797179",
  appId: "1:884862797179:web:053efa869a2960535969de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;