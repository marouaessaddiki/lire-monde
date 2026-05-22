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
