'use strict';
const Kegiatan = require('../models/kegiatan.model');

exports.kegiatan = function (req, res) {
    Kegiatan.findAll(function (err, kegiatan) {
        res.render('kegiatan', {
            messages: {},
            data: kegiatan
        });
    });
}

exports.createPage = function (req, res) {
    res.render('kegiatan/create', {
        messages: {},
        nama_kegiatan: "",
        deskripsi_kegiatan: "",
        tanggal_kegiatan: ""
    });
}

exports.storeKegiatan = function (req, res) {
    let nama_kegiatan = req.body.nama_kegiatan;
    let deskripsi_kegiatan = req.body.deskripsi_kegiatan;
    let tanggal_kegiatan = req.body.tanggal_kegiatan;
    let newKegiatan = new Kegiatan({
        nama_kegiatan: nama_kegiatan,
        deskripsi_kegiatan: deskripsi_kegiatan,
        tanggal_kegiatan: tanggal_kegiatan
    });
    Kegiatan.create(newKegiatan, function (err, result) {
        if (err) {
            res.render('kegiatan/create', {
                messages: { error: "Gagal menambah kegiatan" },
                nama_kegiatan: "",
                deskripsi_kegiatan: "",
                tanggal_kegiatan: ""
            });
        }
        else {
            res.redirect('/kegiatan');
        }
    });
}

exports.editPage = function (req, res) {
    let id = req.params.id;
    console.log(id);
    Kegiatan.findById(id, function (err, kegiatan) {
        if (err) {
            res.render('kegiatan/edit', {
                messages: { error: "Gagal menemukan kegiatan" },
                nama_kegiatan: "",
                deskripsi_kegiatan: "",
                tanggal_kegiatan: ""
            });
        }
        else {
            console.log(kegiatan);
            let tanggal_kegiatan = kegiatan[0].tanggal_kegiatan;

            const offset = tanggal_kegiatan.getTimezoneOffset();

            tanggal_kegiatan = new Date(tanggal_kegiatan.getTime() - (offset*60*1000));

            res.render('kegiatan/edit', {
                messages: {},
                nama_kegiatan: kegiatan[0].nama_kegiatan,
                deskripsi_kegiatan: kegiatan[0].deskripsi_kegiatan,
                tanggal_kegiatan: tanggal_kegiatan.toISOString().split('T')[0], 
                id_kegiatan: kegiatan[0].id_kegiatan
            });
        }
    });
}

exports.updateKegiatan = function (req, res) {
    let id = req.params.id;
    console.log(req.body);
    let nama_kegiatan = req.body.nama_kegiatan;
    let deskripsi_kegiatan = req.body.deskripsi_kegiatan;
    let tanggal_kegiatan = req.body.tanggal_kegiatan;
    let updatedKegiatan = new Kegiatan({
        nama_kegiatan: nama_kegiatan,
        deskripsi_kegiatan: deskripsi_kegiatan,
        tanggal_kegiatan: tanggal_kegiatan
    });
    console.log(updatedKegiatan);
    Kegiatan.update(id, updatedKegiatan, function (err, result) {
        if (err) {
            res.render('kegiatan/edit', {
                messages: { error: "Gagal mengupdate kegiatan" },
                nama_kegiatan: nama_kegiatan,
                deskripsi_kegiatan: deskripsi_kegiatan,
                tanggal_kegiatan: tanggal_kegiatan
            });
        }
        else {
            res.redirect('/kegiatan');
        }
    });
}

exports.deleteKegiatan = function (req, res) {
    let id = req.params.id;
    console.log(id);
    Kegiatan.delete(id, function (err, result) {
        if (err) {
            res.status(500).send({message: "Gagal menghapus Kegiatan"});
        }
        else {
            res.status(200).send({message: "Berhasil menghapus Kegiatan"});
            }
    });
}

