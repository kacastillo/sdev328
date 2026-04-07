import express from 'express';
// import dotenv from 'dotenv';

// Load environment variables from .env file
// dotenv.config();
const app = express();

//define a route on the server
app.get("/home", (req, res) => {
    res.status(200).send("Hello, from Express.js Hope you enjoy your stay!");
});
 
//start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});