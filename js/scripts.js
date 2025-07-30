/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

const categories = [
  { id: 'all', name: 'Tüm Ürünler' },
  { id: 'içecekler', name: 'İçecekler' },
  { id: 'süt-ürünleri', name: 'Süt Ürünleri' },
  { id: 'bal', name: 'Ballar' },
  { id: 'yağlar', name: 'Yağlar' },
  { id: 'sabunlar', name: 'Sabunlar' },
  { id: 'unlu-mamuller', name: 'Unlu Mamüller' },
  { id: 'baharatlar', name: 'Baharatlar' },
  { id: 'bitki-caylar', name: 'Bitki Çayları' },
  { id: 'tuzlar', name: 'Tuzlar' },
  { id: 'meyveler', name: 'Meyveler' }
];

const products = [
  { id: 1, name: "Ayran", category: "içecekler", description: "Yoğurt, su ve tuz karışımı.", image: "ayran.jpg" },
  { id: 2, name: "Boza", category: "içecekler", description: "Fermente darı içeceği.", image: "boza.jpg" },
  { id: 3, name: "Kars Kaşarı", category: "süt-ürünleri", description: "Kars yaylası peyniri.", image: "kars-kasari.jpg" },
  { id: 4, name: "Anzer Balı", category: "bal", description: "Şifalı yüksek yayla balı.", image: "anzer-bali.jpg" },
  { id: 5, name: "Ezine Peyniri", category: "süt-ürünleri", description: "Yoğun aromalı peynir.", image: "ezine-peyniri.jpg" },
  { id: 6, name: "Ayvalık Zeytinyağı", category: "yağlar", description: "Düşük asitli sızma yağ.", image: "ayvalik-zeytinyagi.jpg" },
];

const categoryButtons = document.getElementById("categoryButtons");
const productGrid = document.getElementById("productGrid");

function renderCategories() {
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.name;
    btn.dataset.category = cat.id;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(cat.id);
    });
    categoryButtons.appendChild(btn);
  });
}

function renderProducts(filter) {
  productGrid.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="images/${p.image}" alt="${p.name}" onerror="this.src='images/placeholder.jpg'">
      <div class="content">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// yıl güncelle
document.getElementById("year").textContent
