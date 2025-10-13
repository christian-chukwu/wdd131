const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// for contact page
// Dynamic year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Contact form logic
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const contactData = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  // Save to localStorage
  localStorage.setItem("caszContact", JSON.stringify(contactData));

  alert(`Thank you, ${name}! Your message has been received.`);

  contactForm.reset();
});

// for product page
document.getElementById("currentyear").textContent = new Date().getFullYear();

const products = [
  { name: "Paracetamol", price: "500 Franc", category: "pain", image: "images/paracetamol.webp" },
  { name: "Ibuprofen", price: "700 Franc", category: "pain", image: "images/ibrufen.webp" },
  { name: "Vitamin C", price: "800 Franc", category: "vitamins", image: "images/vitamin.webp" },
  { name: "Multivitamins", price: "1500 Franc", category: "vitamins", image: "images/multivitamins.webp" },
  { name: "Antiseptic", price: "1200 Franc", category: "hygiene", image: "images/antisep.webp" },
  { name: "Hand Sanitizer", price: "1000 Franc", category: "hygiene", image: "images/santizer.webp" },
  { name: "Amoxicillin", price: "2000 Franc", category: "antibiotics", image: "images/amoxici.webp" },
  { name: "Coartem", price: "1800 Franc", category: "antimalarials", image: "images/coartem.webp" },
  { name: "Cough Syrup", price: "900 Franc", category: "cough", image: "images/cough.webp" },
  { name: "Eye Drops", price: "600 Franc", category: "eye", image: "images/eye_drops.webp" }
];

function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-category", product.category);
    card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-info">
            <p><strong>${product.name}</strong></p>
            <p>${product.price}</p>
          </div>
        `;
    grid.appendChild(card);
  });
}

// Save last selected category
function filterProducts(category) {
  localStorage.setItem("lastCategory", category); // Save to localStorage
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.filter-btn[onclick*="${category}"]`)?.classList.add("active");

  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

// Load last category on page load
const savedCategory = localStorage.getItem("lastCategory");
if (savedCategory) {
  filterProducts(savedCategory);
} else {
  displayProducts(products);
}

// Order page
document.getElementById("currentyear").textContent = new Date().getFullYear();

const orderForm = document.querySelector(".order-form");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const category = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!name || !email || !category || quantity < 1) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const order = {
    name,
    email,
    category,
    quantity,
    date: new Date().toLocaleString()
  };

  // Save to localStorage
  let orders = JSON.parse(localStorage.getItem("caszOrders")) || [];
  orders.push(order);
  localStorage.setItem("caszOrders", JSON.stringify(orders));

  // Confirmation message
  alert(`Thank you, ${name}! Your order for ${quantity} item(s) in ${category} has been received.`);

  orderForm.reset();
});

// HUMBGER 
// Hamburger toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
