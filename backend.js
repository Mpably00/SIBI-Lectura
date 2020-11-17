const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
var cors = require("cors");
var http = require("http");
var request= require("request");
const neo4j = require("neo4j-driver");
const driver= neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "1236")
);
const session = driver.session();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/prueba",(req,res)=>{
    console.log("ENTRO EN EL GET");
    res.send("HOLA");
});

console.log("YA PASE EL GET");
app.listen(port, function() {
    console.log("Example app listening on port " + 3000);
  });