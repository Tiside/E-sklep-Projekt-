-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2025 at 08:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-sklep`
--

-- --------------------------------------------------------

--
-- Table structure for table `listaproduktow`
--

CREATE TABLE `listaproduktow` (
  `id` int(11) NOT NULL,
  `marka` varchar(191) NOT NULL,
  `src` varchar(191) NOT NULL,
  `ilosc` int(11) NOT NULL,
  `cena` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listaproduktow`
--

INSERT INTO `listaproduktow` (`id`, `marka`, `src`, `ilosc`, `cena`) VALUES
(3, 'nike-air-shoe', 'https://aplug.pl/cdn/shop/files/nike-air-max-plus-tn-marseille-1.png?v=1713750782', 4, 399),
(7, 'test', 'https://drop-up.pl/cdn/shop/files/drop-up.pl-Air-Jordan-4-Retro-_Thunder_-_2023_-1.png?v=1717147908', 5, 500);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
('cm9zz5yu80001j6v2f653jscm', 'dasda', 'AA@a.com', '$2b$10$x5XDOahCBqDnlZpV.0mlgeASPoqiq2/CrlsHOiDHiXBMzppvSLQEe'),
('cma2czo8u0000sd1iielnqxtx', 'fdasfsag', 'gfsadgsa@fsdaf.com', '$2b$10$m4EPQyJ0.IJ33G1eLMs8w.0UCNN5aNzdANLJlxn6CDpE2sZgHaWmW'),
('cma2t21ss0000pad7eumnth1a', 'fifi', 'fifi@fifi.com', '$2b$10$BGi8jiOgXIBC5Q0ZLPdBsecTix4/wrvITU2VGihEWe3AuXISWmD8S'),
('cma2ykxgl0000mv3hcsx3s1ip', 'abc123', 'abc123@abc123.com', '$2b$10$t98pdvl0JRF0tUadgXxWC.1CP7gxLIHv0x4hD1W9qW32cDs5agrn6'),
('cma9maugz0000viyktrbp6ga1', 'fajjjjfel', 'fajjjjfel@fajjjjfel.com', '$2b$10$ysscStrtI4TwKrDGCbuKwuig4bFaFwtOXK7XE38Q746IbKp9zMR6m'),
('cmacs2mr70000viik12kjaqsl', 'snaks', 'snaks@snaks.snaks', '$2b$10$Vz.nG6M9ghCGohvU26Yg8eR6X0IuoWY7rpVmyBXgL/en0LSAVUfVu');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('5e3d7889-7e44-4715-a4c6-3014d76e60fc', 'f7ee5746cc6b435072cea4a80e671d16c340b9e02c1caec04d35e3e2cbffb030', '2025-04-06 10:51:40.868', '20250406105140_test', NULL, NULL, '2025-04-06 10:51:40.682', 1),
('83bb239d-f2a7-4fe7-ac7d-cd154607c7a9', 'a95413d901e1f354d0495389e9761aa7d363f8ad2f2b13ca2fb3f5dd7fc7424a', '2025-05-03 08:54:37.535', '20250503085437_poprawa_po_raz_10', NULL, NULL, '2025-05-03 08:54:37.528', 1),
('a5328a3a-e312-4ebc-aba2-f8aa719be0a8', '6f55b859afa79097dc5c8701fca2095ef025eff1243d3b8008edd25eb2e44223', '2025-04-06 10:58:12.188', '20250406105812_dodanie_listy_produktow', NULL, NULL, '2025-04-06 10:58:12.182', 1),
('abe01629-e4b8-499c-9d96-be589af20859', '61524d14d5f83ec49ba07b361f05b27cbcb2b00c95bf8bdc6c7f10493b9adfa2', '2025-04-27 18:22:50.643', '20250427182250_name_na_unique', NULL, NULL, '2025-04-27 18:22:50.635', 1),
('b3af5d4c-3ac0-40fd-9218-2ae328066811', '6dfb8fa7e914ed2ae5c3d66cf4de09fd52206b05a73f3dce9cc18874a893770a', '2025-05-03 08:48:52.172', '20250503084852_listaproduktow_poprawiam', NULL, NULL, '2025-05-03 08:48:52.153', 1),
('bd234c29-7c2a-4013-8530-222937a9ed0c', '2e91058a3f99ae9b14c642742fe402ab43037a5326ad1ad9461fcd7bd08ecc15', '2025-05-03 08:53:02.550', '20250503085302_to_samo_co_wczesniej_lista_produktow', NULL, NULL, '2025-05-03 08:53:02.544', 1),
('c4d29a12-abf9-4d7f-bc65-c8a7e8f40e29', 'e11bd47f8c8fee4b6005de59b475d78f25290866c34b6ba9a2fb728eb719c54c', '2025-04-13 16:09:54.177', '20250413160954_logowanie_i_rejestracja', NULL, NULL, '2025-04-13 16:09:54.136', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `listaproduktow`
--
ALTER TABLE `listaproduktow`
  ADD UNIQUE KEY `ListaProduktow_id_key` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Users_name_key` (`name`),
  ADD UNIQUE KEY `Users_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
