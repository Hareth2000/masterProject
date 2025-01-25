const projectDivs = document.querySelectorAll('.projects > div');

// Loop through each div and add a click event listener
projectDivs.forEach((div) => {
  div.addEventListener('click', () => {
    window.location.href = '../htmlPages/shopPage.html'; 
  });
});


const sliderWrapper = document.querySelector(".slider-wrapper");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  const translateX = -currentIndex * 100; // Slide width is 100% of the wrapper
  sliderWrapper.style.transform = `translateX(${translateX}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % dots.length;
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});


document.addEventListener("click", function (event) {
  // Check if the clicked element is an "add-to-cart" button
  if (event.target.closest(".add-to-cart")) {
      const button = event.target.closest(".add-to-cart");
      // Get the "add-box" within the clicked button
      const addBox = button.querySelector(".add-box");
      if (!addBox) return; // Exit if addBox is not found
  
      const loader = addBox.querySelector(".loader");
      const addText = addBox.querySelector("a");
      const doneIcon = addBox.querySelector(".done");
  
      // Check if all required elements exist inside the clicked button
      if (!loader || !addText || !doneIcon) {
      console.error("Missing required elements inside the button structure.");
      return;
      }
  
      // Hide the "Add to Cart" text
      addText.style.visibility = "hidden";
  
      // Start the loader animation
      loader.classList.add("active");
  
      setTimeout(() => {
      // Transition to the check icon
      loader.classList.remove("active");
      loader.classList.add("check");
      doneIcon.classList.add("check");
  
      setTimeout(() => {
          console.log("Added to cart for this button!");
      }, 500);
      }, 1000);
  }
  });
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.uid);
    fetchAndDisplayUserName(user.uid); // Fetch and display user name
  } else {
    console.log("No user is logged in.");
  }
});

// Fetch and display user name
async function fetchAndDisplayUserName(uid) {
  try {
    const userDocRef = doc(db, "users", uid); // Reference to the user document
    const userDoc = await getDoc(userDocRef); // Fetch the document

    if (userDoc.exists()) {
      const userName = userDoc.data().firstName; // Get the user's first name
      document.getElementById("welcome-message").textContent = `${userName}!`; // Display the name
    } else {
      console.error("No user data found.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Fetch and display equipment
async function fetchAndRenderEquipment() {
  try {
    const equipmentCollection = collection(db, "equipment"); // Reference to the equipment collection
    const equipmentSnapshot = await getDocs(equipmentCollection); // Fetch all documents
    const equipmentList = document.getElementById("slider-wrapper"); // Get the container for equipment

    equipmentList.innerHTML = ""; // Clear the container

    equipmentSnapshot.forEach((doc) => {
      const equipment = doc.data(); // Get the equipment data
      const equipmentCard = renderEquipmentCard(equipment, doc.id); // Render the card
      equipmentList.appendChild(equipmentCard); // Add the card to the container
    });
  } catch (error) {
    console.error("Error fetching equipment:", error);
  }
}

// Render equipment card
function renderEquipmentCard(equipment, id) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = equipment.image;
  image.alt = equipment.name;
  image.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.textContent = equipment.name;
  title.classList.add("card-title");

  const description = document.createElement("p");
  description.textContent = equipment.description;
  description.classList.add("card-text");

  const price = document.createElement("p");
  price.textContent = `Price: $${equipment.price}/day`;
  price.classList.add("card-text");

  const rentButton = document.createElement("button");
  rentButton.textContent = "Rent Now";
  rentButton.classList.add("btn", "btn-primary");
  rentButton.addEventListener("click", () => {
    window.location.href = `product-details.html?id=${id}`; // Redirect to product details page
  });

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(price);
  cardBody.appendChild(rentButton);

  card.appendChild(image);
  card.appendChild(cardBody);

  return card;
}

// Add equipment to cart
async function addToCart(equipmentId, userId) {
  try {
    const cartCollection = collection(db, "cart"); // Reference to the cart collection
    const equipmentDocRef = doc(db, "equipment", equipmentId); // Reference to the equipment document
    const equipmentDoc = await getDoc(equipmentDocRef); // Fetch the equipment data

    if (equipmentDoc.exists()) {
      const equipmentData = equipmentDoc.data();
      await addDoc(cartCollection, {
        userId: userId,
        equipmentId: equipmentId,
        name: equipmentData.name,
        price: equipmentData.price,
        image: equipmentData.image,
        addedAt: new Date()
      });
      console.log("Equipment added to cart successfully!");
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart',
        text: 'The equipment has been added to your cart.',
      });
    } else {
      console.error("Equipment not found.");
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to add equipment to cart.',
    });
  }
}

// Fetch and render equipment on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchAndRenderEquipment();
});

