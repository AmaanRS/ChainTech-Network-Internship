const mongoose = require("mongoose")

const task_schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("task_model",task_schema)