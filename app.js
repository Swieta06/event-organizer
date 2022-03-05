const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const router = require("./routes");
const createError = require("http-errors");
const errorHandler = require("./middlewares/error");
const checkAPI = require("./middlewares/checkAPI");
const assignUser = require("./middlewares/assignUser");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");

require("dotenv").config();

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// logger setup
app.use(logger("dev"));

// body parser setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static files setup
app.use(express.static(path.join(__dirname, "public")));

// session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET, //TODO: change this secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// passport setup
require("./config/passport");
require("./config/googleOauth");

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// custom middlewares: checkAPI
app.use(checkAPI);
// custom middlewares: assign user data to each response
app.use(assignUser);

// routes setup
app.use("/", router);

router.get('/order',(req, res)=>{
    res.render("pages/orderStep1");
})
router.get('/order2',(req, res)=>{
    res.render("pages/orderStep2");
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

module.exports = app;
