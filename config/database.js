const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}

module.exports = dbConnect;

// const mongoose = require("mongoose");

// require("dotenv").config();

// const dbconnect = () =>{
//     mongoose.connect(process.env.DATABASE_URL, {
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(()=>console.log("DB ka connection is Successful"))
//     .catch( (err)=>
//     {
//         console.log("Issue in DB connection");
//         console.error(err.message);
//         process.exit(1);
// });
// }
// module.exports = dbconnect;
//connection ko call karuga function call kara do ga

//function ke under wrap kar deya or export kar vadiya