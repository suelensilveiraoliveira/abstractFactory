class Moto {
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

class Honda extends Moto{
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

class Suzuki extends Moto{
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

let m1 = new Honda ("CG 150","Prata",2022)

console.log(m1.nome)
console.log(m1.cor)
console.log(m1.ano)
console.log(m1.buzina())


let m2 = new Suzuki ("Intruder","Azul",2020)

console.log(m2.nome)
console.log(m2.cor)
console.log(m2.ano)
console.log(m2.buzina())

let m3 = new Moto ("Fazer", "Verde") //aqui a classe moto pode ser instanciada porque é uma classe concreta e não abastrata
console.log(m3.nome)
console.log (m3.cor)

/*
npm install -g typescript
npm install -g ts-node

ts-node Moto.ts
*/