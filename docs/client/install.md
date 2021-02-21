# Install GNY Client

## Install by npm

```bash
npm install @gny/client
```

## Usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const accountApi = connection.api.Account;

const generateAccount = async () => {
  const response = await accountApi.generateAccount();
  console.log(response);
};

(async () => {
  await generateAccount();
})();
```

## Connection configuration

:::: tabs

::: tab mainnet

This is the `mainnet` configuration:

```typescript
const host = "https://mainnet.gny.io";
const port = 8096;
const network = "mainnet";
const https = true;

const connection = new Connection(host, port, network, https);
```

:::

::: tab testnet

This is the `testnet` configuration:

```typescript
const host = "https://testnet.gny.io";
const port = 4096;
const network = "testnet";
const https = true;

const connection = new Connection(host, port, network, https);
```

:::

::::

### Default value

All the args of `Connection` are optional, and the default values are:

```json
{
  "host": "127.0.0.1",
  "port": 4096,
  "network": "localnet",
  "https": false
}
```
