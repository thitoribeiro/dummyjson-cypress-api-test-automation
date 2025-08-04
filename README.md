# dummyjson-cypress-api-test-automation

This project is an API test automation solution developed to validate the endpoints of the public API [dummyjson.com](https://dummyjson.com/). It uses Cypress for test execution, Docker for environment isolation, and Mochawesome Reporter for generating detailed and visual reports.

## Technologies Used

*   **Cypress:** End-to-end and API testing framework.
*   **TypeScript:** Programming language for static typing.
*   **Node.js and npm:** Runtime environment and package manager.
*   **Docker and Docker Compose:** To create an isolated and consistent test execution environment.
*   **Mochawesome Reporter:** Generator for interactive and visual HTML reports.
*   **Cypress Terminal Report:** Plugin to display detailed logs in the terminal during test execution.

## Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

*   **Node.js and npm:** [Download and Installation](https://nodejs.org/en/download/)
*   **Docker and Docker Compose:** [Download and Installation](https://docs.docker.com/get-docker/)

## Installation

Follow the steps below to set up the project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/thitoribeiro/dummyjson-cypress-api-test-automation.git
    cd dummyjson-cypress-api-test-automation
    ```

2.  **Install npm dependencies:**
    ```bash
    npm install
    ```

3.  **Build the Docker image:**
    ```bash
    docker-compose build
    ```

## How to Run Tests

All tests are executed within a Docker container to ensure a consistent environment.

### Run All Tests

To run all project tests and generate an HTML report, use the following command:

```bash
npm run test:docker:report
```

This command will:

1.  Build and start the Docker container (`test:docker`).
2.  Execute all tests configured in `cypress.config.ts`.
3.  Generate the Mochawesome report in the `mochawesome-report/` folder.
4.  Automatically open the HTML report in your default browser (`report:open`).

### Run Specific Tests

You can run individual tests or specific test groups using the scripts defined in `package.json`. Each script executes one or more spec files and automatically opens the report.

**Examples:**

*   **Run the add product test:**
    ```bash
    npm run test:products:add
    ```

*   **Run the update product test:**
    ```bash
    npm run test:products:update
    ```

*   **Run the delete product test:**
    ```bash
    npm run test:products:delete
    ```

*   **Run the add product with invalid data test:**
    ```bash
    npm run test:products:add-invalid
    ```

*   **Run the delete non-existent product test:**
    ```bash
    npm run test:products:delete-non-existent
    ```

*   **Run all product listing (GET) tests:**
    ```bash
    npm run test:products:get
    ```

*   **Run all product sorting tests:**
    ```bash
    npm run test:products:sort
    ```

*   **Run the all product categories listing test:**
    ```bash
    npm run test:products:categories
    ```

*   **Run the category names listing test:**
    ```bash
    npm run test:products:category-list
    ```

### Open Report Manually

If you ran the tests and the report did not open automatically, or if you want to open it again, use the command:

```bash
npm run report:open
```

## Project Structure

*   `cypress/integration/api/products/`: Contains the API test spec files.
*   `cypress/services/`: Contains service functions that encapsulate HTTP requests to the API.
*   `cypress.config.ts`: Cypress configurations, including test file patterns, `baseUrl`, and plugins.
*   `docker-compose.yml`: Defines the Docker service for test execution.
*   `Dockerfile`: Docker image for the test environment.
*   `mochawesome-report/`: Directory where HTML and JSON reports are generated.
*   `package.json`: Dependency manager and execution scripts.