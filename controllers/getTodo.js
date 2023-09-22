const Todo =require("../models/Todo");

exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo item from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:"All data is fetched",
        });
        
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

exports.getTodoById = async(req,res)=>{
    try{
        //extract todo item basis on id
        const id = req.params.id;
        const todo =await Todo.findById({_id: id})

        //given data not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message: "No data found",
            })
        }
        res.status(200).json({
            sucess:true,
            data:todo,
            message:`Todo ${id} data sucessfully fetched`
        })
    }
        catch(err)
    {
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:'Server Error',
        });
    }
}