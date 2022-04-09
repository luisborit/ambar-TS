const Router = require('express').Router()
const passport = require('passport')
const LocalStrategy = require('passport-local')
const AuthController = require('../controllers/auth')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'mysql',
    database : 'api',
    connectionLimit: 10,
  });
   

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (id, done) {
    done(null, id);
});


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password)) { return done(null, false); }
//             return done(null, user);
//         });
//     }
//     ));
    
Router.post("/login", 
    passport.authenticate("local-login", { failureRedirect: "/auth"}),
    async (req, res)=>{
        await res.redirect("/erp");
});

passport.use('local-login', new LocalStrategy(
    async (username, password, done)=>{
        // await connection.connect()
        let results = new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM user WHERE username = '${username}' and password = '${password}'`, (err, results)=>{
                if(err){reject(err)};
                resolve(results);
            })
        })
            // await connection.end()
        results = await results;
        if (username === results[0].username && password === results[0].password) {
            return done(null, results[0].id);
        } else {
            console.log(20)
            return done(null, false, {"message": "User not found."});
        }
    })
);


Router.get('/', AuthController.login);

module.exports = Router