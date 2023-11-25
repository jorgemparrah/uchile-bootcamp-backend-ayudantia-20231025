USE `Concesionaria`;

INSERT INTO Compradores (rut, nombre) VALUES ('12345678-9', 'Juan Pérez');
INSERT INTO Compradores (rut, nombre) VALUES ('98765432-1', 'María González');
INSERT INTO Compradores (rut, nombre) VALUES ('11223344-5', 'Carlos Ruiz');
INSERT INTO Compradores (rut, nombre) VALUES ('55667788-9', 'Ana Morales');
INSERT INTO Compradores (rut, nombre) VALUES ('22334455-6', 'Elena Ramírez');

INSERT INTO Autos (patente, marca, modelo, rutComprador) VALUES ('AA1111', 'Toyota', 'Corolla', '12345678-9');
INSERT INTO Autos (patente, marca, modelo, rutComprador) VALUES ('BB2222', 'Honda', 'Civic', '98765432-1');
INSERT INTO Autos (patente, marca, modelo, rutComprador) VALUES ('CC3333', 'Ford', 'Fiesta', '11223344-5');
INSERT INTO Autos (patente, marca, modelo, rutComprador) VALUES ('DD4444', 'Chevrolet', 'Spark', '55667788-9');
INSERT INTO Autos (patente, marca, modelo, rutComprador) VALUES ('EE5555', 'Hyundai', 'Elantra', '22334455-6');

INSERT INTO Imagenes (ruta, nombre, patenteAuto) VALUES ('/img/auto1.jpg', 'auto1', 'AA1111');
INSERT INTO Imagenes (ruta, nombre, patenteAuto) VALUES ('/img/auto2.jpg', 'auto2', 'BB2222');
INSERT INTO Imagenes (ruta, nombre, patenteAuto) VALUES ('/img/auto3.jpg', 'auto3', 'CC3333');
INSERT INTO Imagenes (ruta, nombre, patenteAuto) VALUES ('/img/auto4.jpg', 'auto4', 'DD4444');
INSERT INTO Imagenes (ruta, nombre, patenteAuto) VALUES ('/img/auto5.jpg', 'auto5', 'EE5555');

INSERT INTO Vendedores (rut, nombre) VALUES ('55555555-9', 'Jorge Martínez');
INSERT INTO Vendedores (rut, nombre) VALUES ('66666666-0', 'Carmen López');
INSERT INTO Vendedores (rut, nombre) VALUES ('77777777-1', 'Fernando Gómez');

INSERT INTO AutoPorVendedor (patenteAuto, rutVendedor) VALUES ('AA1111', '55555555-9');
INSERT INTO AutoPorVendedor (patenteAuto, rutVendedor) VALUES ('BB2222', '66666666-0');
INSERT INTO AutoPorVendedor (patenteAuto, rutVendedor) VALUES ('CC3333', '55555555-9');
INSERT INTO AutoPorVendedor (patenteAuto, rutVendedor) VALUES ('DD4444', '66666666-0');
INSERT INTO AutoPorVendedor (patenteAuto, rutVendedor) VALUES ('EE5555', '77777777-1');

