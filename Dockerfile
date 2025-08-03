FROM cypress/included:12.17.4

WORKDIR /app
COPY . .

CMD ["npx", "cypress", "run"]
