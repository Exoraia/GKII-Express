'use strict';
const Member = require('../models/member.model');

exports.member = function (req, res) {
    Member.findAll(function (err, member) {
        res.render('member', {
            messages: {},
            data: member
        });
    });
}

exports.createPage = function (req, res) {
    res.render('member/create', {
        messages: {},
        nama: ""
    });
}

exports.storeMember = function (req, res) {
    let nama = req.body.nama;
    let newMember = new Member({
        nama: nama
    });
    Member.create(newMember, function (err, result) {
        if (err) {
            res.render('member/create', {
                messages: { error: "Gagal menambah member" },
                nama: ""
            });
        }
        else {
            res.redirect('/member');
        }
    });
}

exports.editPage = function (req, res) {
    let id = req.params.id;
    console.log(id);
    Member.findById(id, function (err, member) {
        if (err) {
            res.render('member/edit', {
                messages: { error: "Gagal menemukan member" },
                nama: ""
            });
        }
        else {
            console.log(member);
            res.render('member/edit', {
                messages: {},
                nama: member[0].nama,
                id_member: member[0].id_member
            });
        }
    });
}

exports.updateMember = function (req, res) {
    let id = req.params.id;
    let nama = req.body.nama;
    let updatedMember = new Member({
        nama: nama
    });
    Member.update(id, updatedMember, function (err, result) {
        if (err) {
            res.render('member/edit', {
                messages: { error: "Gagal mengupdate member" },
                nama: nama
            });
        }
        else {
            res.redirect('/member');
        }
    });
}

exports.deleteMember = function (req, res) {
    let id = req.params.id;
    console.log(id);
    Member.delete(id, function (err, result) {
        if (err) {
            res.status(500).send({message: "Gagal menghapus Member"});
        }
        else {
            res.status(200).send({message: "Berhasil menghapus Member"});
            }
    });
}