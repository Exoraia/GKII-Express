'use strict';
const User = require('../models/users.model');

exports.user = function (req, res) {
    User.findAll(function (err, users) {
        res.render('user', {
            messages: {},
            data: users
        });
    });
}

exports.createPage = function (req, res) {
    res.render('user/create', {
        messages: {},
        username: "",
        password: "",
        nama: ""
    });
}

exports.storeUser = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let nama = req.body.nama;
    let newUser = new User({
        username: username,
        password: password,
        nama: nama
    });
    User.create(newUser, function (err, result) {
        if (err) {
            res.render('user/create', {
                messages: { error: "Gagal membuat user" },
                username: "",
                password: "",
                nama: ""
            });
        }
        else {
            res.redirect('/user');
        }
    });
}

exports.editPage = function (req, res) {
    let id = req.params.id;
    console.log(id);
    User.findById(id, function (err, user) {
        if (err) {
            res.render('user/edit', {
                messages: { error: "Gagal menemukan user" },
                username: "",
                nama: "",
                id_user: ""
            });
        }
        else {
            console.log(user);
            res.render('user/edit', {
                messages: {},
                username: user[0].username,
                nama: user[0].nama,
                id_user: user[0].id_user
            });
        }
    });
}



exports.updateUser = function (req, res) {
    let id = req.params.id;
    let username = req.body.username;
    let nama = req.body.nama;
    let updatedUser = new User({
        username: username,
        nama: nama
    });
    User.update(id, updatedUser, function (err, result) {
        if (err) {
            res.render('user/edit', {
                messages: { error: "Gagal mengupdate user" },
                username: username,
                nama: nama
            });
        }
        else {
            res.redirect('/user');
        }
    });
}

exports.deleteUser = function (req, res) {
    let id = req.params.id;
    console.log(id);
    User.delete(id, function (err, result) {
        if (err) {
            res.status(500).send({message: "Gagal menghapus User"});
        }
        else {
            res.status(200).send({message: "Berhasil menghapus User"});
            }
    });
}