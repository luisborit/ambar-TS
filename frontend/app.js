const express = require('express')
const app = express()
const {DashboardRoutes ,AuthRoutes, InitialRoutes} = require('./routes/index')
const cors = require("cors");
const session = require('express-session');
const passport = require('passport')
require('dotenv').config()

const corsOptions = {
    origin: ['http://localhost:3000','http://localhost:3306'],
    credentials:true,
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", InitialRoutes)
app.use("/auth", AuthRoutes)
app.use("/dashboard", DashboardRoutes)

app.listen(process.env.PORT || 3001)