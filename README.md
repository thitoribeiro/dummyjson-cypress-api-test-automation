# dummyjson-cypress-api-test-automation

This project is an API test automation solution developed to validate the endpoints of the public API [dummyjson.com](https://dummyjson.com/). It uses Cypress for test execution, Docker for environment isolation, and Mochawesome Reporter for generating detailed and visual reports.

## Technologies Used

- **Cypress**: End-to-end and API testing framework.
- **TypeScript**: Statically typed programming language.
- **Node.js and npm**: Runtime environment and package manager.
- **Docker and Docker Compose**: To create an isolated and consistent test environment.
- **Mochawesome Reporter**: Generator of interactive HTML reports.
- **Cypress Terminal Report**: Plugin that displays detailed logs in the terminal during execution.

## Prerequisites

Before starting, install the following tools:

- [Node.js and npm](https://nodejs.org/en/download/)
- [Docker and Docker Compose](https://docs.docker.com/get-docker/)

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/thitoribeiro/dummyjson-cypress-api-test-automation.git
cd dummyjson-cypress-api-test-automation
```

2. **Install project dependencies:**

```bash
npm install
```

3. **Build the Docker image:**

```bash
docker-compose build
```

## How to Run the Tests

All tests are executed inside a Docker container.

### Run All Tests

```bash
npm run test:all:docker:report
```

This command:

- Builds and runs the container (`docker-compose up --build`);
- Executes all configured tests;
- Generates an HTML report in the `mochawesome-report/` folder;
- Automatically opens the report in your browser.

### Run Specific Tests

Run individual tests using the scripts defined in `package.json`.

**Examples:**

```bash
npm run test:products:get
npm run test:products:add
npm run test:products:update
npm run test:products:delete
npm run test:products:sort
npm run test:products:categories
npm run test:products:category-list
npm run test:products:by-category
npm run test:products:add-invalid
```

### Run a single test with custom path

```bash
npm run test:docker:one -- "cypress/integration/api/products/post-add-product.spec.ts"
```

### Open the report manually

```bash
npm run report:open
```

## Project Structure

- `cypress/integration/api/products/`: Test scripts organized by endpoint.
- `cypress/services/`: Services that encapsulate HTTP requests to the API.
- `cypress.config.ts`: Cypress configuration.
- `Dockerfile`: Defines the image used to run the tests.
- `docker-compose.yml`: Orchestrates the test environment with Docker.
- `mochawesome-report/`: Report output directory.
- `package.json`: Project scripts and dependencies.