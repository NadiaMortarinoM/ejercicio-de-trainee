
class Vehiculos {
    constructor (marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;

    }


}
class Auto extends Vehiculos {
    constructor (marca, modelo, puertas, precio){
        super (marca, modelo, precio);
        this.puertas = puertas;
    }
}
class Motos extends Vehiculos {

    constructor (marca, modelo, cilindrada, precio ){
        
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;

    }   

}

//Lista de Vehiculos en venta: 
var vehiculos = [
    {vehicle: new Auto('Peugeot', 206, 4, 200000.00)},
    {vehicle: new Auto('Peugeot', 208, 5, 250000.00)},
    {vehicle: new Motos('Honda', 'Titan','125cc', 60000.00)},
    {vehicle: new Motos('Yamaha', 'YBR' ,'160cc', 80500.50)}
];

vehiculos.map(cars => {
    if (cars.vehicle instanceof Auto) {
        console.log("Marca: " + cars.vehicle.marca, ' // ', "Modelo: " +  cars.vehicle.modelo, ' // ', "Puertas: " + cars.vehicle.puertas, ' // ', "Precio: " + toCurrencyString(cars.vehicle.precio));
    } else {
        console.log("Marca: " + cars.vehicle.marca, ' // ', "Modelo: " + cars.vehicle.modelo, ' // ', "Cilindrada: " + cars.vehicle.cilindrada, ' // ', "Precio: " + toCurrencyString(cars.vehicle.precio));
    }
    
    
});
function toCurrencyString(value) {
    return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

console.log("========================");

//vehiculo más caro, más barato y marca que comienza con la Y:

var vehiculoMasCaro = vehiculos.filter(function(auto) {
    if(auto.vehicle.precio >= 250000.00){
        console.log("Vehiculo más caro: " + auto.vehicle.marca, auto.vehicle.modelo);
    }
});

var vehiculoMasBarato = vehiculos.filter(function(auto) {
    if(auto.vehicle.precio <= 60000.00){
        console.log("Vehiculo más barato: " + auto.vehicle.marca, auto.vehicle.modelo);
    }
});

var vehiculoconH = vehiculos.filter(function(moto) {
    if(moto.vehicle.marca.toLowerCase().includes('y')){
        var value = toCurrencyString(moto.vehicle.precio);
        console.log("Vehiculo que contiene en su modelo la letra Y: " + moto.vehicle.marca, moto.vehicle.modelo, value);
    }
});

console.log("========================");

//vehiculos ordenados de mayor a menor:

console.log("Vehiculos ordenados por precio de mayor a menor: ");
vehiculos.sort(function(a,b) {
    if (a.vehicle.precio < b.vehicle.precio) {
        return 1
    } else {
        return -1
    }
}); 

vehiculos.map(item => {
    console.log(item.vehicle.marca, item.vehicle.modelo);
});





    
