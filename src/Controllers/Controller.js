const task_model = require("../Model/task_model")

const home = async(req,res)=>{
    return res.render("home")
}
const createTask = async(req,res)=>{
    const { title, description} = req.body
    const isCompleted = false
    try {
        if( title && description ){
            const isTaskCreated = await task_model.create({title,description,isCompleted})

            if(!isTaskCreated){
                return res.json({message:"Your task was not created please try again later",success:false})
            }

            return res.json({message:"Your task has been successfully created",success:true})

        }else{
            return res.json({message:"Both Title and Description should be filled",success:false})
        }
    } catch (error) {
        console.log(error)
        return res.json({message:"There was some error while creating your task",success:false})
    }    
}

module.exports = { home, createTask }