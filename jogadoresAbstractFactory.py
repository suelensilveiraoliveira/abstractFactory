import csv

# Abstract Factory
class TransferenciaFactory:
    def criar_listagem(self):
        pass

    def criar_agrupamento(self):
        pass

# Concrete Factory 1
class ListagemFactory(TransferenciaFactory):
    def criar_listagem(self):
        return Listagem()

    def criar_agrupamento(self):
        return None

# Concrete Factory 2
class AgrupamentoFactory(TransferenciaFactory):
    def criar_listagem(self):
        return None

    def criar_agrupamento(self):
        return Agrupamento()

# Abstract Product
class Transferencia:
    def executar(self, jogadores):
        pass

# Concrete Product 1
class Listagem(Transferencia):
    def executar(self, jogadores):
        titulo("Lista das Maiores Transferências")

        print("\nNome do Jogador..............: Clube de Origem....: Clube Destino......: Posição....:")

        for linha in jogadores:
            print(f"{linha['Player']:30} {linha['From(Club)']:20} {linha['To(Club)']:20} {linha['Position']}")

# Concrete Product 2
class Agrupamento(Transferencia):
    def executar(self, jogadores):
        titulo("Nº de Transferências por País de Origem do Jogador")

        dicionario = {}
        for jogador in jogadores:
            num = dicionario.get(jogador["Origin"], None)
            if num == None:
                dicionario[jogador["Origin"]] = 1
            else:
                dicionario[jogador["Origin"]] = num + 1

        lista = sorted(dicionario.items(), key=lambda dic: dic[1], reverse=True)

        print("\nPaís de Origem do Jogador  Nº de Transferências")

        for (pais, num) in lista:
            print(f"{pais:30} {num}")

# Client
def carrega_dados():
    with open('football_players.csv', mode='r', encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for linha in csv_reader:
            jogadores.append(linha)

def titulo(texto, sublinhado="-"):
    print()
    print(texto)
    print(sublinhado * 40)

jogadores = []
carrega_dados()

while True:
    titulo("Estatísticas: Transferências de Jogadores")    
    print("1. Listagem dos Jogadores")
    print("2. Agrupar por País")
    print("3. Finalizar")
    opcao = int(input("Opção: "))

    if opcao == 1:
        factory = ListagemFactory()
    elif opcao == 2:
        factory = AgrupamentoFactory()
    else:
        break

    transferencia = factory.criar_listagem()
    if transferencia is not None:
        transferencia.executar(jogadores)

    transferencia = factory.criar_agrupamento()
    if transferencia is not None:
        transferencia.executar(jogadores)
