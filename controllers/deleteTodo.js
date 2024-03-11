//import th model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try {
        //extract todo items basis on id
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
  //data for given found
  res.json(
      {
          success:true,
          message:`Todo ${id} deleted  Successfully `
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