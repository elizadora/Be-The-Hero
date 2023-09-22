# Be The Hero

Projeto desenvolvido durante a Semana Omnistack 11.0 da Rocketseat. O projeto consiste em uma aplicação web com o objetivo de conectar pessoas que desejam ajudar ONGs. Nesse projeto as ONGs podem cadastrar casos e as pessoas podem entrar em contato com elas para ajudar.

Foram utilizadas como tecnologias principais: Node.js e React para o desenvolvimento do backend e frontend respectivamente. Para o banco de dados foi utilizado o SQLite. Além de outras tecnologias como o Express, Knex, Axios, entre outras.

A interface apresenta um design minimalista e é reponsiva para as demais telas.

### Tela de logon

![Tela de logon](/images/logon.png)

## Funcionalidades

- Cadastro de ONGs
- Cadastro de casos
- Listagem de casos
- Exclusão de casos

Abaixo estão algumas imagens da aplicação web.

### Tela de cadastro de ONGs

![Tela de cadastro de ONGs](/images/register.png)

Nessa tela é possível cadastrar uma nova ONG e obter o ID de acesso para a aplicação.

### Tela de listagem de casos

![Tela de listagem de casos](/images/profile.png)

Após realizar o logon é possível visualizar os casos cadastrados pela ONG e excluir os casos que já foram resolvidos. Além disso, é possível acessar a página de cadastro de casos.

### Tela de cadastro de casos

![Tela de cadastro de casos](/images/newincident.png)

Nessa tela é possível cadastrar um novo caso para a ONG. Após o cadastro o caso será exibido na página de listagem de casos.

## Instalação

Para instalar o projeto basta clonar o repositório e executar o comando `npm install` nas pastas backend e frontend. Após isso basta executar o comando `npm start` nas duas pastas para iniciar o servidor e a aplicação web.
