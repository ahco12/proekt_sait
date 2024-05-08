// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhqYjL6AKp1vPTDgNp_GlUMvjuj3BcNk",
  authDomain: "proektsait-150c9.firebaseapp.com",
  projectId: "proektsait-150c9",
  storageBucket: "proektsait-150c9.appspot.com",
  messagingSenderId: "1006914747904",
  appId: "1:1006914747904:web:bbc10bcad4084ad99262e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitLogin = document.getElementById('btnLogin');
submitLogin.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      // Optionally, you can redirect the user to another page or perform additional actions
      window.location.href = "sait.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // Handle errors appropriately (e.g., display error messages to the user)
    });
});
