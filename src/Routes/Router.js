const express = require("express")
const { home, createTask, show_all_tasks, update_task, delete_task, edit_task } = require("../Controllers/Controller")
const Router = express.Router()

Router.route("/").get(home)
Router.route("/create_task").post(createTask)
Router.route("/show_all_tasks").post(show_all_tasks)
Router.route("/update_task").post(update_task)
Router.route("/delete_task").post(delete_task)
Router.route("/edit_task").post(edit_task)

module.exports = Router