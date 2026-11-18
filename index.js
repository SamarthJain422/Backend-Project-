const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const productRoute = require('./routes/product.route.js');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node API Server!');
});

// Connect to MongoDB then start server
mongoose
  .connect(process.env.MONGODB_URI, {
    tls: true,
    tlsAllowInvalidCertificates: false,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.log('Connection failed!', error);
  });
