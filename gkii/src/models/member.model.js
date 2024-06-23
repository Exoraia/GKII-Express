'use strict';
var dbConn = require('../../config/db.config');

// Member object create
var Member = function(member){
    this.id_member       = member.id_member;
    this.nama     = member.nama;
};

Member.create = function (newMember, result) {
    dbConn.query("INSERT INTO tb_member SET?", newMember, function (err, res) {
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

Member.findByName = function (name, result) {
    const searchTerm = '%'+name+'%'
    dbConn.query("SELECT * FROM tb_member WHERE LOWER(nama) like LOWER(?)", searchTerm, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Member: ", res);
            result(null, res);
        }
    });
};

Member.findById = function (id, result) {
    dbConn.query("SELECT * FROM tb_member WHERE id_member =? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Member: ", res);
            result(null, res);
        }
    });
};

Member.findAll = function (result) {
    dbConn.query("SELECT * FROM tb_member", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('Member : ', res);
            result(null, res);
        }
    });
};

Member.update = function(id_member, member, result){
    dbConn.query("UPDATE tb_member SET nama=? WHERE id_member =?", [member.nama, id_member], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log("Member: ", res);
            result(null, res);
        }
    });
};

Member.delete = function(id_member, result){
    dbConn.query("DELETE FROM tb_member WHERE id_member =?", [id_member], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("deleted");
            result(null, res);
        }
    });
};

module.exports= Member;