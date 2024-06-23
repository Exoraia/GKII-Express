'use strict';
var dbConn = require('../../config/db.config');
//Jabatan object create
var Jabatan = function(jabatan){
    this.id_jabatan       = jabatan.id_jabatan;
    this.nama_jabatan     = jabatan.nama_jabatan;
};
Jabatan.create = function (newJabatan, result) {
    dbConn.query("INSERT INTO tb_jabatan SET ?", newJabatan, function (err, res) {
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
Jabatan.findByName = function (name, result) {
    const searchTerm = '%'+name+'%'
    dbConn.query("SELECT * FROM tb_jabatan WHERE LOWER(nama_jabatan) like LOWER(?)", searchTerm, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Jabatan:", res);
            result(null, res);
        }
    });
};
Jabatan.findById = function (id, result) {
    dbConn.query("SELECT * FROM tb_jabatan WHERE id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Jabatan:", res);
            result(null, res);
        }
    });
};
Jabatan.findAll = function (result) {
    dbConn.query("SELECT * FROM tb_jabatan", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('Jabatan : ', res);
            result(null, res);
        }
    });
};
Jabatan.update = function(id_jabatan, jabatan, result){
    dbConn.query("UPDATE tb_jabatan SET nama_jabatan=? WHERE id_jabatan = ?", [jabatan.nama_jabatan, id_jabatan], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log("Jabatan:", res);
            result(null, res);
        }
    });
};
Jabatan.delete = function(id_jabatan, result){
    dbConn.query("DELETE FROM tb_jabatan WHERE id_jabatan = ?", [id_jabatan], function (err, res) {
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
module.exports= Jabatan;