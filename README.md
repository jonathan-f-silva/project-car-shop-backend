# Projeto Car Shop - Backend

Um backend para cadastrar veículos. Projeto feito no módulo de backend do curso de Desenvolvimento Web da Trybe.

## Stack e habilidades utilizadas

- Typescript, Node, Express, Mongoose, Mocha, Sinon
- POO, SOLID, CRUD


## Rodando via Docker

Construa a imagem

```bash
  npm run docker:build
```

Rode a imagem em modo de desenvolvimento

```bash
  npm run docker:run
```

Ou em modo de produção
```bash
  npm run docker:dev
```
## Rodando localmente

OBS: É preciso ter um servidor MongoDB rodando.

Pode iniciar um usando Docker (já instalado) com o comando:

```bash
  docker run -d --name=mongodb -p 27017:27017 mongo
```

Configure a variável de ambiente `MONGO_URI` com a URI do servidor mongoDB

```bash
  export MONGO_URI='mongodb://localhost:2701/CarShop'
```

Clone o projeto

```bash
  git clone https://github.com/jonathan-f-silva/project-car-shop-backend.git
```

Entre no diretório do projeto

```bash
  cd project-car-shop-backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Acesse a API pelo endereço http://localhost:3001


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

## [Documentação da API](API.md)


## Referência

 - [Trybe](https://betrybe.com/)

