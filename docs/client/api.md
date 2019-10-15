# API

## Account API

### Basic usage

``` typesript
import { Connection } from 'gny-clinet';

const connection = new Connection();
const accountApi = connection.api('Account');

```

### Open account

```typescript
cosnt { data } = await accountApi.openAccount(secretOrPublicKey);

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
Request Parameter Description: none  
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
Request Parameter Description: none  
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


## Block API

### Basic usage

``` typescript
import { Connection } from 'gny-clinet';

const connection = new Connection();
const blockApi = connection.api('Block');

```

### Get block by id

```typescript
const { data }  = blockApi.getBlockById(id);
```

Request Parameter Description:

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| id    | string | Y        | block id    |

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
    "height":0,
    "count":203,
    "fees":0,
    "reward":0,
    "signature":"d49b0d08b164c8df402dc1f24430d51126a05a9d1c4012fbdf89272ab95740454b11fd4b44dbf7c60d4757760d8015146433ae21e2e418fd0d7b3aa03adc5503",
    "id":"fed53e3ad0a1405f73122708ee53dfed2e9eccc34693d52043bdb6aec4751a8c"
  }
}
```

### Get block by height

```typescript
const { data }  = blockApi.getBlockByHeight(height);
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
const { data }  = blockApi.getBlocks(offset, limit, orderBy, transactions);
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
    "height":55,
    "prevBlockId":"f8d9d54ab0fbbeec1063472a9296e24e8336866de3b0ad5d514fd92ddc73b539",
    "timestamp":3621850,
    "count":0,
    "fees":0,
    "payloadHash":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "reward":0,
    "signature":"81b0090adc75346c8985ebe2c6341ba36eeb4b48a2a66ec69b701d55e35577f0dbdd5a633627098a7a64cb81dd1a9d6fbf13f7c0983fd162f46ef12c5468840f",
    "id":"e70c0b569ca877d262dadcd1967a02427a9996d8c189ee32b7c8bcff7fa3cff2"
  },
  {
    "version":0,
    "delegate":"adc2fdf3174278b2d88f9a37d795fb720ab7530f72367e0aae863143b4b90259",
    "height":54,
    "prevBlockId":"c3e75c7862a7cbe7f1933837704700bd158c2bd9fc6d1228327323003a0cdd15",
    "timestamp":3620770,
    "count":0,
    "fees":0,
    "payloadHash":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "reward":0,
    "signature":"a17bf15385b65dd84e94a7be6ccd635dc291f63b8128dd4951f7544fafa0632fc281e70dd597ae2770b228bdb581fd182f98fda7dc4a2d82cf8e94ff344ef604",
    "id":"f8d9d54ab0fbbeec1063472a9296e24e8336866de3b0ad5d514fd92ddc73b539"
  }
]}
```

### Get block height

```typescript
const { data }  = blockApi.getHeight();
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| height  | integer | block height                            |


JSON Response Example:

```js
{
  "success":true,
  "height":140569
}
```


### Get milestone

```typescript
const { data }  = blockApi.getMilestone();
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
const { data }  = blockApi.getReward();
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
const { data }  = blockApi.getSupply();
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
const { data }  = blockApi.getStatus();
``` 
 
Request Parameter Description: none

Response Parameter Description:

| Name      | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| success   | bool    | true: response data return successfully  |
| height    | integer | blockchain height                        |
| fee       | integer | transaction fee                          |
| milestone | integer |                                          |
| reward    | integer | block reward                             |
| supply    | integer | total amount of XAS in the whole network |


JSON Response Example:

```js
{
  "height":11,
  "fee":10000000,
  "milestone":0,
  "reward":0,
  "supply":"10000000000000000"
}
```

## Delegate

### Basic usage

``` typescript
import { Connection } from 'gny-clinet';

const connection = new Connection();
const delegateApi = connection.api('Delegate');

```

### Count the number of delegates

```typescript
const { data }  = delegateApi.count();
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
const { data }  = delegateApi.getVoters(username);
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
		"address": "2918354313445278349",
		"publicKey": "4fde4c49f1297d5d3a24b1494204543c4281aff17917ff7ff8ff32da3b4b222f",
		"balance": 1338227722727,
		"weight": 0.013316660647014596
	},
	{
		"address": "1523444724068322527",
		"publicKey": "8a6a61c28dc47541aadf1eecec2175c8f768f2331eea3472b1593bf1aa4e1fb4",
		"balance": 2109297623765,
		"weight": 0.020989552213127274
	},
	{
		"address": "14483826354741911727",
		"publicKey": "5dacb7983095466b9b037690150c3edec0f073815326e33a4744b6d1d50953e2",
		"balance": 5135815841470,
		"weight": 0.051106336795243436
	}
	}]
}
```
### Get delegate by public key

```typescript
const { data }  = delegateApi.getDelegateByPubKey(publicKey);
``` 
Request Parameter Description:

| Name      | Type   | Required  | Description           |
| --------- | ------ | --------- | --------------------- |
| publickey | string | Y         | delegate's public key |


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
    "votes":0,
    "producedBlocks":0,
    "missedBlocks":0,
    "fees":0,
    "rewards":0,
    "_version_":1,
    "rate":47,
    "approval":0,
    "productivity":"0.00",
    "vote":0,
    "missedblocks":0,
    "producedblocks":0
  }
}
```

### Get delegate by user name

```typescript
const { data }  = delegateApi.getDelegateByUsername(username);
``` 
Request Parameter Description:

| Name     | Type   | Required  | Description          |
| -------- | ------ | --------- | -------------------- |
| username | string | Y         | delegate's user name |


Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| delegate | JSON | the detail information of this delegate |



### Get delegate by public key

```typescript
const { data }  = delegateApi.getDelegateByAddress(address);
``` 
Request Parameter Description:

| Name    | Type   | Required  | Description        |
| ------- | ------ | --------- | ------------------ |
| address | string | Y         | delegate's address |


Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| delegate | JSON | the detail information of this delegate |



### Get the list of Delegates

```typescript
const { data }  = delegateApi.getDelegates(offset, limit);
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
    "address":"GmCQ2xoGv5bWWtaxQfiBNuTUvaoe",
    "username":"gny_d95",
    "transactionId":"d32dcf7b9db93591ae94878f4390807e21052b0b76044b5eadc8a6385557e503",
    "publicKey":"fffd516f0748ead6720440e94da58ed3afd686b546f5d36a3c5b52cfed834371",
    "votes":0,
    "producedBlocks":0,
    "missedBlocks":0,
    "fees":0,
    "rewards":0,
    "_version_":1,
    "rate":1,
    "approval":0,
    "productivity":"0.00",
    "vote":0,
    "missedblocks":0,
    "producedblocks":0
  },
  {
    "address":"G94UbHjRnd6Em1o3FxQAqkMXA2RV",
    "username":"gny_d10",
    "transactionId":"9f9a6818b467dcc73c71c24ff622babeb63850263626dfc7472c1f87f58ebbe9",
    "publicKey":"ff47c9e9bafcf28ae8528c2b259661ade96a3030ab73ddde82b52ee44c9122b5",
    "votes":0,
    "producedBlocks":0,
    "missedBlocks":0,
    "fees":0,
    "rewards":0,
    "_version_":1,
    "rate":2,
    "approval":0,
    "productivity":"0.00",
    "vote":0,
    "missedblocks":0,
    "producedblocks":0
  }
]}
```

### Enable forging

```typescript
const { data }  = delegateApi.forgingEnable(secret, pulicKey);
``` 

Request Parameter Description:

| Name      | Type   | Required  | Description           |
| --------- | ------ | --------- | --------------------- |
| secret    | string | Y         | gny account password  |
| publickey | string | Y         | delegate's public key |


Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |


### Disable forging

```typescript
const { data }  = delegateApi.forgingDisable(secret, pulicKey);
``` 

Request Parameter Description:

| Name      | Type   | Required  | Description           |
| --------- | ------ | --------- | --------------------- |
| secret    | string | Y         | gny account password  |
| publickey | string | Y         | delegate's public key |


Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |


### Get forging status

```typescript
const { data }  = delegateApi.forgingStatus(pulicKey);
``` 

Request Parameter Description:

| Name      | Type   | Required  | Description           |
| --------- | ------ | --------- | --------------------- |
| publickey | string | Y         | delegate's public key |


Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| enabled  | bool | true: forging is enabled                |

### Register as a delegate

```typescript
const { data }  = delegateApi.registerDelegate(secret);
``` 

Request Parameter Description:

| Name   | Type   | Required  | Description          |
| ------ | ------ | --------- | -------------------- |
| secret | string | Y         | gny account password |


Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |



## Loader

### Basic usage

``` typescript
import { Connection } from 'gny-clinet';

const connection = new Connection();
const loaderApi = connection.api('Loader');

```

### Get blockchain status

```typescript
const { data }  = loaderApi.getStatus();
``` 
Request Parameter Description: none

Response Parameter Description:

| Name   | Type | Description                                 |
| ------ | ---- | ------------------------------------------- |
| loaded | bool | true: the blockchain is loaded successfully |


### Sync blockchain status

```typescript
const { data }  = loaderApi.getStatus();
``` 
Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description                       |
| ------- | ------ | --------------------------------- |
| syncing | bool   | true: the blockchain is syncing   |
| blocks  | number | the number of blocks to be synced |
| height  | string | the height of last block          |


## Peer

### Basic usage

``` typescript
import { Connection } from 'gny-clinet';

const connection = new Connection();
const peerApi = connection.api('Peer');
```

### Get peers

```typescript
const { data }  = peerApi.getPeers();
``` 

Request Parameter Description: none

Response Parameter Description:

| Name  | Type  | Description                |
| ----- | ----- | -------------------------- |
| Peers | Array | A list of peer information |
| count | bool  | The number of peers        |

### Get version

```typescript
const { data }  = peerApi.getVersion();
``` 

Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description           |
| ------- | ------ | --------------------- |
| version | string | Version of blockchain |
| build   | string | Build version         |
| net     | string | Net version           |

