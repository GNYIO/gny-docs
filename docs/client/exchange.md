## Exchange API

The following API are exclusively for Exchanges. These APIs are not reachable on default - they need to be **enabled first**. The Exchange APIs work with plain text `secrets`. This is normally not recommended for node operators, because a malicious Blockchain nodes could log users `secrets` and steal all assets.

## Enable Exchange Endpoints

::: warning IMPORTANT
To enable the Exchange APIs start the GNY Blockchain with the environment variable `EXCHANGE_API=true`
:::

Adapt your `docker-compose.yml` file and pass the environment variable to the GNY Blockchain:

```yml
version: "3.3"
services:
  # db1 service omitted
  node1:
    # other keys ommitted
    environment:
      - EXCHANGE_API=true # this activates the /api/exchange endpoints
```

### Open account

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const result = await connection.api.Exchange.openAccount(secret);
```

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| secret | string | N        | gny account password |

Response Parameter Description:

| Name    | Type | Description                 |
| ------- | ---- | --------------------------- |
| success | bool | Whether login is successful |
| account | json | Account information         |

JSON Response Example:

```js
{
  "account":{
    "address":"G4b8BhmeRFBmWAHZemKD25BmEP2G",
    "balance":"0",
    "secondPublicKey":"",
    "lockHeight":"0",
    "publicKey":"bd1e78c5a10fbf1eca36b28bbb8ea85f320967659cbf1f7ff1603d0a368867b9"
    },
    "latestBlock":{
      "height":"53",
      "timestamp":3471490
    },
    "version":{
      "version":"1.0.0",
      "build":"Tue Feb 04 2020 10:26:47 GMT+0100 (Central European Standard Time)",
      "net":"testnet"
    }
}
```

### Generate Account

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const result = await connection.api.Exchange.generateAccount();
```

Request Parameter Description: none  
Response Parameter Description:

| Name       | Type   | Description                   |
| ---------- | ------ | ----------------------------- |
| success    | bool   | Whether request is successful |
| address    | string | Client's address              |
| secret     | string | gny account password          |
| privateKey | string | gny account private key       |
| publicKey  | string | gny account public key        |

JSON Response Example:

```js
{
    "address": "G318FKKb7mF3M6JCUhBqYnLiha6y",
    "secret" : "carpet pudding topple genuine relax rally problem before pill gun nation method",
    "publicKey": "c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2",
    "privateKey": "c68434b960ef024b2a868118be7641be25e566f720a5eb12ff314022629ccc71575bf8f32b941b9e6ae1af82539689198327b73d77d22a98cdef2460c9257f7b"
}
```


### Generate publicKey

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const result = await connection.api.Exchange.generatePublicKey(secret);
```

Request Parameter Description:

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| secret | string | Y        | gny account password |

Response Parameter Description:

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| success   | bool   | true: response data return successfully |
| publicKey | string | public key                              |


JSON Response Example:

```json
{
  "success": true,
  "publicKey": "eafa6d559bf3121de489ab792dc6e5c36a5a85955f4a8bcd8508df7a43215572"
}
```
