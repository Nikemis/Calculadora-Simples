
# Calculadora em React

Uma calculadora simples desenvolvida utilizando React. Este projeto tem como objetivo demonstrar como usar o React para criar uma aplicação interativa com manipulação de estado e eventos de clique.

## Funcionalidades

- Adição, subtração, multiplicação e divisão.
- Cálculo de porcentagens.
- Função de limpar a calculadora.
- Exibição de "Erro" ao tentar dividir por zero.

## Tecnologias

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Hooks**: Utilizado o hook `useState` para gerenciar o estado da calculadora.
- **CSS**: Estilização da aplicação.

## Instalação

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as dependências:
     ```bash 
     npm install

3. Inicie o servidor de desenvolvimento:
    ```bash 
     npm start


### Estrutura do Projeto
src/
- App.js: Componente principal da aplicação, onde a lógica da calculadora é definida.

- components/Entrada.js: Componente responsável pela exibição do número atual na tela da calculadora.

- components/Botao.js: Componente para representar cada botão da calculadora.

- styles/: Pasta contendo os arquivos de estilo para a aplicação.

### Como Usar

Clique nos números para inseri-los.
Clique nas operações (+, -, X, /, %) para realizar a operação desejada.
Clique em "C" para limpar a calculadora.
Clique em "=" para calcular o resultado da operação.
Tente dividir por zero e você verá a exibição de "Erro".

