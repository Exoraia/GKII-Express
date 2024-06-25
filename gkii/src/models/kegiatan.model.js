'use strict';
var dbConn = require('../../config/db.config');

//Kegiatan object create
var Kegiatan = function(kegiatan){
    this.id_kegiatan        = kegiatan.id_kegiatan;
    this.nama_kegiatan      = kegiatan.nama_kegiatan;
    this.deskripsi_kegiatan = kegiatan.deskripsi_kegiatan;
    this.tanggal_kegiatan   = kegiatan.tanggal_kegiatan;
};

Kegiatan.create = function (newKegiatan, result) {
    dbConn.query("INSERT INTO tb_kegiatan SET ?", newKegiatan, function (err, res) {
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

Kegiatan.findByName = function (name, result) {
    const searchTerm = '%'+name+'%'
    dbConn.query("SELECT * FROM tb_kegiatan WHERE LOWER(nama_kegiatan) like LOWER(?)", searchTerm, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Kegiatan:", res);
            result(null, res);
        }
    });
};

Kegiatan.findById = function (id, result) {
    dbConn.query("SELECT * FROM tb_kegiatan WHERE id_kegiatan = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Kegiatan:", res);
            result(null, res);
        }
    });
};

Kegiatan.findAll = function (result) {
    dbConn.query("SELECT * FROM tb_kegiatan", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('Kegiatan : ', res);
            result(null, res);
        }
    });
};

Kegiatan.update = function(id_kegiatan, kegiatan, result){
    dbConn.query("UPDATE tb_kegiatan SET nama_kegiatan=?, deskripsi_kegiatan=?, tanggal_kegiatan=? WHERE id_kegiatan = ?", [kegiatan.nama_kegiatan, kegiatan.deskripsi_kegiatan, kegiatan.tanggal_kegiatan, id_kegiatan], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log("Kegiatan:", res);
            result(null, res);
        }
    });
};

Kegiatan.delete = function(id_kegiatan, result){
    dbConn.query("DELETE FROM tb_kegiatan WHERE id_kegiatan = ?", [id_kegiatan], function (err, res) {
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

module.exports= Kegiatan;