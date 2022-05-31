function restServer(/* conexion */){

    'use strict'

    //INSTANCIAMOS EL MÓDULO DE EXPRESS
    var express = require("express");
    var app = express();
    var server = require("http").Server(app);

    //CREAMOS EL PUERTO DE ENLACE DE LA APP COMO LOCALCHOST
    const port = process.env.PORT || 8080;

    //DEFINIMOS LA RUTA ESTÁTICA ACCESO AL FRONT DEL SISTEMA
    app.use('/', express.static('front'));

    //INICIALIZAMOS EL SERVIDOR
    server.listen(port, function() {
        console.log(`
        ----------------------------------------------------
            Corriendo servidor en: http://localhost:${port}
        ----------------------------------------------------\n`);
    });
}

module.exports.restServer = restServer;