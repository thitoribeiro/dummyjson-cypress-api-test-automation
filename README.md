# dummyjson-cypress-api-test-automation

Este projeto é uma solução de automação de testes de API desenvolvida para validar os endpoints da API pública [dummyjson.com](https://dummyjson.com/). Ele utiliza o Cypress para a execução dos testes, Docker para isolamento do ambiente e o Mochawesome Reporter para geração de relatórios detalhados e visuais.

## Tecnologias Utilizadas

*   **Cypress:** Framework de testes end-to-end e de API.
*   **TypeScript:** Linguagem de programação para tipagem estática.
*   **Node.js e npm:** Ambiente de execução e gerenciador de pacotes.
*   **Docker e Docker Compose:** Para criar um ambiente de execução de testes isolado e consistente.
*   **Mochawesome Reporter:** Gerador de relatórios HTML interativos e visuais.
*   **Cypress Terminal Report:** Plugin para exibir logs detalhados no terminal durante a execução dos testes.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   **Node.js e npm:** [Download e Instalação](https://nodejs.org/en/download/)
*   **Docker e Docker Compose:** [Download e Instalação](https://docs.docker.com/get-docker/)

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/thitoribeiro/dummyjson-cypress-api-test-automation.git
    cd dummyjson-cypress-api-test-automation
    ```

2.  **Instale as dependências do npm:**
    ```bash
    npm install
    ```

3.  **Construa a imagem Docker:**
    ```bash
    docker-compose build
    ```

## Como Executar os Testes

Todos os testes são executados dentro de um contêiner Docker para garantir um ambiente consistente.

### Executar Todos os Testes

Para executar todos os testes do projeto e gerar um relatório HTML, utilize o seguinte comando:

```bash
npm run test:docker:report
```

Este comando irá:

1.  Construir e iniciar o contêiner Docker (`test:docker`).
2.  Executar todos os testes configurados no `cypress.config.ts`.
3.  Gerar o relatório Mochawesome na pasta `mochawesome-report/`.
4.  Abrir automaticamente o relatório HTML no seu navegador padrão (`report:open`).

### Executar Testes Específicos

Você pode executar testes individuais ou grupos de testes específicos utilizando os scripts definidos no `package.json`. Cada script executa um ou mais arquivos de especificação e abre o relatório automaticamente.

**Exemplos:**

*   **Executar o teste de adição de produto:**
    ```bash
    npm run test:products:add
    ```

*   **Executar o teste de atualização de produto:**
    ```bash
    npm run test:products:update
    ```

*   **Executar o teste de exclusão de produto:**
    ```bash
    npm run test:products:delete
    ```

*   **Executar o teste de adição de produto com dados inválidos:**
    ```bash
    npm run test:products:add-invalid
    ```

*   **Executar o teste de exclusão de produto não existente:**
    ```bash
    npm run test:products:delete-non-existent
    ```

*   **Executar todos os testes de listagem de produtos (GET):**
    ```bash
    npm run test:products:get
    ```

*   **Executar todos os testes de ordenação de produtos:**
    ```bash
    npm run test:products:sort
    ```

*   **Executar o teste de listagem de todas as categorias de produtos:**
    ```bash
    npm run test:products:categories
    ```

*   **Executar o teste de listagem de nomes de categorias:**
    ```bash
    npm run test:products:category-list
    ```

### Abrir o Relatório Manualmente

Se você executou os testes e o relatório não abriu automaticamente, ou se deseja abri-lo novamente, utilize o comando:

```bash
npm run report:open
```

## Estrutura do Projeto

*   `cypress/integration/api/products/`: Contém os arquivos de especificação dos testes de API.
*   `cypress/services/`: Contém as funções de serviço que encapsulam as requisições HTTP para a API.
*   `cypress.config.ts`: Configurações do Cypress, incluindo padrões de arquivos de teste, `baseUrl` e plugins.
*   `docker-compose.yml`: Define o serviço Docker para a execução dos testes.
*   `Dockerfile`: Imagem Docker para o ambiente de testes.
*   `mochawesome-report/`: Diretório onde os relatórios HTML e JSON são gerados.
*   `package.json`: Gerenciador de dependências e scripts de execução.
