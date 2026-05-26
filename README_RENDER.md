Deploy ke Render

1. Buat repository GitHub dan push kode (lihat langkah di bawah).
2. Di Render Dashboard, klik "New" → "Web Service" → pilih GitHub repo.
3. Jika ada `render.yaml` di repo, Render akan membaca konfigurasinya. Jika tidak, set:
   - Environment: `Node`
   - Start Command: `node server.js`
   - Build Command: (kosong)
4. Klik deploy. Setelah selesai, kamu akan mendapat URL publik.

Push repo (contoh):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

Atau gunakan `gh` CLI:

```bash
gh repo create USERNAME/REPO --public --source=. --remote=origin --push
```
