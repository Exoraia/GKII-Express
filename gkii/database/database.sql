CREATE DATABASE gkii;

USE gkii;

CREATE TABLE tb_user (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nama VARCHAR(255) NOT NULL
);

CREATE TABLE tb_jabatan (
    id_jabatan INT PRIMARY KEY AUTO_INCREMENT,
    nama_jabatan VARCHAR(255) NOT NULL
);

CREATE TABLE tb_member (
    id_member INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE tb_posisi (
    id_member INT NOT NULL,
    id_jabatan INT NOT NULL,
    periode VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_member) REFERENCES tb_member(id_member),
    FOREIGN KEY (id_jabatan) REFERENCES tb_jabatan(id_jabatan)
);

CREATE TABLE tb_kegiatan (
  id_kegiatan INT PRIMARY KEY AUTO_INCREMENT,
  nama_kegiatan VARCHAR(255) NOT NULL,
  deskripsi_kegiatan VARCHAR(255) NOT NULL,
  tanggal_kegiatan DATE
);