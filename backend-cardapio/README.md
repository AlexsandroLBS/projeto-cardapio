# Back-End

Este projeto utiliza Java 21 e Maven. As dependências estão listadas no arquivo `pom.xml`

[Tutorial Rápido de Maven](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)

Para baixar as dependências:

```
mvn dependency:resolve
```

Para rodar a aplicação:

```
mvn spring-boot:run
```

Se tudo ocorrer sem erros, a aplicação deve estar sendo servida no endereço `localhost:42069` (nice).

Um dos pacotes instalados é o Lombok, que reduz a quantidade de código boilerplate a ser gerado utilizando anotações. Ele elimina necessidade de gerar _getters_ e _setters_ para atributos privados, por exemplo.

[Documentação do Lombok](https://projectlombok.org/api/lombok/package-summary)

Mais links disponíveis no arquivo [HELP.md](./HELP.md)
