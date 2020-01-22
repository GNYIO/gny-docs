# API

## Account API

### Open account

```bash
openaccount [secret]
```

open your account and get the infomation by publicKey

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| publicKey | string | N        | gny account publicKey |

Response Parameter Description:

| Name    | Type | Description                 |
| ------- | ---- | --------------------------- |
| success | bool | Whether login is successful |
| account | json | Account information         |

JSON Response Example:

```js
{
  "success": true,
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

### Get balance

```
getbalance [address]
```

Request Parameter Description:

| Name    | Type   | Required | Description      |
| ------- | ------ | -------- | ---------------- |
| address | string | Y        | Client's address |

Response Parameter Description:

| Name     | Type    | Description                                  |
| -------- | ------- | -------------------------------------------- |
| success  | bool    | Whether request is successful               |
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

### Get the account by address

```bash
getaccountbyaddress [address]
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

```bash
getaccountbyusername [username]
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


### Count the number of accounts

```bash
countaccounts
```

Request Parameter Description: none  
Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| count   | number | the total number of accounts            |


### Get voted delegates

```bash
getvoteddelegates -u [usename] -a [address]
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

### Get publicKey by address

```bash
getpublickey [address]
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


### Generate publicKey by secret

```bash
genpublickey [secret]
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


### Generate Account

```bash
genaccount
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


### Get balance by address and currency

```bash
getbalancebyaddresscurrency -a [address] -c [currency]
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


## Block API

### Get block height

```bash
getheight
```

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

### Get block by height

```bash
getblockbyheight [height]
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

### Get block by id

```bash
getblockbyid [id]
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
    "height":0,
    "count":203,
    "fees":0,
    "reward":0,
    "signature":"d49b0d08b164c8df402dc1f24430d51126a05a9d1c4012fbdf89272ab95740454b11fd4b44dbf7c60d4757760d8015146433ae21e2e418fd0d7b3aa03adc5503",
    "id":"fed53e3ad0a1405f73122708ee53dfed2e9eccc34693d52043bdb6aec4751a8c"
  }
}
```



### Get blocks

```bash
getblocks -o [offset] -l [limit] -s [orderBy] -t [transactions]
getblocks --offset [offset] --limit [limit] --sort [orderBy] --transactions [transactions]
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

### Get block milestone

```bash
getmilestone
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

```bash
getreward
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

```bash
getsupply
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

```bash
getstatus
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


### Get block bytes

```bash
getblockbytes -f [file]
```

Request Parameter Description:

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| file | string | Y        | block file path  |

Response Parameter Description:

| Name       | Type   | Description     |
| ---------- | ------ | --------------- |
| blockbytes | string | the block bytes |


### Get block id

```bash
getblockid -f [file]
```

Request Parameter Description:

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| file | string | Y        | block file path  |

Response Parameter Description:

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| id   | string | the block id |


### Get block payload hash

```bash
getblockpayloadhash -f [file]
```

Request Parameter Description:

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| file | string | Y        | block file path  |

Response Parameter Description:

| Name        | Type   | Description            |
| ----------- | ------ | ---------------------- |
| payloadHash | string | the block payload hash |


## Delegate

### Count the number of delegates

```bash
getdelegatescount
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| count   | integer | total number of delegates               |

JSON Response Example:

```js
{
  "count":234
}
```

### Get the voters by username

```bash
getvoters [username]
```

Request Parameter Description:

| Name     | Type   | Required | Description              |
| -------- | ------ | -------- | ------------------------ |
| username | string | Y        | username of the delegate |

Response Parameter Description:

| Name     | Type  | Description                             |
| -------- | ----- | --------------------------------------- |
| accounts | Array | a JSON object list of account           |

JSON Response Example:

```js
[
  {
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
]
```

### Get delegate by public key

```bash
getdelegatebypublickey [publicKey]
```

Request Parameter Description:

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| publickey | string | Y        | delegate's public key |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| delegate | JSON | the detail information of this delegate |

JSON Response Example:

```js
{
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

```

### Get delegate by user name

```bash
getdelegatebyusername [username]
```

Request Parameter Description:

| Name     | Type   | Required | Description          |
| -------- | ------ | -------- | -------------------- |
| username | string | Y        | delegate's user name |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| delegate | JSON | the detail information of this delegate |

### Get delegate by address

```bash
getdelegatebyaddress [address]
```

Request Parameter Description:

| Name    | Type   | Required | Description        |
| ------- | ------ | -------- | ------------------ |
| address | string | Y        | delegate's address |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| delegate | JSON | the detail information of this delegate |

### Get the list of Delegates

```bash
getdelegates -o [offset] -l [limit]
getdelegates --offset [offset] --limit [limit]
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

## Exchange

### Open your account and get the infomation by secret

```bash
openaccountwithsecret [secret]
```

open your account and get the infomation by secret

| Name   | Type   | Required | Description        |
| ------ | ------ | -------- | ------------------ |
| secret | string | N        | gny account secret |

Response Parameter Description:

| Name    | Type | Description                 |
| ------- | ---- | --------------------------- |
| success | bool | Whether login is successful |
| account | json | Account information         |

JSON Response Example:

```js
{
  "success": true,
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

### Generate public key with secret

```bash
genpublickey [secret]
```

open your account and get the infomation by secret

| Name   | Type   | Required | Description        |
| ------ | ------ | -------- | ------------------ |
| secret | string | N        | gny account secret |

Response Parameter Description:

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| publicKey | string | gny account publicKey       |


### Generate accounts

```bash
genaccount
```

Response Parameter Description:

| Name     | Type  | Description   |
| -------- | ----- | ------------- |
| accounts | Array | account array |


## Peer

### Get peers

```bash
getpeers
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type  | Description                              |
| ------- | ----- | ---------------------------------------- |
| success | bool  | true: response data return successfully |
| Peers   | Array | A list of peer information               |
| count   | bool  | The number of peers                      |

### Get version

```bash
getversion
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| version | string | Version of blockchain                   |
| build   | string | Build version                           |
| net     | string | Net version                             |



## System

### Get version

```bash
getsysteminfo
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


### Get transactions

```bash
gettransactions -l [limit] -o [offset] -i [id] --senderId [senderId] --senderPublicKey [senderPublicKey] -b [blockId] -h [height] -t [type] -m [message]
gettransactions --limit [limit] --offset [offset] --id [id] --senderId [senderId] --senderPublicKey [senderPublicKey] --blockId [blockId] --height [height] --type [type] --message [message]
```

Request Parameter Description:

| Name                  | Type     | Required              | Description                                                                                         |
| --------------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| limit           | integer  | N                     | the limitation of returned records, minimum：0,maximum: 100                                         |
| offset          | integer  | N                     | offset, minimum 0                                                                                   |
| id              | string   | N                     | transaction id                                                                                      |
| senderId        | N        | GNY address of sender |
| senderPublicKey | string   | N                     | sender's public key                                                                                 |
| blockId         | string   | N                     | block id                                                                                            |
| height          | integer  | specific block height |
| type            | interger | N                     | Transaction type, see https://github.com/GNYIO/gny-general/wiki/Transactions for futher information |
| message         | string   | Transaction message   |

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
      "height":0,
      "_version_":1
    }
  ],
  "count":1
}
```

### Get unconfirmed transactions 

```bash
getunconfirmedtransactions -k [sender public key] -a [address]
getunconfirmedtransactions --key [sender public key] --address [address]
```

Request Parameter Description:

| Name      | Type   | Required | Description       |
| --------- | ------ | -------- | ----------------- |
| publicKey | string | Y        | sender public key |
| address   | string | Y        | sender id         |


Response Parameter Description:

| Name         | Type | Description                                |
| ------------ | ---- | ------------------------------------------ |
| transactions | json | unconfirmed transaction detail inforamtion |

JSON Response Example:

```js
[
  {
    "transactionId":"42254052d4bc1e1132c316469194e6b756a6c0f086a24b00c05a91ced5502046",
    "senderId":"G25AKCRu8mK2b4QXq8Jk8bFiNfxeY",
    "recipientId":"G2MdtJJPCWTFGZ75QoP7Z5KowRhst",
    "recipientName":null,
    "currency":"gny",
    "amount":"10000000000000000",
    "timestamp":0,
    "height":0,
    "_version_":1
  },
]
```

### Get unconfirmed transaction by transaction id

```bash
gettransaction [id]
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
  "height":0,
  "_version_":1
}
```


### Send money (contract)

Prize: 0.1 GNY

```bash
sendmoney -e [secret] -s [secondSecret] -a [amount] -r [recipientId] -m [message]
sendmoney --secret [secret] --secondSecret [secondSecret] --amount [amount] --recipient [recipientId] --message [message]
```

| Name         | Type    | Required | Description                                                                                    |
| ------------ | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| secret       | string  | Y        | GNY account password                                                                           |
| amount       | integer | Y        | amount, between 1 and 10000000000000000                                                        |
| recipientId  | string  | Y        | recipient's address, minimum:1                                                                 |
| message      | string  | N        | message with the transaction                                                                   |
| secondSecret | string  | N        | sender's second password (must fit the BIP39 standard), the length should be between 1 and 100 |

Response Parameter Description:

| Name          | Type   | Description    |
| ------------- | ------ | -------------- |
| transactionId | string | transaction id |


### Get transaction bytes

```bash
gettransactionbytes -f [file]
```

Request Parameter Description:

| Name | Type   | Required | Description            |
| ---- | ------ | -------- | ---------------------- |
| file | string | Y        | transaction file path  |

Response Parameter Description:

| Name             | Type   | Description           |
| ---------------- | ------ | --------------------- |
| transactionbytes | string | the transaction bytes |



### Get transaction id

```bash
gettransactionid -f [file]
```

Request Parameter Description:

| Name | Type   | Required | Description            |
| ---- | ------ | -------- | ---------------------- |
| file | string | Y        | transaction file path  |

Response Parameter Description:

| Name          | Type   | Description        |
| ------------- | ------ | ------------------ |
| transactionId | string | the transaction id |

### Verify transaction bytes

```bash
verifybytes -b [bytes] -s [signature] -p [publicKey]
```

Request Parameter Description:

| Name      | Type   | Required | Description                     |
| --------- | ------ | -------- | ------------------------------- |
| bytes     | string | Y        | transaction bytes               |
| signature | string | Y        | transaction or block signature  |
| publicKey | string | Y        | signer public key               |

Response Parameter Description:

| Name   | Type    | Description                 |
| ------ | ------- | --------------------------- |
| resule | boolean | true: verified successfully |


### Send transaction with fee

```bash
transaction -e [secret] -s [secondSecret] -a [amount] -r [recipientId] -m [message] -f [feee]
transaction --secret [secret] --secondSecret [secondSecret] --amount [amount] --recipient [recipientId] --message [message] --fee [fee]
```

Request Parameter Description:

| Name         | Type    | Required | Description                                                                                    |
| ------------ | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| secret       | string  | Y        | GNY account password                                                                           |
| amount       | integer | Y        | amount, between 1 and 10000000000000000                                                        |
| recipientId  | string  | Y        | recipient's address, minimum:1                                                                 |
| message      | string  | N        | message with the transaction                                                                   |
| secondSecret | string  | N        | sender's second password (must fit the BIP39 standard), the length should be between 1 and 100 |
| fee          | string  | Y        | transaction fee                                                                                |

Response Parameter Description:

| Name          | Type   | Description    |
| ------------- | ------ | -------------- |
| transactionId | string | transaction id |


## User Defined Asset UIA


### Get all publishers

```bash
getissuers -o [offset] -l [limit]
getissuers --offset [offset] --limit [limit] 
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

```bash
isissuer [address]
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

```bash
getissuer [name or address]
```

Request Parameter Description:

| Name                     | Type   | Required | Description                             |
| ------------------------ | ------ | -------- | --------------------------------------- |
| publisherName or address | string | Y        | Can be GNY publisher name or address    |

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

```bash
getissuerassets [name]
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

```bash
getassets -o [offset] -l [limit]
getassets --offset [offset] --limit [limit]
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

```bash
getasset [name]
```

Request Parameter Description:

| Name | Type   | Required | Description |
| ---- | ------ | -------- | ----------- |
| name | string | Y        | Asset name  |

Response Parameter Description:

| Name    | Type    | Description                                                                                       |
| ------- | ------- | ------------------------------------------------------------------------------------------------- |
| success | boolean | true: response data return successfully                                                            |
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

```bash
getbalances -a [address] -l [limit] -o [offset]
getbalances --adress [address] --limit [limit] -offset [offset]
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

```bash
getbalance -a [address] -c [currency]
getbalance --address [address] --currency [currency]
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

### Send asset (contract)

Prize: 10000000

```bash
sendasset -e,--secret <secret> -s,--secondSecret <secret> -c,--currency <currency> -a,--amount <amount> -r,--recipient <address> -m,--message <message>
``` 

Request Parameter Description:

| Name         | Type    | Required | Description                             |
| ------------ | ------- | -------- | --------------------------------------- |
| secret       | string  | Y        | gny account password                    |
| secondSecret | string  | N        | gny account second password             |
| currency     | string  | Y        | a specific UIA Asset                    |
| amount       | integer | Y        | amount, between 1 and 10000000000000000 |
| recipient    | string  | Y        | recipient's address                     |
| message      | string  | Y        | message with the transaction            |


Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


### Register as a delegate (contract)

Prize: 100 GNY

```bash
registerdelegate -e,--secret <secret> -s,--secondSecret <secret> -m,--message <message>
```

Request Parameter Description:

| Name         | Type    | Required | Description                             |
| ------------ | ------- | -------- | --------------------------------------- |
| secret       | string  | Y        | gny account password                    |
| secondSecret | string  | N        | gny account second password             |
| message      | string  | Y        | message with the transaction            |


Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


## Basic 

### Set second secret (contract)

```bash
setsecondsecret -e,--secret <secret> -s,--secondSecret <secret>
```

Request Parameter Description:

| Name         | Type    | Required | Description                             |
| ------------ | ------- | -------- | --------------------------------------- |
| secret       | string  | Y        | gny account password                    |
| secondSecret | string  | N        | gny account second password             |


Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


### Lock account (contract)

Prize: 0.1 GNY

```bash
lock -e,--secret <secret> -s,--secondSecret <secret> -h,--height <height> -m,--amount <amount>
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| height       | number | Y        | the height to be locked     |
| amount       | number | Y        | the amount to be locked     |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |


### Vote for a list of keys (contract)

Prize: 0.1 GNY

```bash
vote -e,--secret <secret> -s,--secondSecret <secret> -p,--publicKeys <keyList>
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

```bash
unvote -e,--secret <secret> -s,--secondSecret <secret> -p,--publicKeys <keyList>
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



### List diff voters

```bash
listdiffvotes -u, --username <username> -a, --address <address>
```

Request Parameter Description:

| Name       | Type   | Required | Description            |
| ---------- | ------ | -------- | ---------------------- |
| username   | string | Y        | delegate username      |
| address    | string | Y        | delegate address       |

Response Parameter Description:

| Name       | Type  | Required | Description        |
| ---------- | ----- | -------- | ------------------ |
| diffvotes  | Array | Y        | username  array    |