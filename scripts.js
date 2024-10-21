// Menambahkan event listener untuk submit form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah pengiriman form default ke halaman lain

    // Mengambil nilai input dari field Nama, Email, dan Nomor Handphone
    const name = document.getElementById('name').value.trim();  // Mengambil input dan menghapus spasi kosong di awal/akhir
    const email = document.getElementById('email').value.trim();  // Mengambil input dan menghapus spasi kosong di awal/akhir
    const phone = document.getElementById('phone').value.trim();  // Mengambil input dan menghapus spasi kosong di awal/akhir

    // Validasi sederhana: jika salah satu field kosong, tampilkan pesan peringatan
    if (name === "" || email === "" || phone === "") {
        alert("Harap isi semua field.");
    } 
    // Memeriksa apakah format email valid
    else if (!validateEmail(email)) {
        alert("Email tidak valid.");
    } 
    // Memeriksa apakah nomor handphone valid (hanya angka, panjang tertentu)
    else if (!validatePhone(phone)) {
        alert("Nomor handphone tidak valid.");
    } 
    // Jika semua validasi berhasil, tampilkan pesan sukses dan reset form
    else {
        alert("Form berhasil dikirim!\nNama: " + name + "\nEmail: " + email + "\nNomor Handphone: " + phone);
        document.getElementById('contactForm').reset();  // Membersihkan form setelah submit
    }
});

// Fungsi validasi format email
function validateEmail(email) {
    // Regex untuk memeriksa apakah format email sesuai (contoh: name@domain.com)
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());  // Mengembalikan hasil validasi (true/false)
}

// Fungsi validasi format nomor handphone
function validatePhone(phone) {
    // Regex untuk memeriksa apakah nomor handphone terdiri dari 10-15 digit
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);  // Mengembalikan hasil validasi (true/false)
}
