'use strict';
const Kegiatan = require('../models/kegiatan.model');

exports.informasi = function(req, res) {
    Kegiatan.findAll(function (err, kegiatan) {
        res.render('informasi', {
            messages: {},
            data: kegiatan
        });
    });
};

