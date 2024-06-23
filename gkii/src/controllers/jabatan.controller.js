'use strict';
const Jabatan = require('../models/jabatan.model');

exports.jabatan = function (req, res) {
    Jabatan.findAll(function (err, jabatan) {
        res.render('jabatan', {
            messages: {},
            data: jabatan
        });
    });
}

exports.createPage = function (req, res) {
    res.render('jabatan/create', {
        messages: {},
        nama_jabatan: ""
    });
}

exports.storeJabatan = function (req, res) {
    let nama_jabatan = req.body.nama_jabatan;
    let newJabatan = new Jabatan({
        nama_jabatan: nama_jabatan
    });
    Jabatan.create(newJabatan, function (err, result) {
        if (err) {
            res.render('jabatan/create', {
                messages: { error: "Gagal menambah jabatan" },
                nama_jabatan: ""
            });
        }
        else {
            res.redirect('/jabatan');
        }
    });
}

exports.editPage = function (req, res) {
    let id = req.params.id;
    console.log(id);
    Jabatan.findById(id, function (err, jabatan) {
        if (err) {
            res.render('jabatan/edit', {
                messages: { error: "Gagal menemukan jabatan" },
                nama_jabatan: ""
            });
        }
        else {
            console.log(jabatan);
            res.render('jabatan/edit', {
                messages: {},
                nama_jabatan: jabatan[0].nama_jabatan,
                id_jabatan: jabatan[0].id_jabatan
            });
        }
    });
}

exports.updateJabatan = function (req, res) {
    let id = req.params.id;
    let nama_jabatan = req.body.nama_jabatan;
    let updatedJabatan = new Jabatan({
        nama_jabatan: nama_jabatan
    });
    Jabatan.update(id, updatedJabatan, function (err, result) {
        if (err) {
            res.render('jabatan/edit', {
                messages: { error: "Gagal mengupdate jabatan" },
                nama_jabatan: nama_jabatan
            });
        }
        else {
            res.redirect('/jabatan');
        }
    });
}

exports.deleteJabatan = function (req, res) {
    let id = req.params.id;
    console.log(id);
    Jabatan.delete(id, function (err, result) {
        if (err) {
            res.status(500).send({message: "Gagal menghapus Jabatan"});
        }
        else {
            res.status(200).send({message: "Berhasil menghapus Jabatan"});
            }
    });
}