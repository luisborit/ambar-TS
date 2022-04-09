const login = ((req, res)=>{
    res.status(200).render("auth")
});

module.exports = {
    login
}