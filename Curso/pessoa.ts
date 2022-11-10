export default class Pessoa {
  constructor(n: string, i: number) {
    this.idade = i;
    this.nome = n;
  }

  nome: string;
  idade: number;
}

let pessoa1 = new Pessoa("Gustavo", 20);
let pessoa2 = new Pessoa("Pedro", 32);

pessoa1.nome = "Gustavo";
pessoa1.idade = 20;

console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(`Nome: ${pessoa2.nome}, Idade: ${pessoa2.idade}`);
console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}`);

if (pessoa1.idade > pessoa2.idade) {
  console.log(pessoa1.idade);
} else {
  console.log(pessoa2.idade);
}
