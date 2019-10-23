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
  response = await accountApi.generateAccount();
  console.log(response);
};

(async () => {
  await generateAccount();
})();
```

## Connection configuration

```typescript
const connection = new Connection(host, port, network);
```

### Default value

All the args of `Connection` are optional, and the default values are:

```json
{
  "host": "127.0.0.1",
  "port": 4096,
  "network": "testnet"
}
```
