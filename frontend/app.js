const express = require('express')
const app = express()
const AuthRoutes = require('./routes/auth')
const DashboardRoutes = require('./routes/dashboard')
const cors = require("cors");
const session = require('express-session');
const passport = require('passport')
require('dotenv').config()

const corsOptions = {
    origin: ['http://localhost:3000','http://localhost:3306'],
    credentials:true,
    optionsSuccessStatus: 200, // some legacy browsers     (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions)); // CORS policy
app.use(function (req, res, next) {
    //Enabling CORS
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

app.use("/auth", AuthRoutes)
app.use("/erp", DashboardRoutes)

app.listen(process.env.PORT || 3001)