## Basic

### Set username (contract)

Price: 5 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.setUserName(username, secret, secondSecret);
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| username     | string | Y        | username                    |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Lock account (contract)

Price: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.lockAccount(height, amount, secret);
```

Request Parameter Description:

| Name   | Type   | Required | Description             |
| ------ | ------ | -------- | ----------------------- |
| height | number | Y        | the height to be locked |
| amount | number | Y        | the amount to be locked |
| secret | string | Y        | gny account password    |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Unlock account

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.unlockAccount(secret);
```

Request Parameter Description:

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| secret | string | Y        | gny account password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Register as a delegate (contract)

Price: 100 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.registerDelegate(secret);
```

Request Parameter Description:

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| secret | string | Y        | gny account password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Create a transaction (contract)

Price: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.send(
  recipient,
  amount,
  message,
  secret,
  secondeSecret
);
```

Request Parameter Description:

| Name         | Type    | Required | Description                                                                                    |
| ------------ | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| secret       | string  | Y        | GNY account password                                                                           |
| amount       | integer | Y        | amount，between 1 and 10000000000000000                                                        |
| recipientId  | string  | Y        | recipient's address, minimum:1                                                                 |
| message      | string  | N        | message with the transaction                                                                   |
| secondSecret | string  | N        | sender's second password (must fit the BIP39 standard), the length should be between 1 and 100 |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Vote for a list of keys (contract)

Price: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.vote(usernames, secret, secondSecret);
```

Request Parameter Description:

| Name         | Type     | Required | Description                 |
| ------------ | -------- | -------- | --------------------------- |
| usernames    | string[] | Y        | list of usernames           |
| secret       | string   | Y        | gny account password        |
| secondSecret | string   | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Unvote for a list of keys (contract)

Price: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Basic.unvote(usernames, secret, secondSecret);
```

Request Parameter Description:

| Name         | Type     | Required | Description                 |
| ------------ | -------- | -------- | --------------------------- |
| usernames    | string[] | Y        | list of usernames           |
| secret       | string   | Y        | gny account password        |
| secondSecret | string   | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

## User Defined Asset UIA

### Register as an issuer (contract)

Price: 100 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Uia.registerIssuer(name, desc, secret, secondSecret);
```

Request Parameter Description:

| Name         | Type   | Required | Description                        |
| ------------ | ------ | -------- | ---------------------------------- |
| name         | string | Y        | the currency name to be registered |
| desc         | string | Y        | a descripition about the currency  |
| secret       | string | Y        | gny account password               |
| secondSecret | string | N        | gny account second password        |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


### Register asset (contract)

Price: 500 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
await connection.contract.Uia.registerAsset(
  name,
  desc,
  maximum,
  precision,
  secret,
  secondSecret
);
```

Request Parameter Description:

| Name         | Type   | Required | Description                        |
| ------------ | ------ | -------- | ---------------------------------- |
| name         | string | Y        | the currency name to be registered |
| desc         | string | Y        | a descripition about the currency  |
| maximum      | string | Y        | maximum supply     |
| precision    | number | Y        | precision of the currency          |
| secret       | string | Y        | gny account password               |
| secondSecret | string | N        | gny account second password        |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


### Issue or Mint Asset (contract)

Price: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const currency = 'AAA.BBB';
const amount = String(10 * 1e8); // when precision 8
const secret = 'hole sign tray march general grape pudding apology art almost street again';

const connection = new Connection();
await connection.contract.Uia.issue(currency, amount, secret);
```

Request Parameter Description:

| Name         | Type   | Required | Description                        |
| ------------ | ------ | -------- | ---------------------------------- |
| currency | string | Y | The currency to issue. For example `AAA.BBB` |
| amount | string | Y | The amount to issue. Multiple issue contract counts are possible. For example if the maximum supply is 100 `AAA.BBB`. Then there could be multiple `issue` contract calls until the maximum supply is reached. One could `issue` 100 `AAA.BBB` at once. Or with four `issue` contract calls with 25 `AAA.BBB` each.  |
| secret | string | Y | gny account password |
| secondSecret | string | N        | gny account second password (optional)      |


Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


### Transfer Asset (contract)

Price: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const currency = 'AAA.BBB';
const amount = String(30 * 1e8); // depends upon the precision
const recipientId = 'G3pJNqwU3Lrkt5CooU66eubgTYXX';
const message = null;
const secret = 'swamp stage diesel armor genius famous horror endorse wave wisdom govern inner';

const connection = new Connection(currency, amount, recipientId, message, secret);
await connection.contract.Uia.transfer(currency, amount, recipientId, message, secret);
```

Request Parameter Description:

| Name         | Type   | Required | Description                        |
| ------------ | ------ | -------- | ---------------------------------- |
| currency | string | Y | The currency to transfer. For example to transfer the asset `AAA.BBB` or any other custom asset. GNY can't be transferred with this contract call  |
| amount | string  | Y | The amount to transfer. To calculate the correct amount to transfer one needs to consider the precision of the asset. Please remember that an asset needs to be issued first before it can be transferred. |
| message | string | N | The optional message. Pass `null` if no message should be send |
| secret | string | Y | gny account password |
| secondSecret | string | N        | gny account second password (optional)      |


Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

