const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todo");

//mount the todo API routes
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})





// const express = require("express");
// const app = express();

// //load config from env.file
// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// //middleware to parse json request body
// app.use(express.json());
// //import routes for ToDO Api
// const todoRoutes = require
// //all routes to mount the todo api routes
// app.use("/api/v1",todoRoutes);
// // local host port no  v1 , route define 
// //ha controler ka vo ajaga ga menas full URL ayajaga
// //start server
// app.listen(PORT,()=>{
//     console.log(`Server started successfully at ${PORT}`);
// })

// //connect to the database
// const dbConnect = require("./config/database");
// dbConnect();

// //default Route
// app.get("/",(req,res)=>{
//     res.send(`<h1>Thisis HOMEPAGE BAby</h1>`)
// })