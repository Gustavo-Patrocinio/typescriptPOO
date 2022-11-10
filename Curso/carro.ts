class Carro {
  private nome: string;
  private cor: string;
  private ano: number;
  private valor: number;

  constructor(n: string, c: string, a: number, v: number) {
    this.nome = n;
    this.cor = c;
    this.ano = a;
    this.valor = v;
  }
  // getters e setters
  public getValor() {
    return this.valor;
  }
  public setValor(valor: number) {
    this.valor = valor;
  }
  public getInfo(){
    console.log(`${this.nome},${this.cor},${this.ano},${this.valor}`)
  }
}

let c = new Carro("Celta", "Preto", 2010, 30000);
c.setValor(50000)
// console.log(c.getValor());
c.getInfo();