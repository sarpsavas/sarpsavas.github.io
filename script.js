// ================= SLAYT =================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;

  // Kaydırma
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Nokta güncelleme
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// İlk gösterim
showSlide(0);

// Otomatik geçiş
setInterval(nextSlide, 5000);


// ================= NAVBAR MENÜ =================
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-260px" : "0px";
}

// ================= PROGRAM	 =================

function openFullScreen(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeFullScreen() {
  document.getElementById("imgModal").style.display = "none";
}

// =================  DUYURU =================

function openDuyuru(id) {
  document.getElementById(id).style.display = "block";
}
function closeDuyuru(id) {
  document.getElementById(id).style.display = "none";
}

// =================  GALLERY =================

function openGallery(img) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("galleryModalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}



