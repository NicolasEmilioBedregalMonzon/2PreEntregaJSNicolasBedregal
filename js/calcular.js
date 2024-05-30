
var boton = document.getElementById("miBoton");

boton.addEventListener("click", function () {
    alert("Elija sus productos ");
    let total, n, subtotal, comida, bebida, extra;
    do {
        alert("ingrese el monto del prodcuto que va a elegir");
        comida = prompt("pollo $4500  Carne $6000 pescado $7500  vegetariano $4500"); 
        bebida = prompt("cocaCola $500  Sprite $359 Pepsi $450  Agua $100");
        extra  = prompt("salsas $1500  Pan frances $500 Pan intengral $600  Asalsa de soja $300");
        subtotal = parseInt(comida) + parseInt(bebida) +parseInt(extra);
        n = prompt("Desea sumar otra vianda? 0-no 1- si");
        if(n == 1){
            total = total + subtotal;
        } else {
            total = subtotal;
            subtotal = 0;
        }

    } while (n != 0);
    alert("El total de la/las viendas es de:"+total);
   
});
var boton = document.getElementById("miBoton1");
boton.addEventListener("click", function () {
    alert("Elija sus productos ");
    let n, subtotal, comida, bebida, extra;
    do {
        alert("Ingrese el monto del prodcuto que va a elegir");
        comida = prompt("pollo $4500  Carne $6000 pescado $7500  vegetariano $4500"); 
        bebida = prompt("cocaCola $500  Sprite $359 Pepsi $450  Agua $100");
        extra  = prompt("salsas $1500  Pan frances $500 Pan intengral $600  Asalsa de soja $300");
        subtotal = parseInt(comida) + parseInt(bebida) +parseInt(extra);
        alert(subtotal);
        n = prompt("desea sumar otra vianda? 0-no 1- si");
    } while (n != 0);
    alert("El total de la/las viendas es de:" + subtotal);
    let dias = prompt("Por cuantos dias desea comprar esta vianda?");
    alert("El precio de las viandas por " + dias + " dias es de: $" + (dias * subtotal));
});