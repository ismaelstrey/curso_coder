const middlewares = require("./middlewares");

module.exports = middleware => {
    return (req, res, next) => {
       if(req.user.admin) {
           middleware(req, res, next)
       } else {
           res.status(402).send("usuario não é administrador")
       }
    }
}