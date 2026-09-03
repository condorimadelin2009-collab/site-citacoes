# 📜 API de Citações Aleatórias

Uma API simples que fornece **citações aleatórias** para serem utilizadas em sites, aplicativos e projetos de programação.

## 🚀 Sobre o projeto

Esta API foi criada para disponibilizar citações de forma rápida e simples através de requisições HTTP.

A cada requisição, a API pode retornar uma citação aleatória contendo o **texto da citação** e o **autor**.

## 🛠️ Tecnologias utilizadas

* HTML
* CSS
* JavaScript
* API REST
* JSON

## 📌 Como utilizar

Faça uma requisição `GET` para o endpoint da API:

```http
GET /api/citacao
```

### Exemplo de resposta

```json
{
  "citacao": "Acredite que você pode, assim você já está no meio do caminho.",
  "autor": "Theodore Roosevelt"
}
```

## 🔀 Citação aleatória

A cada nova requisição, uma citação diferente pode ser retornada.

Exemplo:

```http
GET /api/citacao
```

Resposta:

```json
{
  "citacao": "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "autor": "Robert Collier"
}
```

## 💻 Exemplo em JavaScript

```javascript
fetch('/api/citacao')
    .then(response => response.json())
    .then(data => {
        console.log(data.citacao);
        console.log(data.autor);
    })
    .catch(error => {
        console.error('Erro ao buscar citação:', error);
    });
```

## 📂 Estrutura do projeto

```text
api-citacoes/
│
├── index.html
├── style.css
├── script.js
├── server.js
└── README.md
```

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma API simples para praticar:

* Requisições HTTP
* APIs REST
* JSON
* JavaScript
* Integração entre frontend e backend

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e aprendizado em desenvolvimento de sistemas.

## 📄 Licença

Este projeto é destinado a fins educacionais.
