export default class Animal {
  tipo: string;
  nome: string;
  idade: number;

  constructor(t: string, n: string, i: number) {
    this.tipo = t;
    this.nome = n;
    this.idade = i;
  }
  public comunicar(): void {
    console.log("Ola, sou metodo da classe mae");
  }
}

class Cachorro extends Animal {
  raca: string;

  constructor(t: string, n: string, i: number, r: string) {
    super(t, n, i);
    this.raca = r;
  }
  public comunicar(): void {
    console.log("Ola, sou da classe Filha");
  }
}

class Pessoa extends Animal {
  cor: string;

  constructor(t: string, n: string, i: number, c: string) {
    super(t, n, i);
    this.cor = c;
  }
  public comunicar(): void {
    console.log("Ola, sou da classe Filha");
  }
}

let cachorro = new Cachorro("cachorro", "Lila", 10, "vira-lata");
cachorro.comunicar();

let PEssoa = new Pessoa("pessoa", "Gustavo", 20, "branca");
PEssoa.comunicar();

// console.log(PEssoa, cachorro);
