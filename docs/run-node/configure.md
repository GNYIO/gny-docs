# Configure

::: tip
In order to connect to the **`testnet`** be sure to use one of the following configurations:

- `--peers="/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5"`
- `GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5`
  ::::

<br/>

## Start Forging

::: warning
Do not reuse your delegate secret on different GNY Blockchain networks (`localnet`, `testnet`, `mainnet`). Otherwise you will make yourself vulnerable to [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).
:::

::: tip
In order to start forging you need to first register as delegate. Be sure to checkout our [Guides](../guide/) on how to register as `delegate` and how to create a random `secret`.
:::

In order to start forging please pass a secret or multiple secrets (comma separated) to the GNY Blockchain. This option is optional.

Change CLI arguments:

```diff
- npm run start
+ npm run start -- --secret="chief next globe deny try danger trust wet spoil away eight task"
```

Change your `docker-compose.yml`:

```diff
services:
  # db1 service omitted
  node1:
    # other keys omitted
    environment:
+     - GNY_SECRET=chief next globe deny try danger trust wet spoil away eight task
```

<br/>

## Configure Public IP

::: warning
The **publicIp** option is mandatory on the `testnet` and on the `mainnet`. If you don't set it then the node will automatically use its privateIp which which will make the p2p communication with other nodes not work.
::::

The GNY Blockchain uses [libp2p](https://github.com/libp2p/js-libp2p/) for p2p communication. Libp2p itself communicates with the help of [multiaddr](https://www.npmjs.com/package/multiaddr). The standard procedure is that the GNY Blockchain adds a multiaddrs that listens on `0.0.0.0` and the libp2p automatically binds to the privateIP address. As pointed out above this will not work on the `testnet` and on the `mainnet`

```js
const multi = `/ip4/0.0.0.0/tcp/4097`;
peerInfo.multiaddrs.add(multi);
```

This results in a multiaddr array where for example `10.0.3.4` is used as the private IP address

```js
{
  multiaddr: [
    "/ip4/10.0.3.4/tcp/4097/ipfs/QmQbVdde9AeXSP3FoLyVNd3Fi3BjCe2tFyJV43bNWEBYSA"
  ];
}
```

The problem shows itself in the communication with other nodes. Because our node announces a private IP address which other nodes can't communicate with. Therefore we have to pass the **publicIP** to the GNY node.

The `public ip` can be passed to the GNY node:

- as argument: `--publicIP=20.188.42.0`
- as environment variable: `GNY_PUBLIC_IP=20.188.42.0`

Pass `public ip` as argument:

```diff
- npm run start
+ npm run start -- --publicIP="20.188.42.0"
```

Pass `public ip` as environment variable:

```diff
services:
  # db1 service omitted
  node1:
    # other keys omitted
    environment:
+	  - GNY_PUBLIC_IP=20.188.42.0
```

::: tip
After that the nodes own `public ip` configuration should be checked with the HTTP API endpoint `/api/peers/info`. This endpoint displays information about the own node!
:::

It is important that the `multiaddrs` array displays only one entry with the correct **publicIp**

![multiaddrs_publicIp_config](../.vuepress/public/multiaddrs_publicIp_config.png)

![multiaddrs_publicIp_api_peers_info](../.vuepress/public/multiaddrs_publicIp_api_peers_info.png)

<br>

## Configure P2P Secret

::: tip
Checkout our [Guides](../guide/) on how to create a `p2p secret`
:::

The `p2p secret` keeps the connection between peers secure. This is option is **mandatory**.

The `p2p secret` can be passed to the GNY node:

- as argument: `--privateP2PKey="CAASqQkwggSlAgEA..."`
- as environment variable: `GNY_P2P_SECRET="CAASqQkwggSlAgEA..."`

Pass `p2p secret` as argument:

```diff
- npm run start
+ npm run start -- --privateP2PKey="CAASqQkwggSlAgEA..."
```

Pass `p2p secret` as environment variable:

```diff
services:
  # db1 service omitted
  node1:
    # other keys omitted
    environment:
+	  - GNY_P2P_SECRET="CAASqQkwggSlAgEA..."
```

<br/>

## Configure P2P Peers

The `p2p peers` option says to which peer(s) (comma separated) we should connect in the network. This option is optional

The `p2p peers` option can be passed to the GNY node:

- as argument: `--peers="/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5"`
- as environment variable: `GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5`

Pass `p2p peers` as argument:

```diff
- npm run start
+ npm run start -- --peers="/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5"
```

Pass `p2p peers` as environment variable:

```diff
services:
  # db1 service omitted
  node1:
    # other keys omitted
    environment:
+	  - GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/ipfs/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5
```

<br/>

## All Environment Variable Options

## All available Options

```
Options:
  -V, --version          output the version number
  --config <path>        Config file path
  --port <port>          Listening port number
  --address <ip>         Listening host name or ip
  --genesisblock <path>  Genesisblock path
  --peers [peers...]     Peers list
  --log <level>          Log level: log|trace|debug|info|warn|error|fatal
  --base <dir>           Base directory
  --ormConfig <file>     ormconfig.json file
  --privateP2PKey <key>  Private P2P Key (base64 encoded) - overrides p2p_key.json file
  --secret [secret...]   comma separated secrets
  --publicIP <ip>        Public IP of own server, default private IP
  --network <network>    Must be: localnet | testnet | mainnet
  -h, --help             output usage information

Environment Variables:
  GNY_NETWORK=<network>    Must be: localnet | testnet | mainnet
  GNY_PORT=<port>          Listening port number
  GNY_LOG_LEVEL=<level>    log|trace|debug|info|warn|error|fatal
  GNY_P2P_SECRET=<key>     Private P2P Key (base64 encoded) - overrides p2p_key.json file
  GNY_SECRET=[secret...]   comma separated secrets
  GNY_PUBLIC_IP=<ip>       Public IP of own server, default private IP
  GNY_P2P_PEERS=[peers...] comma separated peers
  GNY_ADDRESS=<address>    Listening host name or ip
```
