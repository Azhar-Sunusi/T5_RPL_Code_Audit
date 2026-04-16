// Variabel terlalu umum (naming kurang jelas)
const form = document.getElementById("formMahasiswa");
const tabel = document.querySelector("#tabelMahasiswa tbody");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //  DRY dilanggar > pengambilan value berulang-ulang dengan pola sama
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const semester = document.getElementById("semester").value.trim();
  const prodi = document.getElementById("prodi").value;
  const email = document.getElementById("email").value.trim();

  //  Hardcoded string > tidak fleksibel jika ingin diubah / translate
  if (!nama || !nim || !semester || !prodi || !email) {
    alert("Mohon isi semua data!");
    return;
  }

  //  Tidak perlu terlalu banyak log manual (bisa diringkas)
  //  Hardcoded string lagi
  console.log("Data Mahasiswa");
  console.log("Nama Lengkap :", nama);
  console.log("NIM          :", nim);
  console.log("Semester     :", semester);
  console.log("Program Studi:", prodi);
  console.log("Email        :", email);

  // Magic number (+1 tidak dijelaskan maksudnya)
  const no = tabel.rows.length + 1;

  const row = document.createElement("tr");

  //  Mixing concern > logic + HTML digabung (sulit maintain)
  row.innerHTML = `
    <td>${no}</td>
    <td>${nama}</td>
    <td>
      <div class="info-cell">
        <div>Prodi: ${prodi}</div>
        <div>Semester: ${semester}</div>
      </div>
    </td>
  `;

  //  Fungsi ini melakukan terlalu banyak hal (melanggar SRP):
  // - ambil data
  // - validasi
  // - log
  // - manipulasi DOM
  tabel.appendChild(row);

  //  Tidak ada pemisahan tanggung jawab
  form.reset();
});