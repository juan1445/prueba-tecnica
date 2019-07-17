var nombre = "";
var sumaDeTiempos = 0;
var tiempoCadaUno = 0;
var corredores = 3;
var carreras = 5;
let corredores = {
   "nombres": [],
   "promedio": [],
}

for (let j = 0; j < corredores; j++) {

   nombre = prompt("Indique el nombre del corredor" + [j + 1]);
   corredores.nombres.push(nombre);


   for (var i = 0; i < carreras; i++) {
       tiempoCadaUno = prompt("Indique el tiempo de la carrera " + [i + 1]);
       sumaDeTiempos += tiempoCadaUno * 1;
   }

   corredores.promedio.push(sumaDeTiempos / carreras);
   sumaDeTiempos = 0;

}

let arrAux = corredores.promedio.slice();
let varAux = arrAux.sort(function (num1, num2) {
   return num1 - num2;
});


let primerTiempo = corredores.promedio.indexOf(varAux[0]);
let segundoTiempo = corredores.promedio.indexOf(varAux[1]);
let tercerTiempo = corredores.promedio.indexOf(varAux[2]);

let podio = [corredores.nombres[primerTiempo],
           corredores.nombres[segundoTiempo],
           corredores.nombres[tercerTiempo]];
console.log(podio);


let premio=[0,0,0];
let contadorLetras=[0,0,0];

for(let i=0;i<podio.length;i++){
contadorLetras[i]=podio[i].length-1;
}
console.log(contadorLetras)

if(contadorLetras[0]<15){
   premio[0]=25000000;
}else if(contadorLetras[0]>=15 && contadorLetras[0]<=30){
   premio[0]=27500000;
}else if(contadorLetras[0]>=30){
   premio[0]=30000000;
}

if(contadorLetras[1]<10){
   premio[1]=15000000;
}else if(contadorLetras[1]>=10 && contadorLetras[1]<=25){
   premio[1]=17500000;
}else if(contadorLetras[1]>=25){
   premio[1]=20000000;
}

if(contadorLetras[2]<13){
   premio[2]=7500000;
}else if(contadorLetras[2]>=13 && contadorLetras[2]<=20){
   premio[2]=27500000;
}else if(contadorLetras[2]>=20){
   premio[2]=30000000;
}

podio=podio.map(function(x){
   return x.toUpperCase();
});

for(let i=0;i<podio.length;i++){
   if(podio[i].indexOf("PERIQUITO PEREZ")!==-1){
       premio[i]+=2000000;
   }

}

console.log("Ganador medalla de oro: " +podio[0].toUpperCase());
console.log("Ganador medalla de plata: "+ podio[1].toLowerCase())
console.log("Ganador medalla de bronce: "+ podio[2].charAt(0)+podio[2].slice(1));


let consolidado = {

   Participante: corredores.nombres,
   Promedios: corredores.promedio,
   Podio: podio,
   Orden: varAux
};
console.table(consolidado);