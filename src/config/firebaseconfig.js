// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw3d17zV2EfA9t1TEAIvsvV9wY8Rsoqn4",
  authDomain: "fir-hostingapp-88df6.firebaseapp.com",
  databaseURL: "https://fir-hostingapp-88df6-default-rtdb.firebaseio.com",
  projectId: "fir-hostingapp-88df6",
  storageBucket: "fir-hostingapp-88df6.appspot.com",
  messagingSenderId: "830570172770",
  appId: "1:830570172770:web:dd8c662a905757aa611c3b",
  measurementId: "G-T5DZXJN7EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;