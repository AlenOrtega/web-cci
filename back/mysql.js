//FICHERO CONEXIÓN CON EL SERVIDOR DE BASE DE DATOS
'use strict'
var mysql = require("mysql");

//INSTANCIAMOS LA BASE DE DATOS
var database = {
    host: "localhost",
    user: "root",
    password: "",
    database: "web-cci-database"
};

//INICIALIZAMOS LA CONEXIÓN CON LA BASE DE DATOS DISEÑADA
var conexion = mysql.createConnection(database);
function mysqlServer(database, conexion){
    //INICIALIZAMOS LA CONEXIÓN CON LA BASE DE DATOS DISEÑADA
    console.log(`
        -------------------------------------------------------------------
            Estableciendo conexión con la base de datos ${database.database}
        -------------------------------------------------------------------`);
    conexion.connect(function (err) {
        if (err) {
            console.log(`Se ha producido un error al conectar con la base de datos ${database.database}`, err);
            process.exit();
        } else {
            console.log(`
        ------------------------------------------------------------
            Base de datos ${database.database} conectada correctamente
        ------------------------------------------------------------`);
        }
    });
}
module.exports.mysql = mysql;
module.exports.database = database;
module.exports.conexion = conexion;
module.exports.mysqlServer = mysqlServer;