// app/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello from the CI/CD Pipeline app!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

app.listen(PORT, HOST, () => {
  // console.log(`Server running at http://localhost:${PORT}`);
  // console.log(`Server running at http://${HOST}:${PORT}`);
  console.log(`Server running at http://${process.env.EC2_PUBLIC_IP || HOST}:${PORT}`);
});

