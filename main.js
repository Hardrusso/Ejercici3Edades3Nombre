var nombre1 = prompt("Ingrese el nombre de la primera persona");
var edad1 = parseInt(prompt("Ingrese la Edad de la primera persona"));
while (edad1 < 0 || edad1 > 100 || isNaN(edad1)) {
    alert("El valor ingresado no corresponde a la edad");
    edad1 = parseFloat(prompt("Ingrese la Edad de la primera persona en un rango de 1 a 100"));
}

var nombre2 = prompt("Ingrese el nombre de la segunda persona");
var edad2 = parseInt(prompt("Ingrese la Edad de la segunda persona"));
while (edad2 < 0 || edad2 > 100 || isNaN(edad2)) {
    alert("El valor ingresado no corresponde a la edad");
    edad1 = parseFloat(prompt("Ingrese la Edad de la segunda persona en un rango de 1 a 100"));
}

var nombre3 = prompt("Ingrese el nombre de la tercera persona");
var edad3 = parseInt(prompt("Ingrese la Edad de la tercera persona"));
while (edad3 < 0 || edad3 > 100 || isNaN(edad3)) {
    alert("El valor ingresado no corresponde a la edad");
    edad1 = parseFloat(prompt("Ingrese la Edad de la tercera persona en un rango de 1 a 100"));
}

if (edad1 > edad2 && edad1 > edad3) {
    alert("La persona con mayor edad es: " + nombre1 + " con " + edad1 + " años.");
} else if (edad2 > edad1 && edad2 > edad3) {
    alert("La persona con mayor edad es: " + nombre2 + " con " + edad2 + " años.");
} else if (edad3 > edad1 && edad3 > edad2) {
    alert("La persona con mayor edad es: " + nombre3 + " con " + edad3 + " años.");
} else {
    alert("Hay al menos dos personas con la misma edad más alta.");
}

//Analisis

document.write("La informacion suministrada es:")
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("La primera persona que ud ingreso es: "+ nombre1 + " quien tiene "+edad1+" años");
document.write("<br>");
document.write("<br>");
document.write("La segunda persona que ud ingreso es: "+ nombre2 + " quien tiene "+edad2+" años");
document.write("<br>");
document.write("<br>");
document.write("La tercera persona que ud ingreso es: "+ nombre3 + " quien tiene "+edad3+" años");
document.write("<br>");
document.write("<br>");

if (edad1 > edad2 && edad1 > edad3) {
    document.write("La persona con mayor edad es: " + nombre1 + " con " + edad1 + " años.");
} else if (edad2 > edad1 && edad2 > edad3) {
    document.write("La persona con mayor edad es: " + nombre2 + " con " + edad2 + " años.");
} else if (edad3 > edad1 && edad3 > edad2) {
    document.write("La persona con mayor edad es: " + nombre3 + " con " + edad3 + " años.");
} else {
    document.write("Hay al menos dos personas con la misma edad.");
}