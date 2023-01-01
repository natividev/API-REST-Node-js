const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user.js');

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use('/api', userRoute);



// Routes
app.get('/', (req, res) => { 
  res.send('Welcome to my API');
 });

 // mongodb connection: Conectar a la bd, necesitamos instalar otro modulo: npm install mongoose

 // Debemos instalar un modulo, y crear una variable de ambiente costomizada: npm install dotenv

 mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conexion exitosa de MongoDB Atlas...')).catch((error) => console.error(error));



app.listen(port, () => console.log('Server online...', port));

