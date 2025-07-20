require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/posts', postRoutes);           // Prefixes all post routes
app.use('/api/categories', categoryRoutes);  // Prefixes all category routes
app.use(require('./middlewares/errorHandler'));
app.use('/api/auth', authRoutes);


// TODO: Add routes

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
