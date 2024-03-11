
//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
              //fetch all todo items from database
              const todos = await Todo.find({});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:todos,
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

exports.getTodoById = async(req,res) => {
    try {
              //extract todo items basis on id
              const id = req.params.id;
              const todo = await Todo.findById({_id: id});
            //   id value mil ja muja return kardo
        //data for given id not found
        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"No Data Found with given id"
            })
        }
        //data for given found
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data Successfully fetched`
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
