TRUNCATE TABLE tb_jabatan;
TRUNCATE TABLE tb_user;
TRUNCATE TABLE tb_member;
TRUNCATE TABLE tb_posisi;
TRUNCATE TABLE tb_kegiatan;

INSERT INTO tb_user (username, password, nama)
VALUES
  ('user1', MD5('password1'), 'admin'),
  ('user2', MD5('password2'), 'jelata');

INSERT INTO tb_member (nama)
VALUES
  ('Pdt. Mansur Samin, M. Th'),
  ('Gunawan, SH'),
  ('Songkon, S.E.'),
  ('C. Kanyan, S.H.'),
  ('Rosnawati, S.E.'),
  ('Eksakwin, S.Kom.'),
  ('Ev. Saem, S. Th'),
  ('Golos Noberto, A.Mp.Pd'),
  ('Selly, S. Pd. K'),
  ('Eging, S.Kom.'),
  ('Perdy'),
  ('Sertu Asiani'),
  ('Meliansi'),
  ('Alpredo Samuel Maro'),
  ('Luaya Tarigan'),
  ('Marthein Nikolaos, A.Md.Pd'),
  ('Lily Wara Rahayu, S.Pd.'),
  ('Serom, S.S.T.');

INSERT INTO tb_jabatan (nama_jabatan)
VALUES
  ('Penasihat Bidang Pelayanan dan Doktrin'),
  ('Penasihat Bidang Advokasi dan Hukum'),
  ('BPHJ Ketua'),
  ('BPHJ Wakil Ketua'),
  ('BPHJ Sekretaris'),
  ('BPHJ Bendahara'),
  ('BPHJ Wakil Bendahara'),
  ('Ketua Seksi Misi/Penginjilan'),
  ('Ketua Seksi Penata Layanan'),
  ('Ketua Seksi Diakonia'),
  ('Ketua Seksi Pembangunan'),
  ('Ketua Seksi Perlengkapan'),
  ('Ketua Seksi Humas dan Usaha Dana'),
  ('Ketua Seksi Sekolah Minggu'),
  ('Ketua Seksi Pemuda'),
  ('Ketua Seksi Perkauan'),
  ('Ketua Seksi perkaria'),
  ('Ketua Seksi Pengembangan SDM & Pendidikan'),
  ('Pengurus Keuangan');

  INSERT INTO tb_kegiatan (nama_kegiatan, deskripsi_kegiatan)
VALUES
  ('Pekan Pemuda Wilayah (PPW)', 'Pekan Pemuda Wilayah merupakan acara yang penuh dengan berbagai aktivitas bermanfaat yang dirancang untuk membangun komunitas pemuda yang lebih solid, beriman, dan bersemangat. Melalui kegiatan seperti ibadah bersama, olahraga, games, dan lomba, para pemuda tidak hanya memperdalam iman dan pengetahuan mereka, tetapi juga mempererat hubungan persaudaraan dan mengembangkan berbagai keterampilan penting dalam kehidupan. Acara ini menjadi momen berharga untuk mengalami kebersamaan dalam iman dan semangat pelayanan yang kuat.'),
  ('Gotong Royong', 'Gotong Royong merupakan kegiatan yang dilakukan oleh GKII untuk membantu meningkatkan kualitas hidup masyarakat dan menunjukkan kasih Kristus dalam tindakan nyata. Gotong royong ini bukan hanya membantu memenuhi kebutuhan praktis masyarakat, tetapi juga memperkuat ikatan sosial dan menciptakan komunitas yang lebih harmonis dan sejahtera.'),
  ('Kegiatan dan Kunjungan Dari Gereja Luar', 'Kegiatan dan kunjungan dari gereja luar adalah acara yang melibatkan jemaat gereja dari berbagai lokasi untuk berkumpul, berinteraksi, dan mempererat hubungan satu sama lain. Acara semacam ini sering kali diadakan dengan tujuan untuk memperkaya iman, membangun komunitas, serta meningkatkan kerjasama antar gereja. Salah satunya adalah kunjungan dari gereja Ramcheong dari Korea Selatan');

    INSERT INTO tb_posisi (id_member, id_jabatan, periode)
VALUES
  (1,1,'2023-2024'),
  (2,2,'2023-2024'),
  (1,3,'2023-2024'),
  (3,4,'2023-2024'),
  (4,5,'2023-2024'),
  (5,6,'2023-2024'),
  (6,7,'2023-2024'),
  (7,8,'2023-2024'),
  (8,9,'2023-2024'),
  (9,10,'2023-2024'),
  (10,11,'2023-2024'),
  (11,12,'2023-2024'),
  (12,13,'2023-2024'),
  (13,14,'2023-2024'),
  (14,15,'2023-2024'),
  (15,16,'2023-2024'),
  (16,17,'2023-2024'),
  (17,18,'2023-2024'),
  (18,19,'2023-2024');