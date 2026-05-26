const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname);

app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'Web.html'));
});

app.use((req, res) => {
  res.status(404).send('404: Halaman tidak ditemukan');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
