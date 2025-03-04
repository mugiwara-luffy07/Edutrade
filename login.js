import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU99nR2xbHq4DkLQ98CeQvy-nehAkh8vs",
  authDomain: "sample-login-b70d3.firebaseapp.com",
  projectId: "sample-login-b70d3",
  storageBucket: "sample-login-b70d3.firebasestorage.app",
  messagingSenderId: "590361871054",
  appId: "1:590361871054:web:a1ef11f2efb2934b9bc69f",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig); // Initialize the app before using any Firebase services
const auth = getAuth(app); // Pass the initialized app to getAuth

// Handle sign-up
const signupButton = document.getElementById("signup");
signupButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a new user with email and password (sign up)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("User created successfully!");
      // Redirect or handle new user as needed
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
