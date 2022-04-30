const {verifyToken} = require("../helpers/tokenGenerator");
const Users = require("../Domain/Auth/auth");

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() 
        const tokenData = await verifyToken(token)
        const userData = await Users.findByPk(tokenData.id)
        
        if([].concat(roles).includes(userData.role)){
            next()
        }else{
            res.status(409);
            res.send({error: "Permiso denegado"})
        }

    } catch (e) {
        console.log(e)
        res.status(409);
        res.send({error: "Permiso denegado"})
    }
}

module.exports = checkRoleAuth;