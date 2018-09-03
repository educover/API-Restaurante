let conn = require('../connection/mysqlconnection');

class LoginModel{

    findUserDB(username, pass, cb){
        if(!conn) return cb("no se ha podido crear la conexion");
        const SQL = `SELECT * FROM usuarios WHERE user = '${username}' AND pass = '${pass}';`;
        conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows)
            })
    }
}

module.exports = LoginModel;