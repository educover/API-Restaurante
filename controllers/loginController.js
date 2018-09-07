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
            if(info.length===0){
                this.res.json('datos incorrectos')
            } else {
                this.req.session.admin = user;
                this.res.redirect('/admin')
            }
        })
    }

}

module.exports = LoginController;