// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

const images = [
  "img/ds.jpeg",
  "img/ds1.jpeg",
  "img/ds2.jpeg",
  "img/ds3.jpeg",
  "img/ds4.jpeg",
  "img/ds5.jpeg",
  "img/ds6.jpeg",
  "img/ds7.jpeg"
];

let index = 0;

function showSlide() {
  const proof = document.querySelector(".proof");
  const dots = document.querySelectorAll(".dot");

  // ganti background
  proof.style.backgroundImage = `url(${images[index]})`;

  // reset semua dot
  dots.forEach(dot => dot.classList.remove("active"));

  // aktifkan dot sesuai index
  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

function goToSlide(i) {
  index = i;
  showSlide();
}

const dropdowns = document.querySelectorAll(".dropdown-toggle");

dropdowns.forEach(toggle => {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();

    const parent = this.parentElement;

    // tutup dropdown lain
    document.querySelectorAll(".dropdown").forEach(drop => {
      if (drop !== parent) {
        drop.classList.remove("active");
      }
    });

    document.addEventListener("click", function(e) {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(drop => {
          drop.classList.remove("active");
        });
      }
    });

    // toggle dropdown ini
    parent.classList.toggle("active");
  });
});

function kirimWA(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const hp = document.getElementById("hp").value;
  const layanan = document.getElementById("layanan").value;
  const kendala = document.getElementById("kendala").value;
  const pesan = document.getElementById("pesan").value;

  const noWA = "628561458701";

  const text = 
`Halo SJ Electronics,

Saya ingin service elektronik:

Nama: ${nama}
No HP: ${hp}

Layanan: ${layanan}

Kendala:
${kendala}

Detail tambahan:
${pesan || "-"}

Apakah bisa dibantu hari ini?`;

  const url = `https://wa.me/${noWA}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  return false; // 🔥 WAJIB biar tidak refresh

  document.querySelector("form").reset();
}