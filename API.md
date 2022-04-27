# Documentação da API

- [Documentação da API](#documentação-da-api)
  - [Endpoint de carros `/cars`](#endpoint-de-carros-cars)
    - [Cadastra um carro](#cadastra-um-carro)
    - [Retorna todos os carros](#retorna-todos-os-carros)
    - [Retorna um carro](#retorna-um-carro)
    - [Atualiza um carro](#atualiza-um-carro)
  - [Endpoint de motos `/motorcycles`](#endpoint-de-motos-motorcycles)
    - [Cadastra um carro](#cadastra-um-carro-1)
    - [Retorna todos as motos](#retorna-todos-as-motos)
    - [Retorna uma moto](#retorna-uma-moto)
    - [Atualiza uma moto](#atualiza-uma-moto)

## Endpoint de carros `/cars`

### Cadastra um carro

```http
  POST /cars
```

| Parâmetro   | Tipo     | Descrição                                          |
| :---------- | :------- | :------------------------------------------------- |
| `model`     | `string` | **Obrigatório**. O modelo do carro                 |
| `year`      | `number` | **Obrigatório**. O ano do carro                    |
| `color`     | `string` | **Obrigatório**. A cor do carro                    |
| `buyValue`  | `number` | **Obrigatório**. O valor de compra do carro        |
| `doorsQty`  | `number` | **Obrigatório**. A quantidade de portas do carro   |
| `seatsQty`  | `number` | **Obrigatório**. A quantidade de assentos do carro |


### Retorna todos os carros

```http
  GET /cars
```


### Retorna um carro

```http
  GET /cars/${id}
```

| Parâmetro   | Tipo     | Descrição                                   |
| :---------- | :------- | :------------------------------------------ |
| `id`        | `string` | **Obrigatório**. O ID do carro              |


### Atualiza um carro

```http
  PUT /cars/:id
```

| Parâmetro   | Tipo     | Descrição                                          |
| :---------- | :------- | :------------------------------------------------- |
| `id`        | `string` | **Obrigatório**. O ID do carro                     |
| `model`     | `string` | O modelo do carro                                  |
| `year`      | `number` | O ano do carro                                     |
| `color`     | `string` | A cor do carro                                     |
| `buyValue`  | `number` | O valor de compra do carro                         |
| `doorsQty`  | `number` | A quantidade de portas do carro                    |
| `seatsQty`  | `number` | A quantidade de assentos do carro                  |


## Endpoint de motos `/motorcycles`

### Cadastra um carro

```http
  POST /motorcycles
```

| Parâmetro       | Tipo     | Descrição                                       |
| :-------------- | :------- | :---------------------------------------------- |
| `model`         | `string` | **Obrigatório**. O modelo da moto               |
| `year`          | `number` | **Obrigatório**. O ano da moto                  |
| `color`         | `string` | **Obrigatório**. A cor da moto                  |
| `buyValue`      | `number` | **Obrigatório**. O valor de compra da moto      |
| `category`      | `number` | **Obrigatório**. A categoria da moto            |
| `engineCapacity`| `number` | **Obrigatório**. As cilindradas do motor da moto|


### Retorna todos as motos

```http
  GET /motorcycles
```


### Retorna uma moto

```http
  GET /motorcycles/${id}
```

| Parâmetro   | Tipo     | Descrição                                           |
| :---------- | :------- | :-------------------------------------------------- |
| `id`        | `string` | **Obrigatório**. O ID da moto                       |


### Atualiza uma moto

```http
  PUT /motorcycles/:id
```

| Parâmetro       | Tipo     | Descrição                                       |
| :-------------- | :------- | :---------------------------------------------- |
| `id`            | `string` | **Obrigatório**. O ID da moto                   |
| `model`         | `string` | O novo modelo da moto                           |
| `year`          | `number` | O novo ano da moto                              |
| `color`         | `string` | A nova cor da moto                              |
| `buyValue`      | `number` | O novo valor de compra da moto                  |
| `category`      | `number` | A nova categoria da moto                        |
| `engineCapacity`| `number` | As novas cilindradas do motor da moto           |
