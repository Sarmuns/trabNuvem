export function areaQuadrado(l){
  return l*l;
}

export function areaCirculo(r){
  const pi = 3.1415;
  return (pi*r*r);
}

export function trianguloCheck(l1, l2, l3){
  if(l1>=(l2+l3)){
      return "NAO FORMA TRIANGULO";
}else if (Math.pow(l1,2)==(Math.pow(l2,2) + (Math.pow(l3,2)))){
return "TRIANGULO RETANGULO";
}else if (Math.pow(l1,2)>(Math.pow(l2,2) + (Math.pow(l3,2)))){
  return "TRIANGULO OBTUSANGULO";
}else if (Math.pow(l1,2)<(Math.pow(l2,2) + (Math.pow(l3,2)))){
  return ("TRIANGULO ACUTANGULO")
}

}
export function areaRetangulo(lado1, lado2){
  return lado1*lado2;
}