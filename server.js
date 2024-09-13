require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

// Middleware
app.use(bodyParser.json());

//Cors
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Swagger setup
const swaggerSetup = require('./swagger');
swaggerSetup(app);

// Routes
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotels');
const bookingRoutes = require('./routes/bookings');
const attractionRoutes = require('./routes/attractions');
const cartRoutes = require('./routes/cart');
const commentRoutes = require('./routes/comments');
const favoriteRoutes = require('./routes/favorites');
const roomRoutes = require('./routes/rooms');

app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/bookings', bookingRoutes);
app.use('/attractions', attractionRoutes);
app.use('/cart', cartRoutes);
app.use('/comments', commentRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/rooms', roomRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});