"use strict";
// npm init
// npm install express --save
// npm install body-parser --save
// npm install cors --save

var miExpress = require("express");
var app = miExpress();
app.listen(9000, ()=> {
  console.log("¡Servidor iniciado!");
});
app.route("/api/portfolios").get((req, res) => {
  res.send([
    { nombre: "nombre A", 
      descripcion: "descripcion A",
      fichero: "fichero_A" }, 
    { nombre: "nombre A", 
        descripcion: "descripcion A",
        fichero: "fichero_A" }
  ])
});
app.route("/api/portfolios/:name").get((req, res) => {
  let nombrePortfolio = req.params['name'];
  res.send({ name: nombrePortfolio});
});
app.route("api/portfolios/:name").delete((req, res) => {
  res.sendStatus(204);
});

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route("/api/portfolios").post((req, res) => {
  res.send(201, req.body);
});
let cors = require("cors");
var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

/*
// function alResponder(request, response) con funciones anónimas de ES6. Función callback, que se llama cada vez que hay una petición HTTP
var reservas = {
  "GET": function() {
    return "['todas', 'las', 'reservas' ]";
  },
  "POST": function(reserva) {
    console.log("Añadir reserva " + reserva.id + " " + reserva.nombre);
  }
};
var alResponder = (request, response) => {
  console.log("Acceso a la petición, ", request.originalUrl);
  // response.send("Ruta: " + request.originalUrl + " - Verbo: " + request.method);
  var metodo = reservas[request.method];
  console.log(metodo());
  response.send(metodo());
}
app.get("/", alResponder);
app.post("/", alResponder);
app.delete("/", alResponder);
app.all("/paratodos", alResponder);
app.all("/enotrolado", alResponder);
console.log("Servidor express lanzado.");
*/