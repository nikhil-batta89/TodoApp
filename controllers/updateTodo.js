//import th model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try {
        //extract todo items basis on id
        const {id} = req.params;
        const {title,description}= req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title,description,updatedAt:Date.now()}, 
            );
  //data for given found
  res.status(200).json(
      {
          success:true,
          data:todo,
          message:`Todo ${id} Updated  Successfully `
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