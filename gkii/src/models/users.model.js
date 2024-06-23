'use strict';
var dbConn = require('./../../config/db.config');
//User object create
var User = function(user){
    this.id_user  = user.id_user;
    this.username = user.username;
    this.password = user.password;
    this.nama     = user.nama; 
  };
  
User.create = function (newUser, result) {
    dbConn.query("INSERT INTO tb_user SET username = ?, password = MD5(?), nama = ?", [newUser.username, newUser.password, newUser.nama], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.authenticate = function(username, password, result) {
    dbConn.query("SELECT * FROM tb_user WHERE username = ? AND password = MD5(?)", [username, password], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};
User.findById = function (id, result) {
    dbConn.query("SELECT * FROM tb_user WHERE id_user = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
User.findAll = function (result) {
    dbConn.query("SELECT * FROM tb_user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('users : ', res);
            result(null, res);
        }
    });
};
User.update = function(id, user, result){
    dbConn.query("UPDATE tb_user SET nama=?, username=? WHERE id_user = ?", [user.nama, user.username, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};
User.delete = function(id, result){
    dbConn.query("DELETE FROM tb_user WHERE id_user = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= User;