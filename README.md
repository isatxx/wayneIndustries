# Sistema de Gerenciamento de Recursos

## Descrição do Projeto

O Sistema de Gerenciamento de Recursos é uma aplicação web desenvolvida com HTML, CSS e JavaScript, utilizando Node.js e Express para o backend. O sistema permite que usuários com diferentes papéis (gerente, administrador e funcionário) gerenciem recursos como equipamentos e dispositivos de segurança.

## Tecnologias Utilizadas

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express
  - Express-session
  - Body-parser

## Estrutura do Projeto

O projeto é dividido em três partes principais:

- **Views:**
  - **Login:** Interface de autenticação do usuário.
  - **Dashboard:** Painel de gerenciamento de recursos.

- **Servidor:**
  - Configuração do servidor Express.
  - Rotas para autenticação e gerenciamento de recursos.

## Funcionalidades

- **Autenticação de Usuário:**
  - Os usuários podem se autenticar usando um nome de usuário e senha.
  - O sistema verifica as credenciais e mantém a sessão do usuário.

- **Gerenciamento de Recursos:**
  - Usuários autenticados com o papel de "administrador" podem adicionar novos recursos ao sistema.
  - Recursos incluem título, quantidade e categoria.
  - Todos os usuários podem visualizar a lista de recursos disponíveis.

- **Logout:**
  - Usuários podem encerrar a sessão, que é devidamente tratada pelo servidor.

## Possíveis Logins

| Nome                | Senha     | Papel         |
|---------------------|-----------|---------------|
| Bruce Wayne         | batman    | Gerente       |
| Lucius Fox          | 123456    | Administrador  |
| Alfred Pennyworth   | mordomo   | Funcionário   |

## Rotas da API

- **POST /**: Autentica o usuário.
- **POST /logout**: Finaliza a sessão do usuário.
- **GET /resources**: Retorna a lista de recursos.
- **POST /resources**: Adiciona um novo recurso (apenas para administradores).

## Instruções para Execução

1. **Pré-requisitos:**
   - Node.js e npm instalados no sistema.

2. **Instalação:**
   - Clone o repositório ou baixe os arquivos do projeto.
   - Navegue até a pasta do projeto pelo terminal.
   - Execute o comando:
     ```bash
     npm install
     ```

3. **Executar o Servidor:**
   - No terminal, execute:
     ```bash
     npm start
     ```
   - O servidor estará rodando na porta 3000.

4. **Acessar a Aplicação:**
   - Abra o navegador e vá até `http://localhost:3000`.

## Considerações Finais

- O sistema foi projetado com foco na simplicidade e na clareza.
- Futuras melhorias podem incluir a implementação de um sistema de banco de dados para armazenamento persistente de usuários e recursos, além de funcionalidades avançadas de gerenciamento.

## Licença

Este projeto está licenciado sob a MIT License.
