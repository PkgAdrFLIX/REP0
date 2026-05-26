# Struktur Web Project

## File-File Utama

### 1. **index.html** (Entry Point)
- Halaman home utama
- Redirect ke Web.html
- Diakses via: `http://localhost:3000/`

### 2. **Web.html** (Home Page - iPhone Design)
- Desain modern dengan gaya iPhone
- Menu navigasi ke Portfolio
- Fitur: responsif, glassmorphism, animasi smooth
- Diakses via: `http://localhost:3000/Web.html`

### 3. **portfolio.html** (Portfolio Page)
- Menampilkan portofolio proyek
- Link kembali ke Home (/)
- Grid card dengan deskripsi proyek
- Diakses via: `http://localhost:3000/portfolio.html`

### 4. **server.js** (Node.js Server)
- Port: 3000 (atau PORT env variable)
- Routing otomatis untuk `/` ke Web.html
- Support MIME types untuk HTML, CSS, JS, gambar
- Error handling 404

### 5. **package.json** (Konfigurasi Node)
- Start command: `npm start`
- Main: server.js

## Navigasi

```
index.html (/)
    ↓
    └─→ Web.html (Home)
           ├─→ Portfolio button → portfolio.html
           └─→ Other buttons
                   ↓
                   portfolio.html (Portfolio)
                       └─→ Kembali ke Home button → / (Web.html)
```

## Cara Menjalankan

```bash
npm install
npm start
```

Kemudian buka browser di `http://localhost:3000`

## File-File Disinkronkan ✓

1. ✓ **Web.html**: Portfolio button sekarang navigasi langsung (bukan window.open)
2. ✓ **portfolio.html**: Link "Kembali ke Home" mengarah ke root (/)
3. ✓ **server.js**: Support routing untuk index.html dan Web.html
4. ✓ **index.html**: Entry point baru yang terpusat

Tidak ada benturan file lagi!
