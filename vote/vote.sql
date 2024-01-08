-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 08:18 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vote`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `major` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  `facebook_link` varchar(255) DEFAULT NULL,
  `instagram_link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `name`, `major`, `gender`, `profile_image`, `facebook_link`, `instagram_link`) VALUES
(1, 'Khaing Zaw Nyi', 'IST', 'male', 'people_img/p1.jpg', '#', '#'),
(2, 'Hla Yamin Oo', 'IST', 'female', 'people_img/p2.jpg', '#', '#'),
(3, 'Thae Aung', 'CE', 'male', 'people_img/p3.jpg', '#', '#'),
(4, 'Htoo Thet Hmue', 'CE', 'female', 'people_img/p4.jpg', '#', '#'),
(5, 'Lwin Min Aung', 'ECE', 'male', 'people_img/p5.jpg', '#', '#'),
(6, 'Su Myat Noe San', 'ECE', 'female', 'people_img/p6.jpg', '#', '#'),
(7, 'Hein Htet Aung', 'PRE', 'male', 'people_img/p8.jpg', '#', '#'),
(8, 'Chit Chit Cho Nyi', 'PRE', 'female', 'people_img/p7.jpg', '#', '#'),
(9, 'Eaint Thiri Han', 'AME', 'female', 'people_img/p10.jpg', '#', '#'),
(10, 'Tayzar Aung', 'AME', 'male', 'people_img/p9.jpg', '#', '#');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `VouchID` int(11) NOT NULL,
  `KID` int(11) NOT NULL,
  `QID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD UNIQUE KEY `VouchID` (`VouchID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
