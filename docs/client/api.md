# API

## Account API

### Basic usage

``` typesript
import { Connection } fron '@gny/clinet';

const connection = new Connection();
const accountApi = connection.api('Account');

```

### Open account

```typescript
cosnt { data } = await accountApi.openAccount( secretOrPublicKey);

```

| Name                 | Type   | Required | Description                                                       |
| -------------------- | ------ | -------- | ----------------------------------------------------------------- |
| secretOrPublicKey    | string | N        | gny account password (not recommended) or publicKey (recommended) |

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
    "balance":0,
    "secondPublicKey":"",
    "lockHeight":0,
    "publicKey":"bd1e78c5a10fbf1eca36b28bbb8ea85f320967659cbf1f7ff1603d0a368867b9"
    },
    "latestBlock":{
      "height":53,
      "timestamp":3471490
    },
    "version":{
      "version":"1.0.0",
      "build":"DEFAULT_BUILD_TIME",
      "net":"testnet"
    }
}
```

### Generate Account

```typescript
cosnt { data } = await accountApi.generateAccount();

```

Response Parameter Description:

| Name       | Type   | Description             |
| ---------- | ------ | ----------------------- |
| address    | string | Client's address        |
| secret     | string | gny account password    |
| privateKey | string | gny account private key |
| publicKey  | string | gny account public key  |

JSON Response Example:

```js
{
    "address": "G318FKKb7mF3M6JCUhBqYnLiha6y",
    "secret" : "carpet pudding topple genuine relax rally problem before pill gun nation method",
    "publicKey": "c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2",
    "privateKey": "c68434b960ef024b2a868118be7641be25e566f720a5eb12ff314022629ccc71575bf8f32b941b9e6ae1af82539689198327b73d77d22a98cdef2460c9257f7b"
}
```

### Get balance

```typescript
cosnt { data } = await accountApi.getBalance(address);
```

Request Parameter Description:

| Name    | Type   | Required | Description      |
| ------- | ------ | -------- | ---------------- |
| address | string | Y        | Client's address |

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| balance | integer | balance                                 |


JSON Response Example:

```js
{
  "success": true,
  "balance": 0
}
```

### Get balance by address and currency


```typescript
const { data }  = accountApi.getAddressCurrencyBalance(address, currency);
```

Request Parameter Description:

| Name     | Type   | Required | Description      |
| -------  | ------ | -------- | ---------------- |
| address  | string | Y        | Client's address |
| currency | string | Y        | currency         |

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| balance | integer | balance                                 |

JSON Response Example:

```js
{
  "success": true,
  "balance": 0
}
```

### Get the account by address

```typescript
const { data }  = accountApi.getAccountByAddress(address);
```

Request Parameter Description:

| Name    | Type   | Required | Description      |
| ------- | ------ | -------- | ---------------- |
| address | string | Y        | Client's address |

Response Parameter Description:

| Name        | Type | Description                           |
| ----------- | ---- | ------------------------------------- |
| success     | bool | whether response data can be returned |
| account     | json | account information                   |
| latestBlock | json | latest block information              |
| version     | json | version information                   |


### Get account by username

```typescript
const { data }  = accountApi.getAccountByUsername(username);
```

Request Parameter Description:

| Name     | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| username | string | Y        | Client username                    |

Response Parameter Description:

| Name        | Type | Description                           |
| ----------- | ---- | ------------------------------------- |
| success     | bool | whether response data can be returned |
| account     | json | account information                   |
| latestBlock | json | latest block information              |
| version     | json | version information                   |

### Get voted delegates

```typescript
const { data }  = accountApi.getVotedDelegates(address, username);
```

Request Parameter Description:

| Name     | Type   | Required | Description     |
| -------- | ------ | -------- | --------------- |
| address  | string | Y        | Client's address |
| username | string | Y        | Client username|

Response Parameter Description:

| Name      | Type  | Description                                                                            |
| --------- | ----- | -------------------------------------------------------------------------------------- |
| success   | bool  | true: response data return successfully                                                |
| delegates | Array | A list that contains detail information of those delegates who have already been voted |

JSON Response Example:

```js
{
	"success": true,
	"delegates": [{
		"username": "wgl_002",
		"address": "GJX8DYKb7mF3M6JCUhBqYnLiha6y",
		"publicKey": "ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7",
		"vote": 9901985415600500,
		"producedblocks": 1373,
		"missedblocks": 6,
		"rate": 1,
		"approval": "98.54",
		"productivity": "99.56"
	},
	{
		"username": "wgl_003",
		"address": "G318FKKb7mF3M6JCUhBqYnLiha6y",
		"publicKey": "c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2",
		"vote": 9891995435600500,
		"producedblocks": 1371,
		"missedblocks": 8,
		"rate": 2,
		"approval": "98.44",
		"productivity": "99.41"
	},
	{
		"username": "wgl_001",
		"address": "1869971419039689816",
		"publicKey": "c547df2dde6cbb4508aabcb5970d8f9132e5a1d1c422632da6bc20bf1df165b8",
		"vote": 32401577128413,
		"producedblocks": 969,
		"missedblocks": 8,
		"rate": 102,
		"approval": "0.32",
		"productivity": 0
	}]
}
```



### Count the number of accounts

```typescript
const { data }  = accountApi.countAccounts();
```

Response Parameter Description:

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| success   | bool   | true: response data return successfully |
| count     | number | the number of accounts                  |


### Get publicKey

```typescript
const { data }  = accountApi.getPublicKey(address);
```

Request Parameter Description:

| Name    | Type   | Required | Description                        |
| ------- | ------ | -------- | ---------------------------------- |
| address | string | Y        | Client's address, minimum length:1 |

Response Parameter Description:

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| success   | bool   | true: response data return successfully |
| publicKey | string | public key                              |


### Generate publicKey

```typescript
const { data }  = accountApi.generatePublicKey(secret);
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


### Set username

```typescript
const { data }  = accountApi.setUserName(username, secret, secondSecret);
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


### Lock account

```typescript
const { data }  = accountApi.lockAccount(height, amount, secret);
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
const { data }  = accountApi.unlockAccount(secret);
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


