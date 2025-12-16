const tombol = document.getElementById("tombolKlik");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", () => {
    pesan.textContent = "✨ Tombol berhasil diklik! Website kamu sudah online 🚀";
});
