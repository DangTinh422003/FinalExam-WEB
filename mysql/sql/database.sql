SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `music_web`
--

CREATE DATABASE `music_web`;

use `music_web`;

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `ten_bai_hat` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `path_nhac` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `path_anh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ngay_phat_hanh` datetime,
  `id_tac_gia` int(11)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci  ;

ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

CREATE TABLE `tac_gia` (
  `id` int(11) NOT NULL,
  `ten_tac_gia` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `mo_ta` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `path_anh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `avt` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `tac_gia`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tac_gia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `music`
  ADD FOREIGN KEY (`id_tac_gia`)
  REFERENCES `tac_gia`(`id`); 

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `ten_nguoi_dung` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `avt` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

CREATE TABLE `theo_doi` (
  `id_tac_gia` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `theo_doi`
  ADD PRIMARY KEY (`id_tac_gia`, `id_user`);

ALTER TABLE `theo_doi`
  ADD FOREIGN KEY (`id_user`) REFERENCES `user`(`id`);
ALTER TABLE `theo_doi`
  ADD FOREIGN KEY (`id_tac_gia`) REFERENCES `tac_gia`(`id`);

CREATE TABLE `yeu_thich` (
  `id_music` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `yeu_thich`
  ADD PRIMARY KEY (`id_music`, `id_user`);

ALTER TABLE `yeu_thich`
  ADD FOREIGN KEY (`id_user`) REFERENCES `user`(`id`);
ALTER TABLE `yeu_thich`
  ADD FOREIGN KEY (`id_music`) REFERENCES `music`(`id`);

-- tac gia
INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'S??n t??ng M-TP', '', 'st-bg.jpg', 'son-tung.png');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'V????ng Anh T??', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'Jaykii', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'H????ng Tr??m', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'Only C', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'Tr???nh ????nh Quang', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'Mai Ti???n D??ng', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'B??i Anh Tu???n', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'H??a Minzy', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'DAISI DANCE', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'L?? B???o B??nh', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'Nh?? Qu???nh', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'H???ng Ng???c', '', '', '');

INSERT INTO `tac_gia` (`id`, `ten_tac_gia`, `mo_ta`, `path_anh`, `avt`) VALUES
(NULL, 'Rhymastic', '', '', '');


-- music
INSERT INTO `music` (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'L???c tr??i', 'LacTroiTripleDRemix-SonTungMTP-5164670.mp3', 'lac-troi.png', '2019-02-04 11:53:55', '1');

INSERT INTO `music` (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Th??ch th?? ?????n', 'Thich Thi Den - Le Bao Binh.mp3', 'thich_thi_den.jpg', '2020-02-12 00:09:59', '11');

INSERT INTO `music` (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Take me hand', 'TakeMeHand-DAISHIDANCECecileCorbel-5385190.mp3', 'take_my_hand.jpg', '2022-07-12 00:09:59', '10');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'N???u Kh??ng Th??? ?????n V???i Nhau', 'Neu Khong The Den Voi Nhau - Trinh Dinh.mp3', 'neu-khong-the-den-voi-nhau.jpg', '2021-12-31 13:46:42', '6');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Ng?????i nh?? anh', 'NguoiNhuAnh-MaiTienDung-8095883.mp3', 'nguoi-nhu-anh.jpg', '2022-09-17 09:50:52', '7');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'H??t ?????ng Nh?? Th??i Quen', 'Dung Nhu Thoi Quen - JayKii_ Sara Luu.mp3', 'dung-nhu-thoi-quen.jpg', '2019-02-04 11:53:55', '3');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Em c???a ng??y h??m qua', 'EmCuaNgayHomQua-SonTungMTP-2882720.mp3', 'em-cua-ngay-hom-qua.jpg', NULL, '1');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'C??n m??a ngang qua', 'ConMuaNgangQua-M-TP_39dyg.mp3', 'con-mua-ngang-qua.jpg', '2020-12-24 00:00:56', '1');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Y??u 5', 'Yeu-5-Rhymastic.mp3', 'yeu5.jpg', '2015-12-24 00:12:00', '14'); 

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'V??ng tr???i b??nh y??n', 'Vung-Troi-Binh-Yen-Hong-Ngoc.mp3', 'vung-troi-binh-yen.jpg', '2002-12-18 00:16:19', '13');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'V??ng l?? me bay', 'Vung-La-Me-Bay-Nhu-Quynh.mp3', 'vung-la-me-bay.jpg', '2002-12-02 00:19:42', '12');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Gi?? nh?? anh l???ng im', 'Gia-Nhu-Anh-Lang-Im-OnlyC-Lou-Hoang-Quang-Hung-MasterD.mp3', 'gia-nhu-anh-lang-yen.jpg', '2016-12-24 00:12:00', '5');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Ch??a ????? ????? gi??? em', 'ChuaDuDeGiuEm-VuongAnhTu-8343849.mp3', 'chua-du-de-giu-em.jpg', '2022-12-24 00:33:40', '2');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'R???i b???', 'RoiBo-GalaNhacViet-7700158.mp3', 'roi-bo.png', '2022-12-23 22:54:21', '9');

INSERT INTO `music`  (`id`, `ten_bai_hat`, `path_nhac`, `path_anh`, `ngay_phat_hanh`, `id_tac_gia`) VALUES
(NULL, 'Em g??i m??a', 'em-gai-mua huong-tram.mp3', 'em-gai-mua.png', '2021-12-31 13:46:42', '4');

-- user
INSERT INTO `user` (`id`, `ten_nguoi_dung`, `email`, `password`, `avt`) VALUES
(NULL, 'user1', 'user1@gmail.com', '123456', '');

INSERT INTO `user` (`id`, `ten_nguoi_dung`, `email`, `password`, `avt`) VALUES
(NULL, 'user2', 'user2@gmail.com', '1234567', '');

