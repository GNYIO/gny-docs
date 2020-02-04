# API

The `@gny/client` acts as a wrapper for all [HTTP endpoints](../http) and **signs transactions**

![](../.vuepress/public/gny-client-lifecycle.png)

## Account API

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const accountApi = connection.api.Account;
```

### Open account

```typescript
const { data } = await accountApi.openAccount(publicKey);
```

| Name      | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| publicKey | string | N        | gny account publicKey|

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


### Get balance

```typescript
const { data } = await accountApi.getBalance(address);
```

Request Parameter Description:

| Name    | Type   | Required | Description      |
| ------- | ------ | -------- | ---------------- |
| address | string | Y        | Client's address |

Response Parameter Description:

| Name     | Type    | Description                                  |
| -------- | ------- | -------------------------------------------- |
| success  | bool    | Whether request is successful                |
| count    | integer | the number of balances owned by this address |
| balances | Array   | balance list of GNY                          |

JSON Response Example:

```js
{
  "count": 1,
  "balances":  [
  {
    "gny": "400000000000"
  }
  ]
}
```

### Get balance by address and currency

```typescript
const { data } = accountApi.getAddressCurrencyBalance(address, currency);
```

Request Parameter Description:

| Name     | Type   | Required | Description      |
| -------- | ------ | -------- | ---------------- |
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
const { data } = accountApi.getAccountByAddress(address);
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
const { data } = accountApi.getAccountByUsername(username);
```

Request Parameter Description:

| Name     | Type   | Required | Description     |
| -------- | ------ | -------- | --------------- |
| username | string | Y        | Client username |

Response Parameter Description:

| Name        | Type | Description                           |
| ----------- | ---- | ------------------------------------- |
| success     | bool | whether response data can be returned |
| account     | json | account information                   |
| latestBlock | json | latest block information              |
| version     | json | version information                   |

### Get voted delegates

```typescript
const { data } = accountApi.getVotedDelegates(address, username);
```

Request Parameter Description:

| Name     | Type   | Required | Description      |
| -------- | ------ | -------- | ---------------- |
| address  | string | Y        | Client's address |
| username | string | Y        | Client username  |

Response Parameter Description:

| Name      | Type  | Description                                                                  |
| --------- | ----- | ---------------------------------------------------------------------------- |
| success   | bool  | true: response data return successfully                                      |
| delegates | Array | A list of (currently forging) delegates for which this account has voted for |

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
const { data } = accountApi.countAccounts();
```

Request Parameter Description: none  
Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| count   | number | the total number of accounts            |

### Get publicKey

```typescript
const { data } = accountApi.getPublicKey(address);
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


## Block API

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const blockApi = connection.api.Block;
```

### Get block by id

```typescript
const { data } = blockApi.getBlockById(id);
```

Request Parameter Description:

| Name | Type   | Required | Description |
| ---- | ------ | -------- | ----------- |
| id   | string | Y        | block id    |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |
| block   | json | the block detail information            |

JSON Response Example:

```js
{
  "block":{
    "version":0,
    "payloadHash":"3d2215b8d226b5a38ace219d0ab3f4d84830fd54a832dc05540e20ef81a00547",
    "timestamp":0,
    "delegate":"61ca23509390845f06ccaa43384e889074dfd0c821e4ba3894f8e62b6a31895a",
    "height":"0",
    "count":203,
    "fees":"0",
    "reward":"0",
    "signature":"d49b0d08b164c8df402dc1f24430d51126a05a9d1c4012fbdf89272ab95740454b11fd4b44dbf7c60d4757760d8015146433ae21e2e418fd0d7b3aa03adc5503",
    "id":"fed53e3ad0a1405f73122708ee53dfed2e9eccc34693d52043bdb6aec4751a8c"
  }
}
```

### Get block by height

```typescript
const { data } = blockApi.getBlockByHeight(height);
```

Request Parameter Description:

| Name   | Type   | Required | Description  |
| ------ | ------ | -------- | ------------ |
| height | string | Y        | block height |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |
| block   | json | the block detail information            |

### Get blocks

```typescript
const { data } = blockApi.getBlocks(offset, limit, orderBy, transactions);
```

Request Parameter Description:

| Name         | Type    | Required | Description                                                                                                                                              |
| ------------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit        | integer | N        | maximum number of returned records, between 0 and 100                                                                                                    |
| offset       | integer | N        | default is 0                                                                                                                                             |
| orderBy      | string  | N        | sort by a field in the table, for example, specify `height:desc` to sort descending, default is `height:asc`. You can only sort by the `height` property |
| transactions | boolean | N        | When transactions=true then                                                                                                                              |

Response Parameter Description:

| Name    | Type    | Description                                    |
| ------- | ------- | ---------------------------------------------- |
| success | bool    | true: response data return successfully        |
| blocks  | Array   | a list of JSON objects containing block detail |
| count   | integer | block height                                   |

JSON Response Example:

```js
{"count":56,
"blocks":[
  {
    "version":0,
    "delegate":"ee9191dff690c0a5b74bba5ab4bddeff60042154d66f2d5c7111123ae8cb4396",
    "height":"55",
    "prevBlockId":"f8d9d54ab0fbbeec1063472a9296e24e8336866de3b0ad5d514fd92ddc73b539",
    "timestamp":3621850,
    "count":0,
    "fees":"0",
    "payloadHash":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "reward":"0",
    "signature":"81b0090adc75346c8985ebe2c6341ba36eeb4b48a2a66ec69b701d55e35577f0dbdd5a633627098a7a64cb81dd1a9d6fbf13f7c0983fd162f46ef12c5468840f",
    "id":"e70c0b569ca877d262dadcd1967a02427a9996d8c189ee32b7c8bcff7fa3cff2"
  },
  {
    "version":0,
    "delegate":"adc2fdf3174278b2d88f9a37d795fb720ab7530f72367e0aae863143b4b90259",
    "height":"54",
    "prevBlockId":"c3e75c7862a7cbe7f1933837704700bd158c2bd9fc6d1228327323003a0cdd15",
    "timestamp":3620770,
    "count":0,
    "fees":"0",
    "payloadHash":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "reward":"0",
    "signature":"a17bf15385b65dd84e94a7be6ccd635dc291f63b8128dd4951f7544fafa0632fc281e70dd597ae2770b228bdb581fd182f98fda7dc4a2d82cf8e94ff344ef604",
    "id":"f8d9d54ab0fbbeec1063472a9296e24e8336866de3b0ad5d514fd92ddc73b539"
  }
]}
```

### Get block height

```typescript
const { data } = blockApi.getHeight();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| height  | string | block height                            |

JSON Response Example:

```js
{
  "success":true,
  "height": "140569"
}
```

### Get milestone

```typescript
const { data } = blockApi.getMilestone();
```

Request Parameter Description: none  
Response Parameter Description:

| Name      | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| success   | bool    | true: response data return successfully |
| milestone | integer |                                         |

JSON Response Example:

```js
{
  "success":true,
  "milestone":0
}
```

### Get reward information of a block

```typescript
const { data } = blockApi.getReward();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| reward  | integer | the reward of the block                 |

JSON Response Example:

```js
{
  "success":true,
  "reward":200000000
}
```

### Get current maximum supply of the blockchain

```typescript
const { data } = blockApi.getSupply();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                                  |
| ------- | ------- | -------------------------------------------- |
| success | bool    | true: response data return successfully      |
| supply  | integer | the total amount of XAS in the whole network |

JSON Response Example:

```js
{
  "supply":"10000000000000000"
}
```

### Get current status of blockchain

```typescript
const { data } = blockApi.getStatus();
```

Request Parameter Description: none

Response Parameter Description:

| Name      | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| success   | bool      | true: response data return successfully  |
| height    | string    | blockchain height                        |
| fee       | string    | transaction fee                          |
| milestone | integer   |                                          |
| reward    | integer   | block reward                             |
| supply    | BigNumber | total amount of XAS in the whole network |

JSON Response Example:

```js
{
  "height":"11",
  "fee":"10000000",
  "milestone":0,
  "reward":0,
  "supply":"10000000000000000"
}
```

## Delegate

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const delegateApi = connection.api.Delegate;
```

### Count the number of delegates

```typescript
const { data } = delegateApi.count();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| count   | integer | total number of delegates               |

JSON Response Example:

```js
{
    "success":true,
    "count":234
}
```

### Get the voters by username

```typescript
const { data } = delegateApi.getVoters(username);
```

Request Parameter Description:

| Name     | Type   | Required | Description              |
| -------- | ------ | -------- | ------------------------ |
| username | string | Y        | username of the delegate |

Response Parameter Description:

| Name     | Type  | Description                             |
| -------- | ----- | --------------------------------------- |
| success  | bool  | true: response data return successfully |
| accounts | Array | a JSON object list of account           |

JSON Response Example:

```js
{
	"success": true,
	"accounts": [{
		"address": "G3kkkSaJNVY87AhVPyxXVGFpR61VB",
		"publicKey": "85b4c2efe56642398dad3f1ec338e87e712063cfaee4a836cb58b673cdb820f4",
		"balance": "1338227722727",
		"weight": 0.013316660647014596
	},
	{
		"address": "GmCQ2xoGv5bWWtaxQfiBNuTUvaoe",
		"publicKey": "fffd516f0748ead6720440e94da58ed3afd686b546f5d36a3c5b52cfed834371",
		"balance": "2109297623765",
		"weight": 0.020989552213127274
	}]
}
```

### Get delegate by public key

```typescript
const { data } = delegateApi.getDelegateByPubKey(publicKey);
```

Request Parameter Description:

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| publickey | string | Y        | delegate's public key |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| delegate | JSON | the detail information of this delegate |

JSON Response Example:

```js
{
  "delegate":{
    "address":"G3kkkSaJNVY87AhVPyxXVGFpR61VB",
    "username":"gny_d1",
    "transactionId":"156c950d69dda92214fa26d37baff860990fad43d40ba74a342fabf9adaaa2dc",
    "publicKey":"85b4c2efe56642398dad3f1ec338e87e712063cfaee4a836cb58b673cdb820f4",
    "votes":"0",
    "producedBlocks":"0",
    "missedBlocks":"0",
    "fees":"0",
    "rewards":"0",
    "_version_":1,
    "rate":47,
    "approval":"0",
    "productivity":"0.00",
    "vote":0,
  }
}
```

### Get delegate by user name

```typescript
const { data } = delegateApi.getDelegateByUsername(username);
```

Request Parameter Description:

| Name     | Type   | Required | Description          |
| -------- | ------ | -------- | -------------------- |
| username | string | Y        | delegate's user name |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| delegate | JSON | the detail information of this delegate |

### Get delegate by address

```typescript
const { data } = delegateApi.getDelegateByAddress(address);
```

Request Parameter Description:

| Name    | Type   | Required | Description        |
| ------- | ------ | -------- | ------------------ |
| address | string | Y        | delegate's address |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| delegate | JSON | the detail information of this delegate |


### Get the list of Delegates

```typescript
const { data } = delegateApi.getDelegates(offset, limit);
```

Request Parameter Description:

| Name   | Type    | Required | Description            |
| ------ | ------- | -------- | ---------------------- |
| offset | int     | N        | maximum return records |
| limit  | integer | N        | offset, minimum: 0     |

Response Parameter Description:

| Name       | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| success    | bool   | true: response data return successfully         |
| delegates  | Array  | a list containing delegates' detail information |
| totalCount | number | How many delegates exist overall?               |

JSON Response Example:

```js
{
  "totalCount":101,
  "delegates":[{
    "address":"G3kkkSaJNVY87AhVPyxXVGFpR61VB",
    "username":"gny_d1",
    "transactionId":"156c950d69dda92214fa26d37baff860990fad43d40ba74a342fabf9adaaa2dc",
    "publicKey":"85b4c2efe56642398dad3f1ec338e87e712063cfaee4a836cb58b673cdb820f4",
    "votes":"0",
    "producedBlocks":"0",
    "missedBlocks":"0",
    "fees":"0",
    "rewards":"0",
    "_version_":1,
    "rate":47,
    "approval":"0",
    "productivity":"0.00",
    "vote":0,
  },
  {
    "address":"G94UbHjRnd6Em1o3FxQAqkMXA2RV",
    "username":"gny_d10",
    "transactionId":"9f9a6818b467dcc73c71c24ff622babeb63850263626dfc7472c1f87f58ebbe9",
    "publicKey":"ff47c9e9bafcf28ae8528c2b259661ade96a3030ab73ddde82b52ee44c9122b5",
    "votes":"0",
    "producedBlocks":"0",
    "missedBlocks":"0",
    "fees":"0",
    "rewards":"0",
    "_version_":1,
    "rate":2,
    "approval":0,
    "productivity":"0.00",
    "vote":0,
  }
]}
```

### Enable forging

```typescript
const { data } = delegateApi.forgingEnable(secret, pulicKey);
```

Request Parameter Description:

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| secret    | string | Y        | gny account password  |
| publickey | string | Y        | delegate's public key |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |

### Disable forging

```typescript
const { data } = delegateApi.forgingDisable(secret, pulicKey);
```

Request Parameter Description:

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| secret    | string | Y        | gny account password  |
| publickey | string | Y        | delegate's public key |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |

### Get forging status

```typescript
const { data } = delegateApi.forgingStatus(pulicKey);
```

Request Parameter Description:

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| publickey | string | Y        | delegate's public key |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |
| enabled | bool | true: forging is enabled                |


## Exchange API

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const exchangeApi = connection.api.Exchange;
```

### Open account

```typescript
const { data } = await accountApi.openAccount(secret);
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
const { data } = await exchangeApi.generateAccount();
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
const { data } = exchangeApi.generatePublicKey(secret);
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



## Loader

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const loaderApi = connection.api.Loader;
```

### Get blockchain status

```typescript
const { data } = loaderApi.getStatus();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type | Description                                 |
| ------- | ---- | ------------------------------------------- |
| success | bool | true: response data return successfully     |
| loaded  | bool | true: the blockchain is loaded successfully |

### Sync blockchain status

```typescript
const { data } = loaderApi.getStatus();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| syncing | bool   | true: the blockchain is syncing         |
| blocks  | number | the number of blocks to be synced       |
| height  | string | the height of last block                |

## Peer

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const peerApi = connection.api.Peer;
```

### Get peers

```typescript
const { data } = peerApi.getPeers();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type  | Description                             |
| ------- | ----- | --------------------------------------- |
| success | bool  | true: response data return successfully |
| peers   | Array | A list of peer information              |
| count   | bool  | The number of peers                     |

JSON Response Example:

```js
{
  "success": true,
  "peers": [
    {
      "id": {
        "id": "QmeDn2SETzxuENnAiynzWXjw78eDRiNLmwzNDtwb2XhVsi",
        "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDo9QnqRUmrO3uAqyoAAnjmDB7+lCSA9a7tAKv0vsq0fnq0/espA70e7sJZSjmHqOpP5Jyse3pjezMfSsBR80vQJheb0dOwCsZu/dJ2kA0nuXRZwOd7ZUUsRUh5oj5NFBrY3tuScq/HtbXDqMs0MZdlKIBkEseTnF1rLZw8fhIiY3AFwlJFUCNGKyrk2rk6IvrwMWshyBkr+r1pPfGp6W46/fw5gwdvRTgxCvmqkQq35uncosBbV2+lAimvviTfT7NR6SuLdkAb5TqC0kh7XJV2eu44TtHwI/rTQw0lfCg/WnRKA+uFyedeg3BcTzqjdnhkxP8v7KAMnxi8Z/3q50jbAgMBAAE="
      },
      "multiaddrs": [
        "/ip4/13.80.136.143/tcp/4097/ipfs/QmeDn2SETzxuENnAiynzWXjw78eDRiNLmwzNDtwb2XhVsi"
      ],
      "simple": {
        "host": "13.80.136.143",
        "port": 4097
      }
    },
    {
      "id": {
        "id": "QmPiFnYYNeuYBxqzA77bPPrpJ8AaGJQujMVFXYJEGbpMRR",
        "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDghE7wWvJxLW2KFTgfaBQ6Yh5hpSrxZqlOu/M4kWFcZ87S81053So92CCcTLdJPaE6mvip3/PTHpzzvfsiEhk7/1oTHDonKjbx44L39dqzvVht+q8LyU3XYo8qw6mJd4Ry69+89V1RmgJGdEtR+G2sBQxZ/m+subcHKfy6jvG2Zw8BkJdcyjlAXaH4mw9ZO5lkrN8E0aI32GwipVBu37Wts7ZYIcJxZ9zxGGVwNb7B8Utq2DVSpmqguM9M1DsBDJZ+yZg3vF435zLcmMS7eRLCB0PIXrZ5HPYsDKk/FMyF3sDy05xtGTUgF75L7zeMYxoEUg6BtgM9HV5T2cWtcDDXAgMBAAE="
      },
      "multiaddrs": [
        "/ip4/174.129.53.40/tcp/4097/ipfs/QmPiFnYYNeuYBxqzA77bPPrpJ8AaGJQujMVFXYJEGbpMRR"
      ],
      "simple": {
        "host": "174.129.53.40",
        "port": 4097
      }
    }
  ],
  "count": 2
}
```

### Get version

```typescript
const { data } = peerApi.getVersion();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| version | string | Version of blockchain                   |
| build   | string | Build version                           |
| net     | string | Net version                             |

JSON Response Example:

```js
{
  "success": true,
  "version": "1.0.5",
  "build": "Tue Jan 28 2020 12:44:42 GMT+0000 (Coordinated Universal Time)",
  "net": "localnet"
}
```

### Get info

```typescript
const { data } = peerApi.getInfo();
```

Request Parameter Description: none

Response Parameter Description:

| Name       | Type             | Description                                                                                               |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| success    | bool             | true: response data return successfully                                                                   |
| id         | string of peerId | libp2p [peer-id](https://www.npmjs.com/package/peer-id)                                                   |
| multiaddrs | string[]         | Array of [multiaddrs](https://www.npmjs.com/package/multiaddr) strings which is used for p2p communcation |
| publicIp   | string           | own public ip                                                                                             |
| address    | string           | ip address on which the server is listening. Normal this is a private ip address                          |

JSON Response Example:

```js
{
  "success": true,
  "id": "QmQbVdde9AeXSP3FoLyVNd3Fi3BjCe2tFyJV43bNWEBYSA",
  "multiaddrs": [
    "/ip4/20.188.42.0/tcp/4097/ipfs/QmQbVdde9AeXSP3FoLyVNd3Fi3BjCe2tFyJV43bNWEBYSA"
  ],
  "publicIp": "20.188.42.0",
  "address": "10.0.3.4"
}
```

## System

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const systemApi = connection.api.System;
```

### Get version

```typescript
const { data } = systemApi.getSystemInfo();
```

Request Parameter Description: none

Response Parameter Description:

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| success   | bool   | true: response data return successfully |
| os        | string | Operating system information            |
| version   | string | Version of blockchain                   |
| timestamp | string | the time right now                      |
| lastBlock | json   | Basic information about last block      |


## Transaction

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const transactionApi = connection.api.Transaction;
```

### Get transactions

```typescript
const { data } = transactionApi.getTransactions(query);
```

Request Parameter Description:

| Name                  | Type     | Required              | Description                                                                                         |
| --------------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| query.limit           | integer  | N                     | the limitation of returned records，minimum：0,maximum：100                                         |
| query.offset          | integer  | N                     | offset, minimum 0                                                                                   |
| query.id              | string   | N                     | transaction id                                                                                      |
| query.senderId        | N        | GNY address of sender |
| query.senderPublicKey | string   | N                     | sender's public key                                                                                 |
| query.blockId         | string   | N                     | block id                                                                                            |
| query.height          | integer  | specific block height |
| query.type            | interger | N                     | Transaction type, see https://github.com/GNYIO/gny-general/wiki/Transactions for futher information |
| query.message         | string   | Transaction message   |

Response Parameter Description:

| Name         | Type  | Description                                                 |
| ------------ | ----- | ----------------------------------------------------------- |
| success      | bool  | true: response data return successfully                     |
| transactions | Array | A JSON object list containing multiple transactions' detail |
| count        | int   | the total number of retrieved transactions                  |

JSON Response Example:

```js
{
  "transactions":[
    {
      "transactionId":"42254052d4bc1e1132c316469194e6b756a6c0f086a24b00c05a91ced5502046",
      "senderId":"G25AKCRu8mK2b4QXq8Jk8bFiNfxeY",
      "recipientId":"G2MdtJJPCWTFGZ75QoP7Z5KowRhst",
      "recipientName":null,
      "currency":"gny",
      "amount":"10000000000000000",
      "timestamp":0,
      "height":"0",
      "_version_":1
    }
  ],
  "count":1
}
```

### Get unconfirmed transactions by transaction id

```typescript
const { data } = transactionApi.getUnconfirmedTransaction(id);
```

Request Parameter Description:

| Name | Type   | Required | Description                |
| ---- | ------ | -------- | -------------------------- |
| id   | string | Y        | unconfirmed transaction id |

Response Parameter Description:

| Name        | Type | Description                                |
| ----------- | ---- | ------------------------------------------ |
| success     | bool | true: response data return successfully    |
| transaction | json | unconfirmed transaction detail inforamtion |

JSON Response Example:

```js
{
  "transactionId":"42254052d4bc1e1132c316469194e6b756a6c0f086a24b00c05a91ced5502046",
  "senderId":"G25AKCRu8mK2b4QXq8Jk8bFiNfxeY",
  "recipientId":"G2MdtJJPCWTFGZ75QoP7Z5KowRhst",
  "recipientName":null,
  "currency":"gny",
  "amount":"10000000000000000",
  "timestamp":0,
  "height":"0",
  "_version_":1
}
```


### Get unconfirmed transactions by sender public key or address

```typescript
const { data } = transactionApi.getUnconfirmedTransaction(publicKey, address);
```

Request Parameter Description:

| Name            | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| senderPublicKey | string | N        | sender's public key |
| address         | string | N        | address             |

Response Parameter Description:

| Name         | Type  | Description                                    |
| ------------ | ----- | ---------------------------------------------- |
| success      | bool  | true: response data return successfully        |
| transactions | Array | a list containing all unconfirmed transactions |


JSON Response Example:

```js
{
	"success": true,
	"transactions": []      //Currently there is no unconfirmed transaction in the whole network
}
```

### Create a batch of transactions

```typescript
const genesisSecret =
  "grow pencil ten junk bomb right describe trade rich valid tuna service";
const trs = gnyClient.basic.transfer(
  "GuQr4DM3aiTD36EARqDpbfsEHoNF",
  50 * 1e8,
  undefined,
  genesisSecret,
  undefined
);
const transactions = [trs];
const { data } = transactionApi.addTransactions(transactions);
```

Request Parameter Description:  
| Name         | Type  | Required | Description           |  
| ------------ | ----- | -------- | --------------------- |  
| transactions | Array | Y        | Array of transactions |

JSON Response Example:

```js
{
  "success": true,
  "transactions": [
    {
      "type": 0,
      "timestamp": 3619538,
      "fee": 10000000,
      "args": [
        5000000000,
        "GuQr4DM3aiTD36EARqDpbfsEHoNF"
      ],
      "senderPublicKey": "575bf8f32b941b9e6ae1af82539689198327b73d77d22a98cdef2460c9257f7b",
      "senderId": "G4GDW6G78sgQdSdVAQUXdm5xPS13t",
      "signatures": [
        "5fd14364bed18697f9c9ec1e03d66825af2cc9e716d5f6089dc265d99d5d6f3a79b778a48733e06b1353ea007036455ab4b9f0d4a3035a343584c4fb137e1400"
      ],
      "id": "0bd53c3a60b6746e4383dbafa8f63f2eaea7e167e0e754cbf9aaf419b3cb2eef"
    }
  ]
}
```

## Transfer

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const transferApi = connection.api.Transfer;
```

### Get transfers

```typescript
const { data } = transferApi.getRoot(query);
```

Request Parameter Description:

| Name              | Type    | Required | Description                                                 |
| ----------------- | ------- | -------- | ----------------------------------------------------------- |
| query.limit       | integer | N        | the limitation of returned records，minimum：0,maximum：100 |
| query.offset      | integer | N        | offset, minimum 0                                           |
| query.ownId       | string  | N        | public key related to transfers                             |
| query.currency    | string  | N        | gny UIA Assets                                              |
| query.senderId    | string  | N        | GNY address of sender                                       |
| query.recipientId | string  | N        | recipient's public key                                      |

Response Parameter Description:

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| success   | bool   | true: response data return successfully |
| count     | string | the number of transfers                 |
| transfers | Array  | An array of transfers                   |

### Get total amount of transfers

```typescript
const { data } = transferApi.getAmount(startTimestamp, endTimestamp);
```

Request Parameter Description:

| Name           | Type   | Required | Description     |
| -------------- | ------ | -------- | --------------- |
| startTimestamp | string | Y        | start timestamp |
| endTimestamp   | string | Y        | end timestamp   |

Response Parameter Description:

| Name           | Type   | Description                             |
| -------------- | ------ | --------------------------------------- |
| success        | bool   | true: response data return successfully |
| count          | string | the number of transfers                 |
| strTotalAmount | string | the total amout of transfers            |


## Transport

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const transportApi = connection.api.Transport;
```

### Send unconfirmed transaction

```typescript
const { data } = transportApi.sendTransaction(transaction);
```

Request Parameter Description:

| Name         | Type | Required | Description             |
| ------------ | ---- | -------- | ----------------------- |
| transaction  | json | Y        |  Unconfirmed transction |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


## User Defined Asset UIA

### Basic usage

```typescript
import { Connection } from "@gny/client";

const connection = new Connection();
const uiaApi = connection.api.Uia;
```

### Get all publishers

```typescript
const { data } = uiaApi.getIssuers(limit, offset);
```

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | boolean | true: response data return successfully |
| issues  | Array   | Array of publishers                     |
| count   | integer | Total number of publishers              |

JSON Response:

```js
{
  "count":1,
  "issues":[{
      "tid":"279ee5d155f25bd5eb7f09b63a6e096b89e22ff70b5b8a9858cfd19dc21149d3",
      "name":"AAA",
      "issuerId":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
      "desc":"\"some description\"",
      "_version_":1
  }]
}
```

### Check if the address is a publisher

```typescript
const { data } = uiaApi.isIssuer(address);
```

Request Parameter Description:

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| address | string | Y        | Can be the GNY account address |

Response Parameter Description:

| Name       | Type    | Description                             |
| ---------- | ------- | --------------------------------------- |
| success    | boolean | true: response data return successfully |
| isIssuer   | boolean | true: the address is an issuer          |
| issuerName | string  | the publisher name                      |

JSON Response:

```js
{
  "success": true,
  "isIssuer": true,
  "issuerName": "AAA"
}
```

### Query information about a publisher

```typescript
const { data } = uiaApi.getIssuer(publisherName | address);
```

Request Parameter Description:

| Name          | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| publisherName | string | Y        | Can be GNY publisher name      |
| address       | string | Y        | Can be the GNY account address |

Response Parameter Description:

| Name    | Type    | Description                                                   |
| ------- | ------- | ------------------------------------------------------------- |
| success | boolean | Whether operation was successful                              |
| issuer  | JSON    | Contains the publisher name, description and id (GNY address) |

JSON Response:

```js
{
  "issuer":{
    "tid":"c194bf2d4ccb1d07829f161165b307332d91a14f44a71a7a99a28dea8154e524",
    "name":"AAA",
    "issuerId":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "desc":"\"some description\"",
    "_version_":1
  }
}
```

### View assets of a specified publisher

```typescript
const { data } = uiaApi.getIssuerAssets(name, limit?, offset?);
```

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| name   | string  | Y        | Can be GNY publisher name                              |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type     | Description                                            |
| ------- | -------- | ------------------------------------------------------ |
| success | boolean  | true: response data return successfully                |
| assets  | Array    | Array of assets                                        |
| count   | interger | The total number of assets registered by the publisher |

JSON Response:

```js
{
  "count":1,
  "assets":[{
    "tid":"4316b799601e15831bbd8514862e61b6b67754b8971938f90025723d1be9eb67",
    "name":"AAA.BBB",
    "timestamp":3714160,
    "maximum":"1000000000",
    "precision":8,
    "quantity":"500000000",
    "desc":"some description",
    "issuerId":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "_version_":2
  }]
}
```

### Get all assets

```typescript
const { data } = uiaApi.getAssets(limit, offset);
```

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | boolean | true: response data return successfully |
| assets  | Array   | Array of assets                         |
| count   | integer | Number of all assets                    |

JSON Response:

```js
{
  "count":1,
  "assets":[{
    "tid":"44fd0eff16f2a39be263a3b77f34145c7039b16790265feef74c52538eff9cde",
    "name":"AAA.BBB",
    "timestamp":3714682,
    "maximum":"1000000000",
    "precision":8,
    "quantity":"500000000",
    "desc":"some description",
    "issuerId":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "_version_":2
  }]
}
```

### Get specified asset information

```typescript
const { data } = uiaApi.getAsset(name);
```

Request Parameter Description:

| Name | Type   | Required | Description |
| ---- | ------ | -------- | ----------- |
| name | string | Y        | Asset name  |

Response Parameter Description:

| Name    | Type    | Description                                                                                       |
| ------- | ------- | ------------------------------------------------------------------------------------------------- |
| success | boolean | true: response data return successfully                                                           |
| asset   | JSON    | Contains asset name, description, cap, precision, current circulation, issue height, publisher id |

JSON Response:

```js
{
  "asset":{
    "tid":"92bf426d9a517a35ac6a63ef210d0f062f5195b636f35878e949e7581355d5b8",
    "name":"AAA.BBB",
    "timestamp":3717011,
    "maximum":"1000000000",
    "precision":8,
    "quantity":"500000000",
    "desc":"some description",
    "issuerId":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "_version_":2
  }
}
```

### Get the balance of all UIA Assets for an account

```typescript
const { data } = uiaApi.getBalances(address, limit?, offset?);
```

Request Parameter Description:

| Name    | Type    | Required | Description                                            |
| ------- | ------- | -------- | ------------------------------------------------------ |
| address | string  | Y        | GNY account address                                    |
| limit   | integer | N        | maximum number of records to return, between 0 and 100 |
| offset  | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name     | Type    | Description                                                                                                                                                                  |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success  | boolean | Whether operation was successful                                                                                                                                             |
| balances | Array   | Asset array, details owned, each element is an asset, including asset name, balance, cap, precision, current circulation, whether to cancel (0: not cancelled, 1: cancelled) |
| count    | integer | The number of assets currently owned by this address                                                                                                                         |

JSON Response:

```js
{
  "count":1,
  "balances":[{
    "address":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "currency":"AAA.BBB",
    "balance":"500000000",
    "flag":2,
    "_version_":1
  }]
}
```

### Get balance of a specific UIA Asset for an account

```typescript
const { data } = uiaApi.getBalance(address, currency);
```

Request Parameter Description:

| Name     | Type   | Required | Description          |
| -------- | ------ | -------- | -------------------- |
| address  | string | Y        | GNY account address  |
| currency | string | Y        | a specific UIA Asset |

Response Parameter Description:

| Name    | Type | Description                                                                                                                                                                  |
| ------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success | bool | Whether operation was successful                                                                                                                                             |
| balance | json | Asset array, details owned, each element is an asset, including asset name, balance, cap, precision, current circulation, whether to cancel (0: not cancelled, 1: cancelled) |

JSON Response:

```js
{
  "balance":{
    "address":"G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "currency":"AAA.BBB",
    "balance":"1000000000",
    "flag":2,
    "_version_":2
  }
}
```

