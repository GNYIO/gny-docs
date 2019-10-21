# Install GNY Client

## Install by npm

```bash
npm install @gny/client
```

## Install by souce code

### Install Dependencies

Install exactly the dependencies from `package-lock.json` with `npm ci`:

```bash
npm ci
```

### Install Lerna Packages

Bootstrap all [lerna.js](https://github.com/lerna/lerna) packages with:

```bash
npm run lerna:bootstrap
```

## Usage

```typescript
import { Connection } from '@gny/client';

const connection = new Connection();
const accountApi = connection.api('Account');

const generateAccount = async () => {
  response = await accountApi..generateAccount();
  console.log(response);
};

generateAccount();

```

## Connection configuration

```typescript
const connection = new Connection(host, port, network);

```

### Default value

All the args of `Connection` are optional, and the defualt values are

```json
{
  "host": "127.0.0.1",
  "port": 4096,
  "network": "testnet"
}
```

