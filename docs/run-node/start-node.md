# Start Node

## With Docker

To get up and running you will need to create a `docker-compose.yml` file.

Create a new file `docker-compose.yml`:

```bash
touch docker-compose.yml
```

Copy the following content into your `docker-compose.yml` file:

```yml
version: "3.3"
services:
  db1:
    image: "postgres:9.6.12"
    container_name: "db1"
    restart: always
    expose: # only internal
      - "5432"
    environment:
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
  node1:
    container_name: "node1"
    image: a1300/testnet
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 0.5; done; node packages/main/dist/src/app --ormConfig "ormconfig.integration.json"'
    environment:
      - NODE_ENV=production
      - GNY_LOG_LEVEL=log
      - GNY_PUBLIC_IP=<here goes your public ip address>
      - GNY_SECRET=<here goes your BIP39 secret(s)>
      - GNY_P2P_SECRET="<here goes your p2p secret"
      - GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5
    ports:
      - "4096:4096"
      - "4097:4097"
    depends_on:
      - db1
```

Now start both services (`db1`, `node1`) with:

```bash
sudo docker-compose up
```

::: tip
For information on how to **mine Blocks** see [**configure**](./configure)
:::

<br/>
<br/>

## Result

This will start a GNY Blockchain.

![simple node with ports](../.vuepress/public/simple-node-with-ports.png)

This node will later connect to other nodes on the network.

![simple-p2p-network](../.vuepress/public/simple-p2p-network.png)
