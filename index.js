import express from 'express';
import * as funcoes from './funcoes.js';
import path from 'path';
import {fileURLToPath} from 'url';
var app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta ${port}!`);
});

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


app.get('/triangulo', function(req, res) {
  const lado1 = parseInt(req.query.lado1);
  const lado2 = parseInt(req.query.lado2);
  const lado3 = parseInt(req.query.lado3);


  res.send(funcoes.trianguloCheck(lado1,lado2,lado3));
});
app.get('/retangulo', function(req, res){
  const lado1 = req.query.lado1;
  const lado2 = req.query.lado2;
  if(lado1 && lado2 > 0){

    res.send(`<html>
    <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  .rectangle {
    height:  ${lado1*10}px;
    width:  ${lado2*10}px;
    background-color: #555;
  }
  </style>
  </head>
  <body>
  
  <h2>Retangulo com lados: ${lado1} e ${lado2}</h2>
  <div class="rectangle"></div>
  
  </body>
  </html> `);
  
  
}else{
  res.send("Nao forma retangulo");
}  


});
app.get('/retanguloArea', function(req, res) {
  const lado1 = req.query.lado1;
  const lado2 = req.query.lado2;
  res.send('area = ' + funcoes.areaRetangulo(lado1, lado2));
});
app.get('/trapezio', function(req, res) {

  const baseEsquerda = req.query.baseEsquerda;
  const baseDireita = req.query.baseDireita;
  const altura = req.query.altura;
  res.send(`<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  .trapezoid {
    border-bottom: ${altura*10}px solid #555;
    border-left: ${baseEsquerda*10}px solid transparent;
    border-right: ${baseDireita*10}px solid transparent;
    height: 0;
    width: 125px;
  }
  </style>
  </head>
  <body>
  
  <h2>Trapezio em CSS</h2>
  <div class="trapezoid "></div>
  
  </body>
  </html> `

  )
});

app.get("/creditos", (req, res) => {
  res.sendFile(path.join(__dirname, '/creditos.html'));
});

