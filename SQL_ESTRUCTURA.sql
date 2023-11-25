CREATE DATABASE `Concesionaria`;
USE `Concesionaria`;

CREATE TABLE `Compradores` (
  `rut` VARCHAR(100) PRIMARY KEY,
  `nombre` VARCHAR(100)
);

CREATE TABLE `Autos` (
  `patente` VARCHAR(100),
  `marca` VARCHAR(100),
  `modelo` VARCHAR(100),
  `rutComprador` VARCHAR(100),
  PRIMARY KEY (`patente`)
);

CREATE TABLE `Imagenes` (
  `ruta` VARCHAR(100),
  `nombre` VARCHAR(100),
  `patenteAuto` VARCHAR(100),
  PRIMARY KEY (`ruta`)
);

CREATE TABLE `Vendedores` (
  `rut` VARCHAR(100) PRIMARY KEY,
  `nombre` VARCHAR(100)
);

CREATE TABLE `AutoPorVendedor` (
  `patenteAuto` VARCHAR(100),
  `rutVendedor` VARCHAR(100),
  PRIMARY KEY (`patenteAuto`, `rutVendedor`)
);

ALTER TABLE `Autos` ADD FOREIGN KEY (`rutComprador`) REFERENCES `Compradores` (`rut`);

ALTER TABLE `Imagenes` ADD FOREIGN KEY (`patenteAuto`) REFERENCES `Autos` (`patente`);

ALTER TABLE `AutoPorVendedor` ADD FOREIGN KEY (`patenteAuto`) REFERENCES `Autos` (`patente`);

ALTER TABLE `AutoPorVendedor` ADD FOREIGN KEY (`rutVendedor`) REFERENCES `Vendedores` (`rut`);
