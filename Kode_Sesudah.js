// ===== KONSTANTA =====
const ERROR_MESSAGE = "Mohon isi semua data!";
const ROW_OFFSET = 1;

// ===== ELEMENT =====
const formMahasiswa = document.getElementById("formMahasiswa");
const tableBodyMahasiswa = document.querySelector("#tabelMahasiswa tbody");

// ===== EVENT =====
formMahasiswa.addEventListener("submit", handleFormSubmit);

// ===== FUNCTION =====

// Handle submit form (SRP: hanya mengatur alur)
function handleFormSubmit(event) {
  event.preventDefault();

  const data = getFormData();

  if (!isFormValid(data)) {
    alert(ERROR_MESSAGE);
    return;
  }

  logMahasiswa(data);
  addRowToTable(data);

  formMahasiswa.reset();
}

// Ambil data dari input
function getFormData() {
  return {
    nama: getInputValue("nama"),
    nim: getInputValue("nim"),
    semester: getInputValue("semester"),
    prodi: document.getElementById("prodi").value,
    email: getInputValue("email"),
  };
}

// Ambil value input (DRY)
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

// Validasi form
function isFormValid(data) {
  return (
    data.nama &&
    data.nim &&
    data.semester &&
    data.prodi &&
    data.email
  );
}

// Logging data
function logMahasiswa(data) {
  console.log("Data Mahasiswa");
  console.log("Nama Lengkap :", data.nama);
  console.log("NIM          :", data.nim);
  console.log("Semester     :", data.semester);
  console.log("Program Studi:", data.prodi);
  console.log("Email        :", data.email);
}

// Tambah row ke tabel
function addRowToTable(data) {
  const rowNumber = tableBodyMahasiswa.rows.length + ROW_OFFSET;
  const row = createTableRow(rowNumber, data);
  tableBodyMahasiswa.appendChild(row);
}

// Buat elemen row (pisah dari logic)
function createTableRow(no, data) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${no}</td>
    <td>${data.nama}</td>
    <td>
      <div class="info-cell">
        <div>Prodi: ${data.prodi}</div>
        <div>Semester: ${data.semester}</div>
      </div>
    </td>
  `;

  return row;
}