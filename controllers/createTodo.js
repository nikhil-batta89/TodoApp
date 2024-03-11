//import th model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}




// //Import the model
// const Todo = require("../models/Todo");


// //network api call kari async function ke under dali//
// //jo baki ka data wait kare uske network ka response aya to forward next step
// // Main thread ke upper call nahi karni ha jab bhi koi database se intraction ho main thread bloack nahi karoga
// //database  intraction bhi async form me jaye

// //define route handler
// exports.createTodo = async(req,res) =>{
//     try{
//             //extract title and description from request body data fetch keya
//             const {title,description} = req.body;
//             //create a new Todo  Obj and insert in DB
//             //create wali insert kar the
//             const response = await Todo.create({title,description});
//             //send a json response with a success flag
//              res.status(200).json(
//                 {
//                 success:true,
//                 data:response,
//                 message:'Entry Created Successfully'
//                 } 
//              );
//        } 
//     catch(error)
//     {
//        console.log(error);
//        console.log(error);
//        res.status(500).json(
//         {
//             success:false,
//             data:"internal server error",
//             message:error.message,
//         }
//        )
//     }
// }