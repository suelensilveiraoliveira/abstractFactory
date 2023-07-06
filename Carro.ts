//classe abstrata não pode ser instanciada diramente, mas pode ser herdada/extendida
abstract class Carro {
    nome:string;
    cor:string;
    constructor (n:string,c:string){
        this.nome = n;
        this.cor = c;
    }
    
    buzina(){
        console.log("biiiiii-biii!!")
    }
}

//classe concreta
class Toyota extends Carro{
    ano:number;
    constructor (n:string,c:string,a:number){
        super(n,c)
        this.ano = a;
    }

    //metodo sobreescreve da classe extendida
    buzina(){
        console.log("beeee!!")
    }
}

//classe concreta
class Ford extends Carro{
    ano:number;
    constructor (n:string,c:string,a:number){
        super(n,c)
        this.ano = a;
    }

    //metodo sobreescreve da classe extendida
    buzina(){
        console.log("muuuu!!")
    }
}

let c1 = new Toyota ("Corolla","Prata",2022)

console.log(c1.nome)
console.log(c1.cor)
console.log(c1.ano)
console.log(c1.buzina())

let c2 = new Ford ("New Fiesta","Azul",2020)

console.log(c2.nome)
console.log(c2.cor)
console.log(c2.ano)
console.log(c2.buzina())
/*

npm install -g typescript
npm install -g ts-node

ts-node Carro.ts
*/
