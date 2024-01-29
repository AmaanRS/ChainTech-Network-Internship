const express = require("express")
const { home, createTask } = require("../Controllers/Controller")
const Router = express.Router()

Router.route("/").get(home)
Router.route("/create_task").post(createTask)

module.exports = Router