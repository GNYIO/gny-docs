## Exchange Endpoints

The following endpoints are exclusivly for Exchanges. This endpoints are not reachable on default - they need to be enabled first.

### Enable Exchange Endpoints

To enable the Exchange endpoints under `/api/exchange` start the GNY Blockchain with the environment variable `EXCHANGE_API=true`

Via command line:

```bash
EXCHANGE_API=true npm run start
```

Adapt your `docker-compose.yml` file and pass the environment variable to the GNY Blockchain:

```yml
version: "3.3"
services:
  db1: # service omitted
  node1:
    build: .
    container_name: "node1"
    image: gny-experiment
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 1; done; node packages/main/dist/src/app --ormConfig "ormconfig.integration.json"'
    environment:
      - NODE_ENV="production"
      - EXCHANGE_API=true # this activates the /api/exchange endpoints
    ports:
      - "4096:4096"
      - "4097:4097"
    depends_on:
      - db1
```
