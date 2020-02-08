## Basic

### Set username (contract)

Prize: 5 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Basic.setUserName(username, secret, secondSecret);
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

Prize: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Basic.lockAccount(height, amount, secret);
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
const { data } = connection.contract.Basic.unlockAccount(secret);
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

Prize: 100 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Basic.registerDelegate(secret);
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

Prize: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Basic.send(
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

Prize: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Basic.vote(keyList, secret, secondSecret);
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| keyList      | Array  | Y        | public key list to be voted |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Unvote for a list of keys (contract)

Prize: 0.1 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Basic.unvote(keyList, secret, secondSecret);
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| keyList      | Array  | Y        | public key list to be voted |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |



## User Defined Asset UIA

### Register asset (contract)

Prize: 500 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Uia.registerAsset(
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
| maximum      | string | Y        | maximum number of the currency     |
| precision    | number | Y        | precision of the currency          |
| secret       | string | Y        | gny account password               |
| secondSecret | string | N        | gny account second password        |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Register as an issuer (contract)

Prize: 100 GNY

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const { data } = connection.contract.Uia.registerIssuer(name, desc, secret, secondSecret);
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
