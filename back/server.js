//FICHERO PA INICIAR EL SERVIDOR

//SERVIDOR DE BASE DE DATOS
/* var mysqlServer = require("./mysql.js");
var conexion = mysqlServer.conexion;
var database = mysqlServer.database;
mysqlServer.mysqlServer(database, conexion); */

//SERVIDOR REST
var restServer = require("./rest.js");
restServer.restServer(/* conexion */);