# Testes de API no Postman usando Cypress 💻

Este projeto contém testes automatizados para a API Restful usando o framework Cypress.

## Pré-requisitos 🛠️

- Visual Studio Code
- Node.js
- Cypress
- Postman

Ao realizar o clone do projeto, executar npm i em seu terminal para instalar as dependências do projeto.

## Cenários de teste 📋

### Buscar dispositivos 🔍

- **Buscar todos os dispositivos:**
  - Verificar se todos os dispositivos têm as propriedades 'id', 'name' e 'data'.
  - Verificar se o status da resposta é [Verde] 200.

- **Buscar dispositivos por id:**
  - Verificar se o dispositivo retornado possui o nome correto.
  - Verificar se o status da resposta é [Verde] 200.

- **Buscar dispositivos por id inválido:**
  - Verificar se o status da resposta é [Vermelho] 404.
  - Verificar se a mensagem de erro informa que o objeto não existe.

### Cadastrar dispositivos ➕

- **Cadastrar dispositivos com sucesso:**
  - Verificar se o dispositivo foi cadastrado com sucesso.
  - Verificar se o nome do dispositivo é correto.
  - Verificar se o status da resposta é [Verde] 200.

### Atualizar objeto 🔄

- **Atualizar objeto por id:**
  - Verificar se o objeto foi atualizado com sucesso.
  - Verificar se o nome do objeto foi atualizado corretamente.
  - Verificar se o status da resposta é [Verde] 200.

- **Atualizar objeto por id inválido:**
  - Verificar se o status da resposta é ![Vermelho] 404.
  - Verificar se a mensagem de erro informa que o objeto não existe.

### Deletar objeto
  - Verificar se o 'id' está correto.
  - Verificar se a mensagem deletou o objeto.
  - Verificar se o status da resposta é [Verde] 200.

## Elaborado por

Este projeto foi desenvolvido 💜 por Vagner Rodolpho 👋 &nbsp;[Meu LinkedIn](https://www.linkedin.com/in/vagnerrodolpho/)

## Aprendizado

Este projeto foi desenvolvido durante o [LIVE] Bootcamp Cypress - Dia 1 - 5 PASSOS PARA AUTOMATIZAR API COM CYPRESS ([Assista aqui](https://www.youtube.com/watch?v=aeisYRv1WCg)).

## API Utilizada

Os testes foram realizados utilizando a API disponível em [restful-api.dev](https://restful-api.dev/).
