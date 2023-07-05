Padrão utilizado Abstract Factory
1. Tentar identificar utilização do padrão nas APIs das linguagens de programação conhecidas;

* Java - Biblioteca JDBC:
Na API JDBC (Java Database Connectivity), o padrão Abstract Factory é utilizado para criar objetos relacionados ao acesso a banco de dados. A classe javax.sql.DataSource é uma interface que atua como uma fábrica abstrata para criar objetos java.sql.Connection. Diversos provedores de banco de dados, como MySQL, Oracle e PostgreSQL, fornecem implementações concretas dessa interface, como com.mysql.jdbc.MySQLDataSource e oracle.jdbc.pool.OracleDataSource. Essas implementações concretas agem como fábricas que criam conexões específicas para cada tipo de banco de dados.
* .NET - Biblioteca ADO.NET:
Na biblioteca ADO.NET, o padrão Abstract Factory é utilizado para criar objetos relacionados ao acesso a dados. A classe System.Data.Common.DbProviderFactory é uma fábrica abstrata que cria objetos como conexões de banco de dados, comandos, adaptadores e outros. Diferentes provedores de bancos de dados, como SQL Server, Oracle e MySQL, fornecem implementações concretas dessa fábrica, como System.Data.SqlClient.SqlClientFactory, Oracle.ManagedDataAccess.Client.OracleClientFactory e MySql.Data.MySqlClient.MySqlClientFactory. Essas implementações concretas são responsáveis por criar objetos específicos para cada provedor de banco de dados.
* Em ambos os exemplos, o padrão Abstract Factory é utilizado para fornecer uma abstração que permite a criação de famílias de objetos relacionados, como conexões de banco de dados, comandos e adaptadores. Isso oferece flexibilidade para o desenvolvedor escolher o provedor de banco de dados desejado e permite a troca fácil de implementações sem afetar o restante do código.

2. Identificar pontos fortes e fracos do padrão escolhido;

a) Fortes

* Abstração e Flexibilidade: Permite a troca fácil de famílias de objetos sem afetar o restante do código.
* Separação de Responsabilidades: Cada fábrica concreta é responsável por criar um conjunto específico de objetos, o que facilita a manutenção do código e evita misturar funções diferentes em uma única classe.
* Consistência entre Objetos: Por exemplo, se você tem uma fábrica de carros para uma interface gráfica, todos os carros criados seguirão o mesmo estilo e comportamento, garantindo uma experiência consistente para o usuário.

b) Fracos

* Complexidade: Pode adicionar complexidade ao código, quando há muitos tipos de objetos e famílias de objetos a serem criados. 
* Dificuldade na Adição de Novos Produtos: Se você precisar adicionar novos produtos às famílias existentes, pode ser necessário modificar todas as classes concretas da fábrica.
* Duplicação de Código: Dependendo da implementação, pode haver algum código duplicado entre as classes concretas da fábrica. 
  Por exemplo, se várias fábricas compartilham a mesma lógica para criar um objeto específico, essa lógica pode precisar ser repetida em cada fábrica.

3. Conclusões

* O padrão Abstract Factory é uma ferramenta valiosa para criar famílias de objetos relacionados, fornecendo flexibilidade e abstração. Ele permite a troca fácil de famílias de objetos sem afetar o restante do sistema, promovendo a separação de responsabilidades. 
* No entanto, seu uso pode aumentar a complexidade e resultar em duplicação de código. Avaliar cuidadosamente as necessidades do projeto é essencial para determinar se o padrão Abstract Factory é adequado, equilibrando os benefícios da flexibilidade com a simplicidade e o gerenciamento da complexidade.

Nome: Suelen Oliveira e William Lopes
