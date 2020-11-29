const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
var cors = require("cors");
var http = require("http");
var request= require("request");
const neo4j = require("neo4j-driver");
const { query } = require("express");
const { default: VueRouter } = require("vue-router");
const driver= neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "Maday123")
);


const session = driver.session();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/prueba",(req,res)=>{
    res.send("HOLA"),
    console.log("Estoy dentro del post");
});


app.get("/obtenerLibros", function(req,res){
    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var puntuacion = req.body.puntuacion;
    var edad = 8;
    var recomendado = req.body.recomendado;
    var array= [];

    if(edad!="o"){
      var query="MATCH (n:libro) WHERE n.edad = '8' return n";
      
    }
    else{
      query = "MATCH (n:libro)";
    }
    
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);
  
      },
      onCompleted: function () {
        console.log(array.length);
        var randon_int = Math.floor(Math.random() * array.length);
        console.log(array[randon_int]);
  
        res.send([array[randon_int]]);
  
      },
      onError: function (error) {
        console.log(error);
      }
    });
});
app.get("/real", function (req, res) {
  var edad =0;
  console.log(edad);
  var query = "MATCH (n:Libro) WHERE (n.edad='"+edad+"') return n";
  console.log("prueba");
  var array = [];

  const resultPromise = session.run(query).subscribe({
    onNext: function (record) {
      array.push(record.get(0).properties);

    },
    onCompleted: function () {
      console.log(array.length);
      for(var i=0; i<5; i++){
        console.log(array[i]);
      }
      var randon_int = Math.floor(Math.random() * array.length);
      console.log(array[randon_int]);

      res.send([array[randon_int]]);

    },
    onError: function (error) {
      console.log(error);
    }
  });
}),

app.listen(3000, function() {
    console.log("Example app listening on port " + 3000);
  });