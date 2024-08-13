const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./router/router.js'); 
require('dotenv').config(); // env variables from .env file

const app = express();  //Initializes  express app
const port = process.env.PORT; // Get the port number in env var

// Routes
// app.use('/api/auth', authRoutes); // Set routes for user authentication 

// app.get('/',(req,res,next)=>{
//     res.send("server ceated !")
    
// })
 
// Middleware
app.use(bodyParser.json()); // parse JSON request body
app.use(bodyParser.urlencoded({ extended: true })); // parse urlencoded request  body
app.use(express.json()); // Parsed req JSON in body

app.use('/api', router); 

// Start the server
app.listen(port, () => {
    console.log(`Project started on port ${port}`); 
});
