const http = require('http');
const colors = require('colors');

// crea servidor
const server = http.createServer((request, response) => {
    //mostrando Request info del cliente, que URL esta visitando o comunicando siempre trae favicon
    console.log(request.url);
    if (request.url === '/') {
        response.write('Bienvenido al Servidor');
        // damos return para que se salga de la funcion y no genere un error con el siguiente write
        return response.end();
    }
    if (request.url === '/about') {
        response.write('Esta es la página About');
        // damos return para que se salga de la funcion y no genere un error con el siguiente write
        return response.end();
    }
    //mostrando Mensaje en el navegador se puede utilizar HTML utilizando backsticks
    response.write(`
    <h1>Página no encontrada</h1>
    <p>La página que estas buscando no se encuentra en el servidor</p>
    <a href="/">Volver al inicio</a>
    `);

    response.end();

});
// se inicializa el servidor en el puerto 3000
server.listen(3000);

console.log("Server escuchando en el puerto 3000".bgYellow);
