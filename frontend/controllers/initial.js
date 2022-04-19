const index = ((req, res)=>{
    res.status(200).render("main")
});

module.exports = {
    index
}