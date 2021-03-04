[[toc]]

# Configure

::::: tip

Connect to the right network

:::: tabs

::: tab mainnet

In order to connect to the **`mainnet`** be sure to use one of the following configurations:

> `GNY_P2P_PEERS=/ip4/78.141.235.22/tcp/4097/p2p/QmdEmHir6AxNzHrhWBJ3PfUddRBabmmEGmdSaCenrKMCUh`

:::

::: tab testnet

In order to connect to the **`testnet`** be sure to use one of the following configurations:

> `GNY_P2P_PEERS=/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs`

:::

::::

:::::

<br/>

## Start Forging

::: warning
Do not reuse your delegate secret on different GNY Blockchain networks (`localnet`, `testnet`, `mainnet`). Otherwise you will make yourself vulnerable to [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).
:::

::: tip
In order to start forging you need to first register as delegate. Be sure to checkout our [Guides](../guide/) on how to register as `delegate` and how to create a random `secret`.
:::

<ClientOnly>
  <GNYSecret>
  </GNYSecret>
</ClientOnly>

In order to start forging please pass a secret or multiple secrets (comma separated) to the GNY Blockchain. This option is optional.

```bash
# one secret example
export GNY_SECRET=enroll enroll enroll enroll enroll enroll enroll enroll enroll enroll enroll enroll

# multiple secret example
export GNY_SECRET=forum forum forum forum forum forum forum forum forum forum forum forum,enroll enroll enroll enroll enroll enroll enroll enroll enroll enroll enroll enroll
```

<br/>

## Configure Public IP

::: warning
The **publicIp** option is mandatory on the `testnet` and on the `mainnet`. If you don't set it then the node will automatically use its privateIp which which will make the p2p communication with other nodes not work.
::::

Pass `public ip` as argument:

```diff
- npm run start
+ npm run start -- --publicIP="20.188.42.0"
```

Pass `public ip` as environment variable:

```diff
+ export GNY_PUBLIC_IP=20.188.42.0
```

::: tip
After that the nodes own `public ip` configuration should be checked with the HTTP API endpoint `/api/peers/info`. This endpoint displays information about the own node!
:::

![multiaddrs_publicIp_api_peers_info](../.vuepress/public/multiaddrs_publicIp_api_peers_info.png)

<br>

## Configure Network

The option `network` sets which network the node should connect to. This option is **mandatory**.

The `network` can be passed to the GNY node:

- as argument `--network=mainnet`
- as environment variable `export GNY_NETWORK=mainnet`

:::: tabs

::: tab mainnet

```diff
+ export GNY_NETWORK=mainnet
```

:::

::: tab testnet

```diff
+	export GNY_NETWORK=testnet
```

:::

::: tab localnet

```diff
+ export GNY_NETWORK=localnet
```

:::

::::

<br/>

## Configure P2P Secret

<ClientOnly>
  <P2PSecret>
  </P2PSecret>
</ClientOnly>

The `p2p secret` keeps the connection between peers secure. This is option is **mandatory**.

The `p2p secret` can be passed to the GNY node:

- as argument: `--privateP2PKey="CAASqQkwggSlAgEA..."`
- as environment variable: `export GNY_P2P_SECRET="CAASqQkwggSlAgEA..."`

Pass `p2p secret` as argument:

```diff
- npm run start
+ npm run start -- --privateP2PKey="CAASqQkwggSlAgEA..."
```

Pass `p2p secret` as environment variable:

```bash
export GNY_P2P_SECRET=<your p2p secret>
```

<br/>

## Configure P2P Peers

The `p2p peers` option says to which peer(s) (comma separated) we should connect in the network. This option is optional

The `p2p peers` option can be passed to the GNY node:

- as argument: `--peers="/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs"`
- as environment variable: `GNY_P2P_PEERS=/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs`

:::: tabs

::: tab mainnet

Pass `p2p peers` as argument:

```diff
- npm run start
+ npm run start -- --peers="/ip4/78.141.235.22/tcp/4097/p2p/QmdEmHir6AxNzHrhWBJ3PfUddRBabmmEGmdSaCenrKMCUh"
```

Pass `p2p peers` as environment variable:

```diff
+	GNY_P2P_PEERS=/ip4/78.141.235.22/tcp/4097/p2p/QmdEmHir6AxNzHrhWBJ3PfUddRBabmmEGmdSaCenrKMCUh
```

:::

::: tab testnet

Pass `p2p peers` as argument:

```diff
- npm run start
+ npm run start -- --peers="/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs"
```

Pass `p2p peers` as environment variable:

```diff
+	GNY_P2P_PEERS=/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs
```

:::

::::

<br/>

## Configure DB Password

The `dbPassword` option sets the password for the db to connect to.

Pass `dbPassword` as environment variable:

```bash
export GNY_DB_PASSWORD=docker
```

<br/>

## Configure DB Name

The `dbDatabase` configures the database name to which the GNY Blockchain should connect to.

Pass `dbDatabase` as environment variable:

```bash
export GNY_DB_DATABASE=postgres
```

<br/>

## Configure DB User

The `dbUser` sets the database user with which the GNY Blockchain should connect to.

Pass `dbUser` as environment variable:

```bash
export GNY_DB_USER=postgres2
```

<br/>

## Configure DB Host

The `dbHost` sets the database host to which the GNY Blockchain should connect to.

Pass `dbHost` as environment variable:

```bash
export GNY_DB_HOST=db1
```

<br/>

## Configure DB Port

The `dbPort` sets the database port to which the GNY Blockchain should connect to.

Pass `dbPort` as environment variable:

```bash
export GNY_DB_Port=5432
```

<br/>

## All Environment Variable Options

## All available Options

```
Environment Variables:
  GNY_NETWORK=<network>       Must be: localnet | testnet | mainnet
  GNY_PORT=<port>             Listening port number
  GNY_LOG_LEVEL=<level>       log|trace|debug|info|warn|error|fatal
  GNY_P2P_SECRET=<key>        Private P2P Key (base64 encoded) - overrides p2p_key.json file
  GNY_SECRET=[secret...]      comma separated secrets
  GNY_PUBLIC_IP=<ip>          Public IP of own server, default private IP
  GNY_P2P_PEERS=[peers...]    comma separated peers
  GNY_ADDRESS=<address>       Listening host name or ip
  GNY_DB_PASSWORD=<password>  db password
  GNY_DB_DATABASE=<database>  db name
  GNY_DB_USER=<user>          db user
  GNY_DB_HOST=<host>          db host
  GNY_DB_PORT=<port>          db port
```
