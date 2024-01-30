const task_model = require("../Model/task_model")

const home = async(req,res)=>{
    //Render the home page
    return res.render("home")
}

const createTask = async(req,res)=>{

    const { title, description} = req.body
    //On creation of a task it is not checked by default
    const isCompleted = false

    try {
        //If both the title and description is not null or undefined
        if( title && description ){

            //Create a task
            const isTaskCreated = await task_model.create({title,description,isCompleted})

            //If task creation is unsuccessfull
            if(!isTaskCreated){
                return res.json({message:"Your task was not created please try again later",success:false})
            }

            //If task creation is successfull
            return res.json({message:"Your task has been successfully created",success:true})

        }
        //If either of the fields are empty
        else{
            return res.json({message:"Both Title and Description should be filled",success:false})
        }
    } catch (error) {
        
        //Return a error message in case of any error
        console.log(error)
        return res.json({message:"There was some error while creating your task",success:false})
    }

}
    const show_all_tasks = async (req,res)=>{
        try{
            //Get all the tasks from the database
            const all_tasks = await task_model.find()
            return res.json({message:"Sent all the tasks",success:true,data:all_tasks})

        }catch(e){
            console.log(e)
            res.json({message:"All the tasks could not be sent due to an error"})
        }
    }

    const update_task = async (req,res)=>{
        const { isCompleted, this_id } = req.body
        try {

            //Update the task with id = this_id , the field to update is isCompleted
            const didUpdate = await task_model.updateOne({_id:this_id},{isCompleted:isCompleted})

            //If the task is not updated
            if(!didUpdate){
                return res.json({message:"The data did not get updated",success:false})
            }

            //If the task is updated
            return res.json({message:"The data is updated",success:true})
            
        } catch (error) {
            console.log(error)
            return res.json({message:"The data did not get updated",success:false})        }
    }

module.exports = { home, createTask, show_all_tasks, update_task }