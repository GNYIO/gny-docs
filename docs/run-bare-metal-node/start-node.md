# Start Node

## Configuration

<ClientOnly>
  <GNYSecret>
  </GNYSecret>
</ClientOnly>

<ClientOnly>
  <P2PSecret>
  </P2PSecret>
</ClientOnly>

```bash
export GNY_PUBLIC_IP=<your ip>
export GNY_SECRET=<your secret>
export GNY_P2P_SECRET=<your p2p secret>

export GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5

export GNY_DB_PASSWORD=docker
export GNY_DB_USER=postgres2
export GNY_DB_HOST=localhost
export GNY_DB_PORT=5432
export GNY_DB_DATABASE=postgres2
```

Start your node with:

```bash
npm run start
```

::: danger Edit Configuration
In order to make the configuration work you need to edit the following properties:

|              Property              |                                 Description                                  |          Formatting tips           |
| :--------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------: |
|     `GNY_PUBLIC_IP=214.42...`      |                         replace with your public ip                          |  **don't** double quote public ip  |
|   `GNY_SECRET=health typical...`   | twelve word [BIP39](https://en.bitcoin.it/wiki/Seed_phrase) forging secret - | **don't** double quote your secret |
| `GNY_P2P_SECRET="CAASqgkwggSm..."` |            [libp2p](https://github.com/libp2p/js-libp2p/) secret             |       **double quote** value       |

See [`Configure`](./configure) for more details.
:::

::: tip
For information on how to **forge Blocks** see [**configure**](./configure)
:::

<br/>
<br/>
