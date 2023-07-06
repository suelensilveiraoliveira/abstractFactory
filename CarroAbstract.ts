// Classe abstrata que define a estrutura básica de um carro
abstract class Carro {
    nome: string;
    cor: string;
    constructor(n: string, c: string) {
      this.nome = n;
      this.cor = c;
    }
    // Método abstrato para a buzina, que será implementado nas subclasses
    abstract buzina(): void;
  }
  
  // Classe concreta que herda da classe Carro (Toyota)
  class Toyota extends Carro {
    ano: number;
    constructor(n: string, c: string, a: number) {
      super(n, c);
      this.ano = a;
    }
    // Implementação da buzina específica para a Toyota
    buzina() {
      console.log("beeee!!");
    }
  }
  
  // Classe concreta que herda da classe Carro (Ford)
  class Ford extends Carro {
    ano: number;
    constructor(n: string, c: string, a: number) {
      super(n, c);
      this.ano = a;
    }
    // Implementação da buzina específica para a Ford
    buzina() {
      console.log("muuuu!!");
    }
  }
  
  // Interface que define a estrutura de uma fábrica de carros
  interface CarroFactory {
    criarCarro(nome: string, cor: string, ano: number): Carro;
  }
  
  // Fábrica concreta que cria carros Toyota
  class ToyotaFactory implements CarroFactory {
    criarCarro(nome: string, cor: string, ano: number): Carro {
      return new Toyota(nome, cor, ano);
    }
  }
  
  // Fábrica concreta que cria carros Ford
  class FordFactory implements CarroFactory {
    criarCarro(nome: string, cor: string, ano: number): Carro {
      return new Ford(nome, cor, ano);
    }
  }
  
  // Função que cria um carro usando uma fábrica específica
  function criarCarro(factory: CarroFactory, nome: string, cor: string, ano: number): Carro {
    return factory.criarCarro(nome, cor, ano);
  }
  
  // Criação das fábricas específicas
  const toyotaFactory = new ToyotaFactory();
  const fordFactory = new FordFactory();
  
  // Criação de um carro usando a fábrica ToyotaFactory
  const c1 = criarCarro(toyotaFactory, "Corolla", "Prata", 2022);
  console.log(c1.nome); // Corolla
  console.log(c1.cor); // Prata
  c1.buzina(); // beeee!!
  
  // Criação de um carro usando a fábrica FordFactory
  const c2 = criarCarro(fordFactory, "New Fiesta", "Azul", 2020);
  console.log(c2.nome); // New Fiesta
  console.log(c2.cor); // Azul
  c2.buzina(); // muuuu!!
  
