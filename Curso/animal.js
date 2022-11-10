"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    comunicar() {
        console.log("Ola, sou metodo da classe mae");
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(t, n, i, r) {
        super(t, n, i);
        this.raca = r;
    }
    comunicar() {
        console.log("Ola, sou da classe Filha");
    }
}
class Pessoa extends Animal {
    constructor(t, n, i, c) {
        super(t, n, i);
        this.cor = c;
    }
    comunicar() {
        console.log("Ola, sou da classe Filha");
    }
}
let cachorro = new Cachorro("cachorro", "Lila", 10, "vira-lata");
cachorro.comunicar();
let PEssoa = new Pessoa("pessoa", "Gustavo", 20, "branca");
PEssoa.comunicar();
// console.log(PEssoa, cachorro);
