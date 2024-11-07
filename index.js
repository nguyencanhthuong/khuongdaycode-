const express = require('express');
const app = express();
const PORT = 3000;

// Middleware để parse JSON request body
app.use(express.json());

// Định nghĩa route /data với phương thức POST
app.post('/data', (req, res) => {
  const requestBody = req.body;

  // Log request body ra console
  console.log("Request body:", requestBody);

  // Trả về JSON của request body
  res.json(requestBody);
});

// Bắt đầu lắng nghe trên cổng PORT
app.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên http://localhost:${PORT}`);
});
