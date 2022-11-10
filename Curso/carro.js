"use strict";
class Carro {
    constructor(n, c, a, v) {
        this.nome = n;
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }
    // getters e setters
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getInfo() {
        console.log(`${this.nome},${this.cor},${this.ano},${this.valor}`);
    }
}
let c = new Carro("Celta", "Preto", 2010, 30000);
c.setValor(50000);
// console.log(c.getValor());
c.getInfo();
