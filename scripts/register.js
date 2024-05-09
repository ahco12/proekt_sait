// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhqYjL6AKp1vPTDgNp_GlUMvjuj3BcNk",
  authDomain: "proektsait-150c9.firebaseapp.com",
  databaseURL: "https://proektsait-150c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proektsait-150c9",
  storageBucket: "proektsait-150c9.appspot.com",
  messagingSenderId: "1006914747904",
  appId: "1:1006914747904:web:bbc10bcad4084ad99262e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitRegister = document.getElementById('btnRegister');
submitRegister.addEventListener("click", function(event) {
  event.preventDefault();

  const emailRegistration = document.getElementById('emailRegistration').value.trim();
  const passwordRegistration = document.getElementById('passwordRegistration').value;

  createUserWithEmailAndPassword(auth, emailRegistration, passwordRegistration)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      alert("Account created successfully!");
      // Optionally, you can redirect the user to another page or perform additional actions
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // Handle errors appropriately (e.g., display error messages to the user)
    });
});
