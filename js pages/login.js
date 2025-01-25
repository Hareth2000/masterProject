// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2C4Djv2h0dMRluFw6NFSfQFtfkzZ6FAU",
  authDomain: "masterproject-158b4.firebaseapp.com",
  projectId: "masterproject-158b4",
  storageBucket: "masterproject-158b4.firebasestorage.app",
  messagingSenderId: "632368585512",
  appId: "1:632368585512:web:0a0100256c7cbd27cf8e1d",
  measurementId: "G-S33GMFE8W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Regex Patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
const phoneRegex = /^\d{10}$/; // 10 digits only
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
const ageRegex = /^(1[0-9]?[0-9]|120)$/; // Age between 1 and 120

// Handle Registration
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("registerName").value;
  const age = document.getElementById("registerAge").value;
  const phone = document.getElementById("registerPhone").value;
  const address = document.getElementById("registerAddress").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirmPassword").value;

  // Validate fields using Regex
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
    });
    return;
  }

  if (!phoneRegex.test(phone)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Phone Number',
      text: 'Please enter a valid 10-digit phone number.',
    });
    return;
  }

  if (!passwordRegex.test(password)) {
    Swal.fire({
      icon: 'error',
      title: 'Weak Password',
      text: 'Password must be at least 8 characters long, include uppercase, lowercase, numbers, and special characters.',
    });
    return;
  }

  if (!ageRegex.test(age)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Age',
      text: 'Please enter a valid age between 1 and 120.',
    });
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Password Mismatch',
      text: 'Passwords do not match!',
    });
    return;
  }

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user info to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      age,
      phone,
      address,
      email,
      createdAt: new Date()
    });

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'User registered successfully!',
    });
    // Optionally, redirect to another page after registration
    // window.location.href = "/dashboard.html";
  } catch (error) {
    console.error("Error registering user:", error.message);
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.message,
    });
  }
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Validate email
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
    });
    return;
  }

  try {
    // Sign in user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'Logged in successfully!',
    });
    // Optionally, redirect to another page after login
    window.location.href = "../htmlPages/homeUserPage.html";
  } catch (error) {
    console.error("Error logging in:", error.message);
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.message,
    });
  }
});