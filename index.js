import express from 'express';
import * as funcoes from './funcoes.js';
import path from 'path';
import {fileURLToPath} from 'url';
var app = express();


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉', __dirname);

console.log(path.join(__dirname, 'index.html'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/quadrado', function(req, res){
  const lado = req.query.lado;
  if(lado>0){
    res.send(`<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .square {
      height: ${lado*10}px;
      width: ${lado*10}px;
      background-color: #555;
    }
    </style>
    </head>
    <body>
    
    <h2>Quadrado de Lado = ${lado}</h2>
    <div class="square"></div>
    
    </body>
    </html> `);
    return
  } else {
    res.send('nao existe lado negativo ou igual a zero');
  }
});
app.get('/circulo', function(req, res){
  const raio = req.query.raio;
  if(raio>0){
    res.send(`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .circle {
      height: ${2*raio*10}px;
      width: ${2*raio*10}px;
      background-color: #555;
      border-radius: 50%;
    }
    </style>
    </head>
    <body>
    
    <h2>Circulo de raio: ${raio}</h2>
    <div class="circle"></div>
    
    </body>`);
    return
  } else {
    res.send('nao existe raio negativo ou igual a zero');
  }
});



app.get('/quadradoArea', function(req, res) {
  const lado = req.query.lado;
  // let result = {'area': funcoes.areaQuadrado(lado)};
  // res.send(result);
  res.send('area = ' + funcoes.areaQuadrado(lado));
});
app.get('/circuloArea', function(req, res) {
  const raio = req.query.raio;

  res.send('area = ' + funcoes.areaCirculo(raio));
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});