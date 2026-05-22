const API_URL = "http://localhost:3000/books";

/* ELEMENTS */
const adminSearch   = document.getElementById("adminSearch");
const tableBody     = document.getElementById("adminTableBody");

const formModal     = document.getElementById("formModal");
const formModalTitle= document.getElementById("formModalTitle");
const openAddModal  = document.getElementById("openAddModal");
const closeFormModal= document.getElementById("closeFormModal");
const cancelForm    = document.getElementById("cancelForm");
const submitForm    = document.getElementById("submitForm");

const fieldTitle    = document.getElementById("fieldTitle");
const fieldAuthor   = document.getElementById("fieldAuthor");
const fieldGenre    = document.getElementById("fieldGenre");
const fieldDescription = document.getElementById("fieldDescription");
const fieldImage    = document.getElementById("fieldImage");
const editBookId    = document.getElementById("editBookId");

const deleteModal   = document.getElementById("deleteModal");
const deleteBookName= document.getElementById("deleteBookName");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete  = document.getElementById("cancelDelete");

/* STATE */
let books = [];
let bookToDeleteId = null;

/* FETCH */
async function fetchBooks() {
  try {
    const res = await fetch(API_URL);
    books = await res.json();
    renderTable(books);
  } catch (err) {
    tableBody.innerHTML = <tr><td colspan="6" style="padding:20px;color:#8b82a7;text-align:center;">Erreur — vérifiez que json-server est lancé.</td></tr>;
  }
}

/* RENDER TABLE */
function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach(book => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="td-id">${book.id}</td>
      <td class="td-cover">
        <img src="${book.image}" alt="${book.title}"
          onerror="this.style.background='#e0d9f0';this.removeAttribute('src')">
      </td>
      <td class="td-title">${book.title}</td>
      <td>${book.author}</td>
      <td class="td-genre"><span>${book.genre}</span></td>
      <td class="td-actions">
        <button class="btn-edit" title="Modifier" onclick="openEditModal('${book.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="btn-delete" title="Supprimer" onclick="openDeleteModal('${book.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}
/* SEARCH */
adminSearch.addEventListener("input", () => {
  const val = adminSearch.value.toLowerCase();
  const filtered = books.filter(b =>
    (b.title || "").toLowerCase().includes(val) ||
    (b.author || "").toLowerCase().includes(val) ||
    (b.genre || "").toLowerCase().includes(val)
  );
  renderTable(filtered);
});

/* OPEN ADD MODAL */
openAddModal.addEventListener("click", () => {
  editBookId.value = "";
  fieldTitle.value = "";
  fieldAuthor.value = "";
  fieldGenre.value = "";
  fieldDescription.value = "";
  fieldImage.value = "";
  formModalTitle.textContent = "Ajouter un livre";
  submitForm.textContent = "Ajouter";
  formModal.classList.remove("hidden");
});

/* OPEN EDIT MODAL */
window.openEditModal = function(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  editBookId.value = book.id;
  fieldTitle.value = book.title;
  fieldAuthor.value = book.author;
  fieldGenre.value = book.genre;
  fieldDescription.value = book.description || "";
  fieldImage.value = book.image || "";
  formModalTitle.textContent = "Modifier le livre";
  submitForm.textContent = "Enregistrer";
  formModal.classList.remove("hidden");
};

/* CLOSE FORM MODAL */
function closeForm() {
  formModal.classList.add("hidden");
}
closeFormModal.addEventListener("click", closeForm);
cancelForm.addEventListener("click", closeForm);
formModal.addEventListener("click", e => { if (e.target === formModal) closeForm(); });