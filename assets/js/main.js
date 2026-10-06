"use strict";
// src/ts/main.ts
// Kita bungkus dalam DOMContentLoaded agar script baru berjalan setelah HTML selesai dimuat semua
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mengambil elemen Tab dan Item Portofolio
    // (Menggunakan tipe data HTMLElement spesifik milik TypeScript)
    const filterTabs = document.querySelectorAll('.filter-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    // 2. Memberikan perintah (event listener) pada setiap tab
    filterTabs.forEach((tab) => {
        tab.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah halaman melompat ke atas saat link '#' diklik
            // Hapus status 'active' dari semua tab
            filterTabs.forEach(t => t.classList.remove('active'));
            // Berikan status 'active' hanya pada tab yang baru saja diklik
            this.classList.add('active');
            // Ambil kategori dari atribut 'data-filter' yang kita buat di HTML tadi
            const filterValue = this.getAttribute('data-filter');
            // 3. Logika Menyaring (Filtering)
            portfolioItems.forEach((item) => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === itemCategory) {
                    // Tampilkan kartu jika kategorinya cocok atau tab 'Semua' dipilih
                    item.style.display = 'block';
                    // Sedikit animasi muncul (fade in)
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                }
                else {
                    // Sembunyikan kartu jika kategorinya tidak cocok
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // Tunggu animasi pudar selesai sebelum benar-benar dihilangkan
                }
            });
        });
    });
});
