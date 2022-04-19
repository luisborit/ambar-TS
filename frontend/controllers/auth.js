const axios = require('axios')

const login = async(req, res)=>{
    try {
        const response = await axios.post(`http://localhost:3001/auth/login`, {username: req.body.username, password: req.body.password});
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        res.status(404).json({"message":error.message});
    }
};

module.exports = {
    login
}