# Start Node

::: tip Information
The GNY docker image will be pulled from dockerhub repository [a1300/testnet](https://hub.docker.com/repository/docker/a1300/testnet)
:::

## With Docker

To get up and running you will need to create a `docker-compose.yml` file.

Create a new file `docker-compose.yml`:

```bash
touch docker-compose.yml
```

Copy the following content into your `docker-compose.yml` file and change the environment variables:

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
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 0.5; done; node packages/main/dist/src/app'
    environment:
      - NODE_ENV=production
      - GNY_LOG_LEVEL=info
      - GNY_PUBLIC_IP=<here goes your public ip address>
      - GNY_SECRET=<here goes your BIP39 secret(s)>
      - GNY_P2P_SECRET="<here goes your p2p secret"
      - GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5
      - GNY_DB_PASSWORD=docker
      - GNY_DB_DATABASE=postgres
      - GNY_DB_USER=postgres
      - GNY_DB_HOST=db1
      - GNY_DB_PORT=5432
    ports:
      - "4096:4096"
      - "4097:4097"
    depends_on:
      - db1
```

::: danger Edit docker-compose.yml file
In order to make the `docker-compose.yml` file work you need to edit the following properties:

|              Property              |                                 Description                                  |          Formatting tips           |
| :--------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------: |
|     `GNY_PUBLIC_IP=214.42...`      |                         replace with your public ip                          |  **don't** double quote public ip  |
|   `GNY_SECRET=health typical...`   | twelve word [BIP39](https://en.bitcoin.it/wiki/Seed_phrase) forging secret - | **don't** double quote your secret |
| `GNY_P2P_SECRET="CAASqgkwggSm..."` |            [libp2p](https://github.com/libp2p/js-libp2p/) secret             |       **double quote** value       |

See [`Configure`](./configure) for more details.
:::

Now start both services (`db1`, `node1`) with:

```bash
sudo docker-compose up
```

::: tip
For information on how to **forge Blocks** see [**configure**](./configure)
:::

<br/>
<br/>

## Result

This will start a GNY Blockchain.

![simple node with ports](../.vuepress/public/simple-node-with-ports.png)

This node will later connect to other nodes on the network.

![simple-p2p-network](../.vuepress/public/simple-p2p-network.png)
