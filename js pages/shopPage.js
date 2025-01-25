
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

/* Navbar Styles */
.navbar {
  background-color: #2c3e50 !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: auto;
}

.navbar-brand img {
  margin-right: 10px;
}

.logospan {
  color: #fff;
}

.logospan span {
  color: #FFA500;
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
}

.nav-link {
  color: #fff !important;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-link:hover {
  color: #FFA500 !important;
  transform: translateY(-3px);
}

.nav-link.active {
  color: #FFA500 !important;
  font-weight: bold;
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  background-image: none;
  position: relative;
  width: 24px;
  height: 2px;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #fff;
  transition: transform 0.3s ease;
}

.navbar-toggler-icon::before {
  transform: translateY(-6px);
}

.navbar-toggler-icon::after {
  transform: translateY(6px);
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before {
  transform: rotate(45deg);
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
  transform: rotate(-45deg);
}

.profile-cart {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
}

.profile-cart a {
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.profile-cart a:hover {
  color: #FFA500;
  transform: translateY(-3px);
}

/* Hero Section */
.hero {
  padding: 4rem 0;
  background-image: url('https://via.placeholder.com/1920x600'); /* صورة الخلفية */
  background-size: cover;
  background-position: center;
  color: #fff;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* طبقة داكنة فوق الصورة */
  border-radius: 10px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.hero-buttons .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.hero-buttons .btn-primary {
  background-color: #FFA500;
  border: none;
}

.hero-buttons .btn-primary:hover {
  background-color: #e69500;
  transform: translateY(-3px);
}

.hero-buttons .btn-secondary {
  background-color: #6c757d;
  border: none;
}

.hero-buttons .btn-secondary:hover {
  background-color: #5a6268;
  transform: translateY(-3px);
}

/* Swiper Container */
.swiper {
  width: 100%;
  height: 100%;
  padding: 20px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.card {
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.card-text {
  color: #666;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.card-price {
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
}

.card-rating {
  color: #FFA500;
  margin-bottom: 0.75rem;
}

.card-rating i {
  margin-right: 0.25rem;
}

.card-button {
  width: 100%;
  padding: 0.5rem;
  background-color: #FFA500;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #e69500;
}

/* Swiper Navigation Buttons */
.swiper-button-next,
.swiper-button-prev {
  color: #FFA500;
}

/* Swiper Pagination */
.swiper-pagination-bullet {
  background-color: #FFA500;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 4rem 2rem;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  margin-bottom: 1.5rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #FFA500;
}

.footer-section p {
  font-size: 1rem;
  color: #ddd;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #ddd;
}

.footer-section ul li i {
  margin-right: 0.5rem;
  color: #FFA500;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #FFA500;
}

/* Newsletter Form */
.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  background-color: #FF6B35;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #e65a2b;
}

/* Social Icons */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-icons a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #FFA500;
}

/* Copyright */
.copyright {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #ddd;
}
/* Popup Styles */
.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  position: relative;
  margin: auto;
  overflow-y: auto;
  max-height: 90vh;
}

.popup-content .close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.popup-content h2 {
  margin-bottom: 1.5rem;
}

.popup-content .form-group {
  margin-bottom: 1rem;
}

.popup-content .form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.popup-content .form-group input,
.popup-content .form-group textarea,
.popup-content .form-group select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.popup-content button {
  width: 100%;
  padding: 0.75rem;
  background-color: #FFA500;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.popup-content button:hover {
  background-color: #e69500;
}
