'use strict';
var dbConn = require('../../config/db.config');

// Posisi object create
var Posisi = function(posisi){
    this.id_member = posisi.id_member;
    this.nama = posisi.nama;
    this.id_jabatan = posisi.id_jabatan;
    this.nama_jabatan = posisi.nama_jabatan;
    this.periode = posisi.periode;
};

Posisi.create = function (newPosisi, result) {
    dbConn.query("INSERT INTO tb_posisi SET ?", newPosisi, function (err, res) {
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

Posisi.findByName = function (name, result) {
    const searchTerm = '%'+name+'%'
    dbConn.query("SELECT tb_member.nama, tb_jabatan.nama_jabatan FROM tb_posisi INNER JOIN tb_member ON tb_posisi.id_member = tb_member.id_member INNER JOIN tb_jabatan ON tb_posisi.id_jabatan = tb_jabatan.id_jabatan WHERE LOWER(tb_member.nama) like LOWER(?) OR LOWER(tb_jabatan.nama_jabatan) like LOWER(?)", 
                 searchTerm, searchTerm, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Posisi:", res);
            result(null, res);
        }
    });
};

Posisi.findById = function (id_member, id_jabatan, result) {
    dbConn.query("SELECT tb_member.id_member, tb_jabatan.id_jabatan FROM tb_posisi INNER JOIN tb_member ON tb_posisi.id_member = tb_member.id_member INNER JOIN tb_jabatan ON tb_posisi.id_jabatan = tb_jabatan.id_jabatan WHERE tb_posisi.id_member =? OR tb_posisi.id_jabatan =?", 
                 id_member, id_jabatan, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("Posisi:", res);
            result(null, res);
        }
    });
};

Posisi.findAll = function(result) {
    dbConn.query("SELECT * FROM tb_posisi INNER JOIN tb_member ON tb_posisi.id_member = tb_member.id_member INNER JOIN tb_jabatan ON tb_posisi.id_jabatan = tb_jabatan.id_jabatan", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('Posisi : ', res);
            result(null, res);
        }
    });
};

Posisi.update = function(newPosisi, oldPosisi, result){
    dbConn.query("UPDATE tb_posisi SET id_jabatan=?, id_member=? WHERE id_jabatan =?", [newPosisi, oldPosisi], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log("Posisi:", res);
            result(null, res);
        }
    });
};

Posisi.delete = function(id_member, id_jabatan, result){
    dbConn.query("DELETE FROM tb_posisi WHERE id_member =? AND id_jabatan =?", [id_member, id_jabatan], function (err, res) {
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
module.exports= Posisi;