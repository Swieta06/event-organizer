const { User } = require("../../controllers")
const route = require("express").Router()

route.post("/register", User.Register.register)

module.exports = route