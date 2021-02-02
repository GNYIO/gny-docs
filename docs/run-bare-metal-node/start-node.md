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

export GNY_P2P_PEERS=/ip4/192.248.155.206/tcp/4097/p2p/QmfJ2QhAfqWySWwQGeLmaxraVvrbJNjUENpoZixKSjuFkS

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

::: tip
For information on how to **forge Blocks** see [**configure**](./configure)
:::

<br/>
<br/>
