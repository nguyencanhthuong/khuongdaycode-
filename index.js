const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware để parse JSON request body
// app.use(express.json());

// // // Định nghĩa route /data với phương thức POST
// // app.post('/', (req, res) => {
// //   const requestBody = req.body;

// //   // Log request body ra console
// //   console.log("Request body:", requestBody);

// //   // Trả về JSON của request body
// //   res.json(requestBody);
// // });
// app.use((req, res, next) => {
//   if (req.method === 'POST') {
//       let body = '';
//       req.on('data', chunk => {
//           body += chunk.toString(); 
//       });
//       req.on('end', () => {
//           console.log('Received POST data:', body);
//       });
//   }
//   next();
// });
// // Bắt đầu lắng nghe trên cổng PORT
// app.listen(PORT, () => {
//   console.log(`Server đang lắng nghe trên http://localhost:${PORT}`);
// });

const cors = require("cors");

const port = 3033;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.send("running");
});

app.post('/data', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(port, () => {
    console.log("App listen on port:${port}");
});