let Controller = require ('./controller');
let LoginModel = require('../models/loginModel');

class LoginController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
    }

    login(){
        let user = this.req.body.user;
        let pass = this.req.body.pass;
        let loginModel = new LoginModel();
        loginModel.findUserDB(user, pass, (info)=>{
            console.log(info)
        })
    }

}

module.exports = LoginController;