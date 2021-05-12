# Start Node

::: tip Information
The GNY docker image will be pulled from dockerhub repository [gnyio/node](https://hub.docker.com/repository/docker/gnyio/node)
:::

## With Docker

Before starting the node, you need to prepare the encypted secrets file `secret.txt`, `p2psecret.txt`, the corresponding key files `secret.key` and `p2psecret.key`. All the files should be put into the folder `./secrets/`.

### Encrpt secret file (Same as P2P secret file)

```bash
# Generate key file
openssl req -x509 -nodes -days 100000 -newkey rsa:8912 -keyout secret.key -out secretcertificate.pem

# Encrypt secret file
openssl smime -encrypt -aes-256-cbc -in originalsecret.txt -out secret.txt -outform DER secretcertificate.pem
```

To get up and running you will need to create a `docker-compose.yml` file.

Create a new file `docker-compose.yml`:

```bash
touch docker-compose.yml
```

Copy the following content into your `docker-compose.yml` file and change the environment variables:

:::: tabs

::: tab mainnet

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
    image: gnyio/node:mainnet
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 0.5; done; node packages/main/dist/src/app'
    environment:
      - NODE_ENV=production
      - GNY_NETWORK=mainnet
      - GNY_LOG_LEVEL=info
      - GNY_PUBLIC_IP=<here goes your public ip address>
      - GNY_P2P_PEERS=/ip4/78.141.235.22/tcp/4097/p2p/QmdEmHir6AxNzHrhWBJ3PfUddRBabmmEGmdSaCenrKMCUh
      - GNY_DB_PASSWORD=docker
      - GNY_DB_DATABASE=postgres
      - GNY_DB_USER=postgres
      - GNY_DB_HOST=db1
      - GNY_DB_PORT=5432
    ports:
      - "4096:4096"
      - "4097:4097"
    volumes:
      - ./secrets:/usr/src/app/secrets
    depends_on:
      - db1
```

:::

::: tab testnet

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
    image: gnyio/node:testnet
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 0.5; done; node packages/main/dist/src/app'
    environment:
      - NODE_ENV=production
      - GNY_NETWORK=testnet
      - GNY_LOG_LEVEL=info
      - GNY_PUBLIC_IP=<here goes your public ip address>
      - GNY_P2P_PEERS=/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs
      - GNY_DB_PASSWORD=docker
      - GNY_DB_DATABASE=postgres
      - GNY_DB_USER=postgres
      - GNY_DB_HOST=db1
      - GNY_DB_PORT=5432
    ports:
      - "4096:4096"
      - "4097:4097"
    volumes:
      - ./secrets:/usr/src/app/secrets
    depends_on:
      - db1
```

:::

::::

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
sudo docker-compose up --detach
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
