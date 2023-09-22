const Todo =require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res)=>{
    try{
        //another method
        const{id} = req.params;
        const {title, description} =req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id :id},
            {title, description, updateAt: Date.now()},
        )
        res.status(200).json({
            sucess:true,
            data:todo,
            message:`Updated Sucessfully`
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:'Server Error',
        });   
    }
}