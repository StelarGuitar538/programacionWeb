class Automovil {
    constructor(ruedas, puertas, color, velocidad) {
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.color = color;
        this.velocidad = velocidad;
    }

    aumentarVelocidad() {
        this.velocidad += 10;
    }
}