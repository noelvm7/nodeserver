const http = require("http");
const chalk = require("chalk");

const host = "localhost";
const puerto = 8080;

const servidor = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const respuesta = {
    mensaje: "¡Hola soy Noel Vargas desde mi servidor Node.js!",
    };
    res.end(JSON.stringify(respuesta));
});

servidor.listen(puerto, host, () => {
    console.log(
    chalk.green(`Servidor funciona en la direccion http://${host}:${puerto}/`)
    );
});
