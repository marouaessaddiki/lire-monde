const API_URL = "http://localhost:3000/books";

/* ELEMENTS */
const booksContainer = document.getElementById("booksContainer");
const filters = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const bookCount = document.getElementById("bookCount");
const aLireCount = document.getElementById("aLireCount");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalGenre = document.getElementById("modalGenre");
const modalDescription = document.getElementById("modalDescription");

const toggleReadBtn = document.getElementById("toggleReadBtn");
const aLireContainer = document.getElementById("aLire");

/* STATE */
let books = [];
let currentBook = null;

/* FETCH */
async function fetchBooks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API Error");

    books = await res.json();

    displayBooks(books);
    generateFilters();
    renderALire();

  } catch (err) {
    console.error(err);
    booksContainer.innerHTML = "<p style='padding:20px;color:#8b82a7;'>Erreur de chargement — assurez-vous que json-server tourne.</p>";
  }
}

/* DISPLAY BOOKS */
function displayBooks(data) {
  booksContainer.innerHTML = "";

  if (bookCount) bookCount.textContent = data.length + " livre" + (data.length > 1 ? "s" : "");

  data.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <span class="book-genre-badge">${book.genre}</span>
      <img src="${book.image}" alt="${book.title}" loading="lazy" onerror="this.style.background='#e0d9f0';this.removeAttribute('src')">
      <div class="book-card-body">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(book.id));
    booksContainer.appendChild(card);
  });
}

/* FILTERS */
function generateFilters() {
  const genres = [...new Set(books.map(b => b.genre))];

  filters.innerHTML = `<button class="filter-btn active" onclick="filterBooks('Tous', this)">Tous</button>`;

  genres.forEach(g => {
    filters.innerHTML += `<button class="filter-btn" onclick="filterBooks('${g}', this)">${g}</button>`;
  });
}

window.filterBooks = function (genre, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (genre === "Tous") return displayBooks(books);

  const filtered = books.filter(b => b.genre === genre);
  displayBooks(filtered);
};

