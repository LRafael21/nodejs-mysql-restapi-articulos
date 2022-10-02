CREATE DATABASE Articulosdb;

USE Articulosdb;

CREATE TABLE Articulo(
  articuloId INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(200),
  marca VARCHAR(30),
  existencia DOUBLE
  PRIMARY KEY (articuloId)
);

DESCRIBE ARTICULO

INSERT INTO articulo VALUES
(1,'Monitor', 'MSI',1200.0),
(2,'Celular', 'Iphone',500.0);
