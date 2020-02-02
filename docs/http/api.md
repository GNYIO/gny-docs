# HTTP API

::: tip
Use the HTTP API wrapper [@gny/client](../client) for easier endpoint usage.
:::

## 1 API Usage Guide

### 1.1 Request Process Overview

- **Generate request data:** according the interface specification provided by HN system, generate the request data as a JSON object. (In one case, if you write about secure peer to peer transportation, you may need a JS library called gny-js to create signature. see [2.9 Peer to Peer transportation](# 29-peer-to-peer-transportation) for detail).
- **Send request data:** transfer the generated data object to gny platform through POST/GET method upon HTTP
- **gny system handles the data object:** after receiving the data object, gny server will validate the data firstly, then deal with it.
- **Return the response data:** gny system send the response data to client as a JSON object. See interface part for detail, like response data format and error code.
- **Client handles the response data**

## 2 Interface

### 2.1 Accounts

#### 2.1.1 Read Account

##### 2.1.1.1 Read Account with PublicKey

Interface Address: /api/accounts/open/  
Request Method: POST  
Supported Format: JSON  
Request Parameter Description:

| Name      | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| publicKey | string | Y        | GNY publicKey |

Response Parameter Description:

| Name    | Type | Description                 |
| ------- | ---- | --------------------------- |
| success | bool | Whether login is successful |
| account | json | Account information         |

Request Example:

```bash
curl -X POST --data "publicKey=41d36d74761593dcf1380faafcd487b84e014eba27c044d1aa87782d1cbd1a19" http://localhost:4096/api/accounts/openAccount/
```

JSON Response Example:

```json
{
  "account": {
    "address": "G2QEzc5BndQ2h6BsSNqimCWbSBV9L",
    "balance": 0,
    "secondPublicKey": "",
    "lockHeight": 0,
    "publicKey": "a87c7230d9ade987dbf612605aab652667e6303d2a1c6b2ec91a13733593bb75"
  },
  "latestBlock": {
    "height": 53,
    "timestamp": 3471490
  },
  "version": {
    "version": "1.0.0",
    "build": "Sun Feb 02 2020 19:42:18 GMT+0100 (Central European Standard Time)",
    "net": "testnet"
  }
}
```

#### 2.1.2 Get Account Information

Interface Address: /api/accounts  
Request Method: GET  
Supported Format: urlencoded  
Request Parameter Description:

| Name     | Type   | Required | Description      |
| -------- | ------ | -------- | ---------------- |
| address  | string | N        | account address  |
| username | string | N        | account username |

Response Parameter Description:

| Name        | Type | Description                           |
| ----------- | ---- | ------------------------------------- |
| success     | bool | whether response data can be returned |
| account     | json | account information                   |
| latestBlock | json | latest block information              |
| version     | json | version information                   |

Request Example (address):

```bash
curl -k -X GET http://localhost:4096/api/accounts?address=G4b8BhmeRFBmWAHZemKD25BmEP2G
```

Request Example (username):

```bash
curl -k -X GET http://localhost:4096/api/accounts?username=liangpeili
```

JSON Response Example (address):

```json
{
  "account": {
    "address": "G3wAwmGh3rimRm9v4qjuh7RkkAebM",
    "balance": 2000000000000,
    "secondPublicKey": "",
    "lockHeight": 0
  },
  "latestBlock": {
    "height": 5,
    "timestamp": 3472080
  },
  "version": {
    "version": "1.0.0",
    "build": "Sun Feb 02 2020 19:46:48 GMT+0100 (Central European Standard Time)",
    "net": "testnet"
  }
}
```

JSON Response Example (username):

```json
{
  "address": "G3wAwmGh3rimRm9v4qjuh7RkkAebM",
  "username": "liangpeili",
  "gny": 2000000000000,
  "publicKey": null,
  "secondPublicKey": null,
  "isDelegate": 1,
  "isLocked": 0,
  "lockHeight": 0,
  "lockAmount": 0,
  "_version_": 3
}
```

#### 2.1.3 Get Balance of Account

Interface Address: /api/accounts/getBalance  
Request Method: get  
Supported Format: urlencoded  
Request Parameter Description:

| Name    | Type   | Required | Description      |
| ------- | ------ | -------- | ---------------- |
| address | string | Y        | Client's address |
| limit   | number | N        |                  |
| offset  | number | N        |                  |

Response Parameter Description:

| Name     | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| success  | bool   | true: response data return successfully |
| count    | number | the total number of available balances  |
| balances | Array  | list of balances                        |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/accounts/getBalance?address=GJX8DYKb7mF3M6JCUhBqYnLiha6y'
```

JSON Response Example:

```js
{
  "success": true,
  "balances": [
    {
      "gny": "0"
    }
  ]
}
```

<!--
#### 2.1.4 Get Account's Public Key

Interface Address: /api/accounts/getPublickey
Request Method: GET
Supported Format: urlencoded
Request Parameter Description:

| Name    | Type   | Required | Description                        |
| ------- | ------ | -------- | ---------------------------------- |
| address | string | Y        | account's address              |

Response Parameter Description:

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| success   | bool   | true: response data return successfully |
| publicKey | string | public key                              |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/accounts/getPublickey?address=GJX8DYKb7mF3M6JCUhBqYnLiha6y'
```

JSON Response Example:

```js
{
	"success": true,
	"publicKey": "ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7"
}
```

-->

### 2.2 Transactions

#### 2.2.1 Get the Transaction Detail Information

Interface Address: /api/transactions  
Request Method: get  
Supported Format: urlencoded  
Comment： if there is no parameter in request data, all transactions will be returned.

Request Parameter Description:

| Name            | Type     | Required              | Description                                                                                         |
| --------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| limit           | integer  | N                     | the limitation of returned records，minimum：0,maximum：100                                         |
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
| count        | int   | the total number of available transactions                  |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/transactions?recipientId=16723473400748954103&orderBy=t_timestamp:desc&limit=3'
```

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

#### 2.2.3 Get Transaction Detail by Unconfirmed Transaction ID

Interface Address: /api/transactions/unconfirmed/get  
Request Method: GET  
Supported Format: urlencoded  
Info: A unconfirmed transaction is only available up to 10 seconds until it is confirmed
Request Parameter Description:

| Name | Type   | Required | Description                |
| ---- | ------ | -------- | -------------------------- |
| id   | string | Y        | unconfirmed transaction id |

Response Parameter Description:

| Name        | Type | Description                                |
| ----------- | ---- | ------------------------------------------ |
| success     | bool | true: response data return successfully    |
| transaction | json | unconfirmed transaction detail inforamtion |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/transactions/unconfirmed/get?id=1dd72aac3dd011754ea2ca80406014404acbe7550463232208c7ddaf63398c03'
```

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

#### 2.2.4 Get Unconfirmed Transaction Detail Information [within all network]

Interface Address: /api/transactions/unconfirmed  
Request Method: GET  
Supported Format: urlencoded  
Comment: If there is no parameter, all unconfirmed transactions in the whole network will be returned.
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

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/transactions/unconfirmed'
```

JSON Response Example:

```js
{
	"success": true,
	"transactions": []      //Currently there is no unconfirmed transaction in the whole network
}
```

### 2.2.5 Create a Batch of Transactions

Interface Address: /api/transactions/batch  
Request Method: PUT  
Supported Format: JSON

Request Parameter Description:  
|Name |Type |Required |Description |  
|------ |----- |--- |---- |  
|transactions |Array of transactions |Y | |

REquest Example:

```js
import * as gnyJS from "gny-js";
import axios from "axios";

const genesisSecret =
  "grow pencil ten junk bomb right describe trade rich valid tuna service";
const trs = gnyJS.basic.transfer(
  "GuQr4DM3aiTD36EARqDpbfsEHoNF",
  50 * 1e8,
  undefined,
  genesisSecret,
  undefined
);

const data = {
  transactions: [trs]
};

(async () => {
  try {
    const result = await axios.put(
      "http://localhost:4096/api/transactions/batch",
      data
    );
    console.log(JSON.stringify(result.data, null, 2));
  } catch (e) {
    console.log(JSON.stringify(e.response.data, null, 2));
  }
})();
```

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

### 2.3 Blocks

#### 2.3.1 Get the Block Detail Information of the Given ID

Interface Address: /api/blocks/get  
Request Method: GET  
Supported Format: urlencoded  
Request Parameter Description:

| Name   | Type   | Required                                  | Description  |
| ------ | ------ | ----------------------------------------- | ------------ |
| id     | string | only choose one of these three parameters | block ID     |
| height | string | ditto                                     | block height |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |
| block   | json | the block detail information            |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks/get?id=fed53e3ad0a1405f73122708ee53dfed2e9eccc34693d52043bdb6aec4751a8c'
```

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

#### 2.3.2 Get the Latest Block

Interface Address: /api/blocks  
Request Method: GET  
Supported Format: urlencoded  
Comment: if there is no parameter, the detail of all the blocks in the whole network will be returned  
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

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks?limit=2&offset=0&orderBy=height:desc'
```

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

#### 2.3.3 Get the Block Height

Interface Address: /api/blocks/getHeight  
Request Method: GET  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| height  | integer | block height                            |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks/getheight'
```

JSON Response Example:

```js
{
  "success":true,
  "height":140569
}
```

#### 2.3.5 Get the Milestone

Interface Address: /api/blocks/getMilestone  
Request Method: get  
Supported Format: none  
Request Parameter Description: none  
Response Parameter Description:

| Name      | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| success   | bool    | true: response data return successfully |
| milestone | integer |                                         |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks/getMilestone'
```

JSON Response Example:

```js
{
  "success":true,
  "milestone":0
}
```

#### 2.3.6 Get the Reward Information of a Block

Interface Address: /api/blocks/getReward  
Request Method: GET  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| reward  | integer | the reward of the block                 |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks/getReward'
```

JSON Response Example:

```js
{
  "success":true,
  "reward":200000000
} // every single block that is created will be rewarded by
```

#### 2.3.7 Get the Current Maximum Supply of the Blockchain

Interface Address: /api/blocks/getSupply  
Request Method: GET  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                                  |
| ------- | ------- | -------------------------------------------- |
| success | bool    | true: response data return successfully      |
| supply  | integer | the total amount of XAS in the whole network |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks/getSupply'
```

JSON Response Example:

```js
{
  "supply":"10000000000000000"
}
```

#### 2.3.8 Get Current Status of Blockchain

Interface Address: /api/blocks/getStatus  
Request Method: GET  
Supported Format: none  
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

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/blocks/getStatus'
```

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

### 2.4 Delegates

#### 2.4.1 Get the Total Number of Delegates

Interface Address: /api/delegates/count  
Request Method: get  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| count   | integer | total number of delegates               |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/delegates/count'
```

JSON Response Example:

```js
{"success":true,"count":234}
```

#### 2.4.2 Get Voters of Delegate by Delegate Public Key

Interface Address: /api/delegates/voters  
Request Method: GET  
Supported Format: urlencoded  
Request Parameter Description:

| Name      | Type   | Required | Description                |
| --------- | ------ | -------- | -------------------------- |
| publicKey | string | Y        | public key of the delegate |

Response Parameter Description:

| Name     | Type  | Description                             |
| -------- | ----- | --------------------------------------- |
| success  | bool  | true: response data return successfully |
| accounts | Array | a JSON object list of account           |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/delegates/voters?username=gny_d1'
```

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

#### 2.4.3 Get the Delegate's Detail by Public Key or Name

Interface Address: /api/delegates/get/  
Request Method: GET  
Supported Format: urlencoded  
Comment: Get the delegate's detail by his/her public key or user name  
Request Parameter Description:

| Name      | Type   | Required                                 | Description           |
| --------- | ------ | ---------------------------------------- | --------------------- |
| publickey | string | choose only one parameter of these three | delegate's public key |
| username  | string | ditto                                    | delegate's user name  |
| address   | string | ditto                                    | delgates's address    |

Response Parameter Description:

| Name     | Type | Description                             |
| -------- | ---- | --------------------------------------- |
| success  | bool | true: response data return successfully |
| delegate | JSON | the detail information of this delegate |

Request Example (publicKey):

```bash
curl -k -X GET 'http://localhost:4096/api/delegates/get?publicKey=85b4c2efe56642398dad3f1ec338e87e712063cfaee4a836cb58b673cdb820f4'
```

Request Example (username):

```bash
curl -k -X GET 'http://localhost:4096/api/delegates/get?username=gny_d1'
```

Request Example (address):

```bash
curl -k -X GET 'http://localhost:4096/api/delegates/get?address=G3kkkSaJNVY87AhVPyxXVGFpR61VB'
```

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

#### 2.4.4 Get the List of Delegates

Interface Address: /api/delegates  
Request Method: GET  
Supported Format: urlencoded  
Comment: if there is no parameter, all delegates in the whole network will be returned.
Request Parameter Description:

| Name    | Type    | Required | Description                                         |
| ------- | ------- | -------- | --------------------------------------------------- |
| address | string  | N        | delegate's address                                  |
| limit   | int     | N        | maximum return records                              |
| offset  | integer | N        | offset, minimum: 0                                  |
| orderBy | string  | N        | [field used to sort]:[sort type] e.g., address:desc |

Response Parameter Description:

| Name      | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| success   | bool   | true: response data return successfully         |
| delegates | Array  | a list containing delegates' detail information |
| count     | number | How many delegates exist overall?               |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/delegates?limit=2&offset=2'
```

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

#### 2.4.7 Enable Forging for Delegate

Interface Address: /api/delegates/forging/enable  
Request Method: POST  
Supported Format: urlencoded  
Request Parameter Description:

| Name      | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| secret    | string | Y        | GNY account password |
| publicKey | string | N        | public key           |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |

Request Example:

```bash
curl -k -H "Content-Type: application/json" -X POST -d '{"secret":"flat entire admit review filter addict friend author ahead bullet wife bind"}' 'http://localhost:4096/api/delegates/forging/enable'
```

JSON Response Example:

```js
{
  "success":true
}
```

#### 2.4.8 Disable Forging for Delegate

Interface Address: /api/delegates/forging/disable  
Request Method: POST  
Supported Format: urlencoded  
Request Parameter Description:

| Name      | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| secret    | string | Y        | GNY account password |
| publicKey | string | N        | public key           |

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |

Request Example:

```bash
curl -k -H "Content-Type: application/json" -X POST -d '{"secret":"flat entire admit review filter addict friend author ahead bullet wife bind"}' 'http://localhost:4096/api/delegates/forging/disable'
```

JSON Response Example:

```js
{
  "success":true
}
```

#### 2.4.9 Check Delgate Forging Status

Interface Address: /api/delegates/forging/status  
Request Method: GET  
Supported Format: urlencoded  
Request Parameter Description:

| Name      | Type   | Required | Description              |
| --------- | ------ | -------- | ------------------------ |
| publicKey | string | N        | public key of a delegate |

```bash
curl -X GET 'http://localhost:4096/api/dy=ff47c9e9bafcf28ae8528c2b259661ade96a3030ab73ddde82b52ee44c9122b5'
```

JSON Response Example (forging enabled):

```js
{
  "success":true,
  "enabled":true
}
```

JSON Response Example (forging disabled):

```js
{
  "success":true,
  "enabled":false
}
```

### 2.5 Peers

#### 2.5.1 Get all Peers' Information in the Whole Network

Interface Address: /api/peers  
Request Method: GET  
Supported Format: urlencoded  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| peers   | Array   | a JSON array of peers' information      |
| count   | integer | the number of currently running peers   |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/peers'
```

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

#### 2.5.2 Get the Version of Peer

Interface Address: /api/peers/version  
Request Method: GET  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type      | Description                             |
| ------- | --------- | --------------------------------------- |
| success | bool      | true: response data return successfully |
| version | string    | version number                          |
| build   | timestamp | built time                              |
| net     | string    | either localnet, testnet or mainnet     |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/peers/version'
```

JSON Response Example:

```js
{
  "success": true,
  "version": "1.0.5",
  "build": "Tue Jan 28 2020 12:44:42 GMT+0000 (Coordinated Universal Time)",
  "net": "localnet"
}
```

#### 2.5.3 Get Node P2P Information

Interface Address: /api/peers/version  
Request Method: GET  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name       | Type             | Description                                                                                               |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| success    | bool             | true: response data return successfully                                                                   |
| id         | string of peerId | libp2p [peer-id](https://www.npmjs.com/package/peer-id)                                                   |
| multiaddrs | string[]         | Array of [multiaddrs](https://www.npmjs.com/package/multiaddr) strings which is used for p2p communcation |
| publicIp   | string           | own public ip                                                                                             |
| address    | string           | ip address on which the server is listening. Normal this is a private ip address                          |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/peers/info'
```

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

### 2.6 Sync and Loader

#### 2.6.1 Get the local blockchain loadig status

Interface Address: /api/loader/status  
Request Method: get  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name        | Type    | Description                             |
| ----------- | ------- | --------------------------------------- |
| success     | bool    | true: response data return successfully |
| loaded      | bool    |                                         |
| blocksCount | integer |                                         |
| now         | integer |                                         |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/loader/status'
```

JSON Response Example:

```js
{
  "loaded":true,
  "now":0,
  "blocksCount":0
}
```

#### 2.6.2 Get the block syncing status

Interface Address: /api/loader/status/sync  
Request Method: get  
Supported Format: none  
Request Parameter Description: none

Response Parameter Description:

| Name    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| success | bool | true: response data return successfully |
| height  | int  | block height                            |

Request Example:

```bash
curl -k -X GET 'http://localhost:4096/api/loader/status/sync'
```

JSON Response Example:

```js
{
  "syncing":false,
  "blocks":0,
  "height":23
}
```

### **2.11 User Defined Asset UIA**

#### **2.11.1 Get all publishers**

API Endpoint: /api/uia/issuers  
HTTP Verb: GET  
Format: urlencoded

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| success | boolean | Whether operation was successful |
| issuers | Array   | Array of publishers              |
| count   | integer | Total number of publishers       |

Request example:

```js
curl -X GET 'http://localhost:4096/api/uia/issuers?offset=0&limit=2'
```

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

#### **2.11.2 Query information about a publisher by name**

API Endpoint: /api/uia/issuers/:name|address  
HTTP Verb: GET  
Format: urlencoded

Request Parameter Description:

| Name          | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| publisherName | string | Y        | Can be GNY publisher name      |
| address       | string | Y        | Can be the GNY account address |

Response Parameter Description:

| Name    | Type    | Description                                                   |
| ------- | ------- | ------------------------------------------------------------- |
| success | boolean | Whether operation was successful                              |
| issuers | JSON    | Contains the publisher name, description and id (GNY address) |

Request example (publisher name):

```js
curl -X GET 'http://localhost:4096/api/uia/issuers/AAA'
```

Request example (publisher address):

```js
curl -X GET 'http://localhost:4096/api/uia/issuers/G4GDW6G78sgQdSdVAQUXdm5xPS13t'
```

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

#### **2.11.3 View assets of a specified publisher**

API Endpoint: /api/uia/issuers/:publisherName/assets  
HTTP Verb: GET  
Format: urlencoded

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type     | Description                                            |
| ------- | -------- | ------------------------------------------------------ |
| success | boolean  | Whether operation was successful                       |
| assets  | Array    | Array of assets                                        |
| count   | interger | The total number of assets registered by the publisher |

Request example:

```js
curl -X GET 'http://localhost:4096/api/uia/issuers/AAA/assets/'
```

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

#### **2.11.4 Get all assets**

API Endpoint: /api/uia/assets  
HTTP Verb: GET  
Format: urlencoded

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| success | boolean | Whether operation was successful |
| assets  | Array   | Array of assets                  |
| count   | integer | Number of all assets             |

Request example:

```js
curl -X GET 'http://localhost:4096/api/uia/assets?offset=0&limit=2'
```

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

#### **2.11.5 Get specified asset information**

API Endpoint: /api/uia/assets/:name  
HTTP Verb: GET  
Format: urlencoded

Request Parameter Description:

| Name | Type   | Required | Description |
| ---- | ------ | -------- | ----------- |
| name | string | Y        | Asset name  |

Response Parameter Description:

| Name    | Type    | Description                                                                                       |
| ------- | ------- | ------------------------------------------------------------------------------------------------- |
| success | boolean | Whether operation was successful                                                                  |
| assets  | JSON    | Contains asset name, description, cap, precision, current circulation, issue height, publisher id |

Request example:

```js
curl -X GET 'http://localhost:4096/api/uia/assets/AAA.BBB'
```

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

#### **2.11.6 Get the balance of all UIA Assets for an account**

API Endpoint: /api/uia/balances/:address  
HTTP Verb: GET  
Format: urlencoded

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

Request example:

```bash
curl -X GET 'http://localhost:4096/api/uia/balances/G4GDW6G78sgQdSdVAQUXdm5xPS13t'
```

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

#### **2.11.6 Get balance of a specific UIA Assets for an account**

API Endpoint: /api/uia/balances/:address/:currency  
HTTP Verb: GET  
Format: urlencoded
Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| success | boolean | Whether operation was successful |

Request example:

```bash
curl -X GET 'http://localhost:4096/api/uia/balances/G4GDW6G78sgQdSdVAQUXdm5xPS13t/AAA.BBB'
```

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

### 2.9 Peer to Peer Transportation[secure API]

#### 2.9.1 Overview

To request a peer related API, it is required to set a header like this:

- key=magic, and value=594fe0f3
- key=version, and value=''

#### 2.9.2 Transaction

All the writing operations in GNY system are finished by starting a transaction.
The transaction data is generated through a JS library named "GNY-js", and then broadcasted by a POST API.
The POST API specification is as follows:

payload: transaction data generated by GNY-js
API Address: /peer/transactions  
Request Method: POST  
Supported Format: JSON

##### 2.9.2.1 Set the Second Payment Password

Request Parameter Description:

| Name        | Type | Required | Description                                                      |
| ----------- | ---- | -------- | ---------------------------------------------------------------- |
| transaction | json | Y        | transaction data generated by [gny-js.signature.createSignature] |

Response Parameter Description:

| Name    | Type | Description                           |
| ------- | ---- | ------------------------------------- |
| success | bool | whether the transaction is successful |

Request Example:

```js
var gny = require('gny-js');
var transaction = gny.signature.createSignature('measure bottom stock hospital calm hurdle come banner high edge foster cram','erjimimashezhi001')
console.log(JSON.stringify(transaction))
{"type":1,"amount":0,"fee":500000000,"recipientId":null,"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","timestamp":5328943,"asset":{"signature":{"publicKey":"27116db89cb5a8c02fb559712e0eabdc298480d3c79a089b803e35bc5ef7bb7b"}},"signature":"71ef98b1600f22f3b18cfcf17599db3c40727c230db817f610e86454b62df4fb830211737ff0c03c6a61ecfd4a9fcb68a30b2874060bb33b87766acf800e820a","id":"15605591820551652547"}

// submit above data of setting second password to gny server by POST method
curl -H "Content-Type: application/json" -H "magic:594fe0f3" -H "version:''" -k -X POST -d '{"transaction":{"type":1,"amount":0,"fee":500000000,"recipientId":null,"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","timestamp":5328943,"asset":{"signature":{"publicKey":"27116db89cb5a8c02fb559712e0eabdc298480d3c79a089b803e35bc5ef7bb7b"}},"signature":"71ef98b1600f22f3b18cfcf17599db3c40727c230db817f610e86454b62df4fb830211737ff0c03c6a61ecfd4a9fcb68a30b2874060bb33b87766acf800e820a","id":"15605591820551652547"}}' http://localhost:4096/peer/transactions
```

JSON Response Example:

```js
{
    "success":true  //setting is successful
}
```

##### 2.9.2.2 Transfer Money

Request Parameter Description:

| Name        | Type | Required | Description                                                          |
| ----------- | ---- | -------- | -------------------------------------------------------------------- |
| transaction | json | Y        | transaction data generated by [gny-js.transaction.createTransaction] |

Response Parameter Description:

| Name    | Type | Description                           |
| ------- | ---- | ------------------------------------- |
| success | bool | whether the transaction is successful |

Request Example:

```js
var gny = require('gny-js');
var targetAddress = "16358246403719868041";
var amount = 100*100000000;   //100 XAS
var password = 'measure bottom stock hospital calm hurdle come banner high edge foster cram';
var secondPassword  = 'erjimimashezhi001';

// in above code, password is recorded when user logs in. meanwhile the second password needs to be input every time by user.
// To input or not depends on whether user has second password, which can be identified by "user.secondPublicKey" function.

var transaction = gny.transaction.createTransaction(targetAddress, amount, password, secondPassword || undefined);
JSON.stringify(transaction)
'{"type":0,"amount":10000000000,"fee":10000000,"recipientId":"16358246403719868041","timestamp":5333378,"asset":{},"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","signature":"2d47810b7d9964c5c4d330a53d1382769e5092b3a53639853f702cf4a382aafcff8ef8663c0f6856a23f41c249944f0c3cfac0744847268853a62af5dd8fc90a","signSignature":"dfa9b807fff362d581170b41c56a2b8bd723c48d1f100f2856d794408723e8973016d75aeff4705e6837dcdb745aafb41aa10a9f1ff8a77d128ba3d712e90907","id":"16348623380114619131"}'

// submit above data of transfer to gny server by POST method
curl -H "Content-Type: application/json" -H "magic:594fe0f3" -H "version:''" -k -X POST -d '{"transaction":{"type":0,"amount":10000000000,"fee":10000000,"recipientId":"16358246403719868041","timestamp":5333378,"asset":{},"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","signature":"2d47810b7d9964c5c4d330a53d1382769e5092b3a53639853f702cf4a382aafcff8ef8663c0f6856a23f41c249944f0c3cfac0744847268853a62af5dd8fc90a","signSignature":"dfa9b807fff362d581170b41c56a2b8bd723c48d1f100f2856d794408723e8973016d75aeff4705e6837dcdb745aafb41aa10a9f1ff8a77d128ba3d712e90907","id":"16348623380114619131"}}' http://localhost:4096/peer/transactions
```

JSON Response Example:

```js
{
    "success":true  //transfer success
}
```

##### 2.9.2.3 Register Delegates

Request Parameter Description:

| Name        | Type | Required | Description                                                    |
| ----------- | ---- | -------- | -------------------------------------------------------------- |
| transaction | json | Y        | transaction data generated by [gny-js.delegate.createDelegate] |

Response Parameter Description:

| Name    | Type | Description                    |
| ------- | ---- | ------------------------------ |
| success | bool | whether transaction is success |

Request Example:

```js
var gny = require('gny-js');
var password = 'measure bottom stock hospital calm hurdle come banner high edge foster cram';
var secondPassword  = 'erjimimashezhi001';
var userName = 'zhenxi_test';

var transaction = gny.delegate.createDelegate(password, userName, secondPassword || undefined);
JSON.stringify(transaction)
'{"type":2,"amount":0,"fee":10000000000,"recipientId":null,"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","timestamp":5334485,"asset":{"delegate":{"username":"zhenxi_test","publicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f"}},"signature":"a12ce415d2d21ab46e4c1b918b8717b1d351dd99abd6f2f94d9a1a7e1f32b697f843a05b1851cb857ea45a2476dce592f5ddd612c00cd44488b8b610c57d7f0a","signSignature":"35adc9f1f37d14458e8588f9b4332eedf1151c02480159f64a287a4b0cbb59bfe82040dfec96a4d9560bae99b8eaa1799a7023395db5ddc640d95447992d6e00","id":"12310465407307249905"}'

// submit above data of registering delegate to gny server by POST method
curl -H "Content-Type: application/json" -H "magic:594fe0f3" -H "version:''" -k -X POST -d '{"transaction":{"type":2,"amount":0,"fee":10000000000,"recipientId":null,"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","timestamp":5334485,"asset":{"delegate":{"username":"zhenxi_test","publicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f"}},"signature":"a12ce415d2d21ab46e4c1b918b8717b1d351dd99abd6f2f94d9a1a7e1f32b697f843a05b1851cb857ea45a2476dce592f5ddd612c00cd44488b8b610c57d7f0a","signSignature":"35adc9f1f37d14458e8588f9b4332eedf1151c02480159f64a287a4b0cbb59bfe82040dfec96a4d9560bae99b8eaa1799a7023395db5ddc640d95447992d6e00","id":"12310465407307249905"}}' http://localhost:4096/peer/transactions
```

JSON Response Example:

```js
{
    "success":true  //register successfully
}
```

##### 2.9.2.4 Vote and Cancel the vote

Request Parameter Description:

| Name        | Type | Required | Description                                            |
| ----------- | ---- | -------- | ------------------------------------------------------ |
| transaction | json | Y        | transaction data generated by [gny-js.vote.createVote] |

Response Parameter Description:

| Name    | Type | Description                           |
| ------- | ---- | ------------------------------------- |
| success | bool | whether the transaction is successful |

Request Example:

```js
var gny = require('gny-js');
var password = 'measure bottom stock hospital calm hurdle come banner high edge foster cram';
var secondPassword  = 'erjimimashezhi001';
// the voting content is a list in which each item consists of a symbol (+ or -) and the delegate's public key. The "+" means vote, and "-" means cancel the vote.
var voteContent = [
    '-ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7',
    '+c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2'
];

var transaction = gny.vote.createVote(password, voteContent, secondPassword || undefined);
JSON.stringify(transaction)
{"type":3,"amount":0,"fee":10000000,"recipientId":null,"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","timestamp":5334923,"asset":{"vote":{"votes":["-ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7","+c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2"]}},"signature":"6036c2066a231c452a1c83aafd3bb9db3842ee05d5f17813f8264a4294cdec761faa89edf4a95f9b2e2451285807ab18aa9f989ad9a3165b95643179b8e4580f","signSignature":"a216ca739112e6f65986604b9467ccc8058138a7077faf134d6c4d673306cd1c514cc95bd54a036f7c602a56c4b4f2e4e59f6aa7c376cb1429e89054042e050b","id":"17558357483072606427"}

// submit above data of vote/cancel vote to gny server by POST method
curl -H "Content-Type: application/json" -H "magic:594fe0f3" -H "version:''" -k -X POST -d '{"transaction":{"type":3,"amount":0,"fee":10000000,"recipientId":null,"senderPublicKey":"3e6e7c90571b9f7dabc0abc2e499c2fcee8e436af3a9d5c8eadd82ac7aeae85f","timestamp":5334923,"asset":{"vote":{"votes":["-ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7","+c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2"]}},"signature":"6036c2066a231c452a1c83aafd3bb9db3842ee05d5f17813f8264a4294cdec761faa89edf4a95f9b2e2451285807ab18aa9f989ad9a3165b95643179b8e4580f","signSignature":"a216ca739112e6f65986604b9467ccc8058138a7077faf134d6c4d673306cd1c514cc95bd54a036f7c602a56c4b4f2e4e59f6aa7c376cb1429e89054042e050b","id":"17558357483072606427"}}' http://localhost:4096/peer/transactions
```

JSON Response Example:

```js
{
    "success":true  //transaction of vote/cancel the vote is success
}
```
