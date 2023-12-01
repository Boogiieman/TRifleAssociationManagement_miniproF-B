-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2023 at 03:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prj`
--

-- --------------------------------------------------------

--
-- Table structure for table `createvent`
--

CREATE TABLE `createvent` (
  `id` int(11) NOT NULL,
  `ename` text NOT NULL,
  `time` text NOT NULL,
  `date` date NOT NULL,
  `loc` text NOT NULL,
  `scheme` text NOT NULL,
  `status` text DEFAULT NULL,
  `winner` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `createvent`
--

INSERT INTO `createvent` (`id`, `ename`, `time`, `date`, `loc`, `scheme`, `status`, `winner`) VALUES
(4, '400', '10', '2023-12-09', 'tvm', 'silver', '1', 0),
(5, '500 mtrs', '10.30', '2023-12-08', 'tvm', 'gold', '1', 1),
(6, '400', '03:00', '2023-12-15', 'Trivandrum', 'gold', '1', 1),
(7, '500', '03:00', '2023-12-14', 'Trivandrum', 'silver', '1', 0),
(8, '500', '10:00 am', '2023-12-21', 'Trivandrum', 'gold', '1', 1),
(9, '200', '10:00 am', '2023-12-30', 'Trivandrum', 'gold', '1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `regevent`
--

CREATE TABLE `regevent` (
  `id` int(11) NOT NULL,
  `uname` text NOT NULL,
  `selecte` text NOT NULL,
  `date` date NOT NULL,
  `loc` text NOT NULL,
  `scheme` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `regevent`
--

INSERT INTO `regevent` (`id`, `uname`, `selecte`, `date`, `loc`, `scheme`) VALUES
(1, 'vishnu', '400', '2023-12-08', 'tvm', ''),
(2, 'vishnu', '500', '2023-12-07', 'tvm', 'silver');

-- --------------------------------------------------------

--
-- Table structure for table `regm`
--

CREATE TABLE `regm` (
  `id` int(11) NOT NULL,
  `uname` text NOT NULL,
  `pword` text NOT NULL,
  `email` text NOT NULL,
  `loc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `regm`
--

INSERT INTO `regm` (`id`, `uname`, `pword`, `email`, `loc`) VALUES
(1, 'admin', 'admin', 'admin@rifle.com', 'Kerala'),
(2, 'manager', 'manager', 'manager@rifle.com', 'Trivandrum'),
(3, 'manager 2', 'mng', 'manager2@rifle.com', 'Trivandrum');

-- --------------------------------------------------------

--
-- Table structure for table `regu`
--

CREATE TABLE `regu` (
  `uid` int(11) NOT NULL,
  `uname` text NOT NULL,
  `pword` text NOT NULL,
  `email` text NOT NULL,
  `loc` text NOT NULL,
  `scheme` text NOT NULL,
  `eid` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `regu`
--

INSERT INTO `regu` (`uid`, `uname`, `pword`, `email`, `loc`, `scheme`, `eid`) VALUES
(1, 'Janu', 'janu', 'j@gmail.com', 'Trivandrum', 'gold', '9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `createvent`
--
ALTER TABLE `createvent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regevent`
--
ALTER TABLE `regevent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regm`
--
ALTER TABLE `regm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regu`
--
ALTER TABLE `regu`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `createvent`
--
ALTER TABLE `createvent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `regevent`
--
ALTER TABLE `regevent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `regm`
--
ALTER TABLE `regm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `regu`
--
ALTER TABLE `regu`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
