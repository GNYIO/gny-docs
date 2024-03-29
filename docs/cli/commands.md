# API

::: tip
Type `gny-cli [command] <parameter>` in your command line to invoke the commands.

INFO:

- `[command]` -> **optional**. If we have a paremter `--username [username]` then `--username` is correct and `--username xpgeng` is also correct.
- `<parameter>` -> **mandatory**. If we have a parameter `--username <username>` this means that for `<username>` a string must be substituted. This would be correct: `--username liang`. This would be wrong `--username`
  :::

## Account API

### Open account

```bash
gny-cli openaccount <publicKey>
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

```json
{
  "account": {
    "address": "G2QEzc5BndQ2h6BsSNqimCWbSBV9L",
    "balance": "20000000000",
    "secondPublicKey": null,
    "lockHeight": "0",
    "lockAmount": "0",
    "isDelegate": 0,
    "username": null,
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

### Get balance

```bash
gny-cli getbalance <address>
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

```json
{
  "count": 1,
  "balances": [
    {
      "gny": "400000000000"
    }
  ]
}
```

### Get the account by address

```bash
gny-cli getaccountbyaddress <address>
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

JSON Response Example:

```json
{
  "success": true,
  "account": {
    "address": "G3dGrHJfmZUFhAiYqytdrMG6rL4Lh",
    "balance": "69420000000",
    "secondPublicKey": null,
    "lockHeight": "3728000",
    "isDelegate": 1,
    "username": "hello",
    "publicKey": null
  },
  "latestBlock": {
    "height": "158644",
    "timestamp": 39368870
  },
  "version": {
    "version": "1.0.7",
    "build": "Fri Jan 31 2020 16:11:20 GMT+0000 (Coordinated Universal Time)",
    "net": "localnet"
  }
}
```

### Get account by username

```bash
gny-cli getaccountbyusername <username>
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

JSON Response Example:

```json
{
  "success": true,
  "address": "G3dGrHJfmZUFhAiYqytdrMG6rL4Lh",
  "username": "hello",
  "gny": "69420000000",
  "publicKey": null,
  "secondPublicKey": null,
  "isDelegate": 1,
  "isLocked": 1,
  "lockHeight": "3728000",
  "lockAmount": "60000000",
  "_version_": 15
}
```

### Count the number of accounts

```bash
gny-cli countaccounts
```

Request Parameter Description: none  
Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| count   | number | the total number of accounts            |

JSON Response Example:

```json
{
  "success": true,
  "count": 138
}
```

### Get voted delegates

```bash
gny-cli getvoteddelegates -u <username> -a <address>

gny-cli getvoteddelegates --username <username> --address <address>
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

```json
{
  "success": true,
  "delegates": [
    {
      "username": "wgl_002",
      "address": "GJX8DYKb7mF3M6JCUhBqYnLiha6y",
      "publicKey": "ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7",
      "vote": 9901985415600500,
      "producedblocks": "1373",
      "missedblocks": "6",
      "rate": "1",
      "approval": "98.54",
      "productivity": "99.56"
    },
    {
      "username": "wgl_003",
      "address": "G318FKKb7mF3M6JCUhBqYnLiha6y",
      "publicKey": "c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2",
      "vote": 9891995435600500,
      "producedblocks": "1371",
      "missedblocks": "8",
      "rate": "2",
      "approval": "98.44",
      "productivity": "99.41"
    },
    {
      "username": "wgl_001",
      "address": "1869971419039689816",
      "publicKey": "c547df2dde6cbb4508aabcb5970d8f9132e5a1d1c422632da6bc20bf1df165b8",
      "vote": 32401577128413,
      "producedblocks": "969",
      "missedblocks": "8",
      "rate": 102,
      "approval": "0.32",
      "productivity": "0"
    }
  ]
}
```

### Get publicKey by address

```bash
gny-cli getpublickey <address>
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
gny-cli genpublickey <secret>
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
gny-cli genaccount
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

```json
{
  "address": "G318FKKb7mF3M6JCUhBqYnLiha6y",
  "secret": "carpet pudding topple genuine relax rally problem before pill gun nation method",
  "publicKey": "c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2",
  "privateKey": "c68434b960ef024b2a868118be7641be25e566f720a5eb12ff314022629ccc71575bf8f32b941b9e6ae1af82539689198327b73d77d22a98cdef2460c9257f7b"
}
```

### Get balance by address and currency

```bash
gny-cli getbalancebyaddresscurrency -a <address> -c <currency>

gny-cli getbalancebyaddresscurrency --address <address> --currency <currency>
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

```json
{
  "success": true,
  "balance": "0"
}
```

## Block API

### Get block height

```bash
gny-cli getheight
```

Response Parameter Description:

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| success | bool   | true: response data return successfully |
| height  | string | block height                            |

JSON Response Example:

```json
{
  "success": true,
  "height": "140569"
}
```

### Get block by height

```bash
gny-cli getblockbyheight <height>
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
gny-cli getblockbyid <id>
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

```json
{
  "block": {
    "version": 0,
    "payloadHash": "3d2215b8d226b5a38ace219d0ab3f4d84830fd54a832dc05540e20ef81a00547",
    "timestamp": 0,
    "delegate": "61ca23509390845f06ccaa43384e889074dfd0c821e4ba3894f8e62b6a31895a",
    "height": "0",
    "count": 203,
    "fees": "0",
    "reward": "0",
    "signature": "d49b0d08b164c8df402dc1f24430d51126a05a9d1c4012fbdf89272ab95740454b11fd4b44dbf7c60d4757760d8015146433ae21e2e418fd0d7b3aa03adc5503",
    "id": "fed53e3ad0a1405f73122708ee53dfed2e9eccc34693d52043bdb6aec4751a8c"
  }
}
```

### Get blocks

```bash
gny-cli getblocks [-o <offset>] [-l <limit>] [-s <height:asc | height:desc>] [-t]

gny-cli getblocks [--offset <offset>] [--limit <limit>] [--sort <height:asc | height:desc>] [--transactions]
```

Request Parameter Description:

| Name         | Type    | Required | Description                                                                                       |
| ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------- |
| limit        | integer | N        | maximum number of returned records, between 0 and 100                                             |
| offset       | integer | N        | default is 0                                                                                      |
| orderBy      | string  | N        | sort height property, default is `height:asc`. Specify `height:desc` to sort by height descending |
| transactions | boolean | N        | When `--transactions` switch is used then the `transactions` property will be added to each block |

Response Parameter Description:

| Name    | Type    | Description                                    |
| ------- | ------- | ---------------------------------------------- |
| success | bool    | true: response data return successfully        |
| blocks  | Array   | a list of JSON objects containing block detail |
| count   | integer | number of blocks overall                       |

JSON Response Example:

```json
{
  "count": 56,
  "blocks": [
    {
      "version": 0,
      "delegate": "ee9191dff690c0a5b74bba5ab4bddeff60042154d66f2d5c7111123ae8cb4396",
      "height": "55",
      "prevBlockId": "f8d9d54ab0fbbeec1063472a9296e24e8336866de3b0ad5d514fd92ddc73b539",
      "timestamp": 3621850,
      "count": 0,
      "fees": "0",
      "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "reward": "0",
      "signature": "81b0090adc75346c8985ebe2c6341ba36eeb4b48a2a66ec69b701d55e35577f0dbdd5a633627098a7a64cb81dd1a9d6fbf13f7c0983fd162f46ef12c5468840f",
      "id": "e70c0b569ca877d262dadcd1967a02427a9996d8c189ee32b7c8bcff7fa3cff2"
    },
    {
      "version": 0,
      "delegate": "adc2fdf3174278b2d88f9a37d795fb720ab7530f72367e0aae863143b4b90259",
      "height": "54",
      "prevBlockId": "c3e75c7862a7cbe7f1933837704700bd158c2bd9fc6d1228327323003a0cdd15",
      "timestamp": 3620770,
      "count": 0,
      "fees": "0",
      "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "reward": "0",
      "signature": "a17bf15385b65dd84e94a7be6ccd635dc291f63b8128dd4951f7544fafa0632fc281e70dd597ae2770b228bdb581fd182f98fda7dc4a2d82cf8e94ff344ef604",
      "id": "f8d9d54ab0fbbeec1063472a9296e24e8336866de3b0ad5d514fd92ddc73b539"
    }
  ]
}
```

### Get milestone of last block

```bash
gny-cli getmilestone
```

Request Parameter Description: none
Response Parameter Description:

| Name      | Type   | Description                                                           |
| --------- | ------ | --------------------------------------------------------------------- |
| success   | bool   | true: response data return successfully                               |
| milestone | number | shows milestone of the last Block (the Block with the highest height) |

JSON Response Example:

```json
{
  "success": true,
  "milestone": 0
}
```

### Get current maximum supply of the blockchain

```bash
gny-cli getsupply
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type   | Description                                  |
| ------- | ------ | -------------------------------------------- |
| success | bool   | true: response data return successfully      |
| supply  | string | the total amount of GNY in the whole network |

JSON Response Example:

```json
{
  "success": true,
  "supply": "10000000000000000"
}
```

### Get current status of blockchain

```bash
gny-cli getstatus
```

Request Parameter Description: none

Response Parameter Description:

| Name      | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| success   | bool   | true: response data return successfully  |
| height    | string | blockchain height                        |
| fee       | string | transaction fee                          |
| milestone | number |                                          |
| reward    | number | block reward                             |
| supply    | string | total amount of GNY in the whole network |

JSON Response Example:

```json
{
  "success": true,
  "height": "158514",
  "fee": "10000000",
  "milestone": 0,
  "reward": 200000000,
  "supply": "40031271000000000"
}
```

### Get block bytes

```bash
gny-cli getblockbytes -f <file>
```

Request Parameter Description:

| Name | Type   | Required | Description     |
| ---- | ------ | -------- | --------------- |
| file | string | Y        | block file path |

Response Parameter Description:

| Name       | Type   | Description     |
| ---------- | ------ | --------------- |
| blockbytes | string | the block bytes |

### Get block id

```bash
gny-cli getblockid -f <file>
```

Request Parameter Description:

| Name | Type   | Required | Description     |
| ---- | ------ | -------- | --------------- |
| file | string | Y        | block file path |

Response Parameter Description:

| Name | Type   | Description  |
| ---- | ------ | ------------ |
| id   | string | the block id |

### Get block payload hash

```bash
gny-cli getblockpayloadhash -f <file>
```

Request Parameter Description:

| Name | Type   | Required | Description     |
| ---- | ------ | -------- | --------------- |
| file | string | Y        | block file path |

Response Parameter Description:

| Name        | Type   | Description            |
| ----------- | ------ | ---------------------- |
| payloadHash | string | the block payload hash |

## Delegate

### Count the number of delegates

```bash
gny-cli getdelegatescount
```

Request Parameter Description: none

Response Parameter Description:

| Name  | Type    | Description               |
| ----- | ------- | ------------------------- |
| count | integer | total number of delegates |

JSON Response Example:

```json
{
  "success": true,
  "count": 234
}
```

### Get the voters by username

```bash
gny-cli getvoters <username>
```

Request Parameter Description:

| Name     | Type   | Required | Description              |
| -------- | ------ | -------- | ------------------------ |
| username | string | Y        | username of the delegate |

Response Parameter Description:

| Name                 | Type   | Description                                                                                                                                                                                                                   |
| -------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success              | bool   | true: response data return successfully                                                                                                                                                                                       |
| accounts             | Array  | an array of accounts that voted for this delegate. In order to vote one doesn't need to be delegate. It is enough to have some GNY tokens locked. Only the locked GNY tokens add to the weight of the delegate in the ranking |
| accounts[0].delegate | Object | The `delegate` object on an account object is entirely optional. The `delegate` object appears only if the the account that voted is also a `delegate`.                                                                       |

JSON Response Example:

```json
{
  "success": true,
  "accounts": [
    {
      "address": "G3uxh6H3iB4mmtPYnzvpT9itQHCzz",
      "username": null,
      "gny": "19980000000",
      "publicKey": null,
      "secondPublicKey": null,
      "isDelegate": 0,
      "isLocked": 1,
      "lockHeight": "2500000",
      "lockAmount": "20000000000",
      "_version_": 5,
      "balance": "19980000000",
      "weightRatio": "0.00004964719289781813"
    },
    {
      "address": "GAeE4cWpKxs33gMrbJ7B5TXKBBQE",
      "username": "www",
      "gny": "19450000000",
      "publicKey": null,
      "secondPublicKey": null,
      "isDelegate": 0,
      "isLocked": 1,
      "lockHeight": "2600000",
      "lockAmount": "40000000000",
      "_version_": 11,
      "balance": "19450000000",
      "weightRatio": "0.00009929438579563626"
    },
    {
      "address": "GXDgJFW9nnSKYomtZirW8SqDDnqW",
      "username": "tonyt_gny",
      "gny": "2988814356531",
      "publicKey": null,
      "secondPublicKey": null,
      "isDelegate": 1,
      "isLocked": 1,
      "lockHeight": "173400",
      "lockAmount": "89000000000",
      "_version_": 13687,
      "balance": "2988814356531",
      "weightRatio": "0.00022093000839529067",
      "delegate": {
        "address": "GXDgJFW9nnSKYomtZirW8SqDDnqW",
        "tid": "3332ffe9344877de18ede0294fee8b350d36992e89e61d1672e813a894e323db",
        "username": "tonyt_gny",
        "publicKey": "e6408dcb79ac12cb2e61d77b869a146081f554e73501608a686a809043de0b88",
        "votes": "557100000000",
        "producedBlocks": "25341",
        "missedBlocks": "812",
        "fees": "2334356531",
        "rewards": "2986000000000",
        "_version_": 24342,
        "rate": 1,
        "approval": "0.001382922558168724",
        "productivity": "0.96895193668030436279"
      }
    }
  ]
}
```

### Get delegate by public key

```bash
gny-cli getdelegatebypublickey <publicKey>
```

Request Parameter Description:

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| publickey | string | Y        | delegate's public key |

Response Parameter Description:

| Name     | Type    | Description                             |
| -------- | ------- | --------------------------------------- |
| success  | boolean | Whether operation was successful        |
| delegate | JSON    | the detail information of this delegate |

JSON Response Example:

```json
{
  "success": true,
  "delegate": {
    "address": "G3dGrHJfmZUFhAiYqytdrMG6rL4Lh",
    "username": "hello",
    "tid": "a337fdde7850894130e69c446d849115c02f5bc1322104a94de00c4733a5a0eb",
    "publicKey": "0a1e7a145532a20b60d3d043b48baf6a3f794c8a32f5b7ed86ed09f89642e9ed",
    "votes": "60000000",
    "producedBlocks": "0",
    "missedBlocks": "361",
    "fees": "0",
    "rewards": "0",
    "_version_": 363,
    "rate": 1,
    "approval": "0.000000149882805885",
    "productivity": "99.99"
  }
}
```

### Get delegate by user name

```bash
gny-cli getdelegatebyusername <username>
```

Request Parameter Description:

| Name     | Type   | Required | Description          |
| -------- | ------ | -------- | -------------------- |
| username | string | Y        | delegate's user name |

Response Parameter Description:

| Name     | Type    | Description                             |
| -------- | ------- | --------------------------------------- |
| success  | boolean | Whether operation was successful        |
| delegate | JSON    | the detail information of this delegate |

JSON Response Example:

```json
{
  "success": true,
  "delegate": {
    "address": "G3dGrHJfmZUFhAiYqytdrMG6rL4Lh",
    "username": "hello",
    "tid": "a337fdde7850894130e69c446d849115c02f5bc1322104a94de00c4733a5a0eb",
    "publicKey": "0a1e7a145532a20b60d3d043b48baf6a3f794c8a32f5b7ed86ed09f89642e9ed",
    "votes": "60000000",
    "producedBlocks": "0",
    "missedBlocks": "222",
    "fees": "0",
    "rewards": "0",
    "_version_": 224,
    "rate": 1,
    "approval": "0.000000149893349383",
    "productivity": "99.99"
  }
}
```

### Get delegate by address

```bash
gny-cli getdelegatebyaddress <address>
```

Request Parameter Description:

| Name    | Type   | Required | Description        |
| ------- | ------ | -------- | ------------------ |
| address | string | Y        | delegate's address |

Response Parameter Description:

| Name     | Type    | Description                             |
| -------- | ------- | --------------------------------------- |
| success  | boolean | Whether operation was successful        |
| delegate | JSON    | the detail information of this delegate |

JSON Response Example:

```json
{
  "success": true,
  "delegate": {
    "address": "G3dGrHJfmZUFhAiYqytdrMG6rL4Lh",
    "username": "hello",
    "tid": "a337fdde7850894130e69c446d849115c02f5bc1322104a94de00c4733a5a0eb",
    "publicKey": "0a1e7a145532a20b60d3d043b48baf6a3f794c8a32f5b7ed86ed09f89642e9ed",
    "votes": "60000000",
    "producedBlocks": "0",
    "missedBlocks": "361",
    "fees": "0",
    "rewards": "0",
    "_version_": 363,
    "rate": 1,
    "approval": "0.00000014988279615",
    "productivity": "99.99"
  }
}
```

### Get the list of Delegates

```bash
gny-cli getdelegates [-o <offset>] [-l <limit>]

gny-cli getdelegates [--offset <offset>] [--limit <limit>]
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

```json
{
  "success": true,
  "totalCount": 103,
  "delegates": [
    {
      "address": "G3dGrHJfmZUFhAiYqytdrMG6rL4Lh",
      "username": "hello",
      "tid": "a337fdde7850894130e69c446d849115c02f5bc1322104a94de00c4733a5a0eb",
      "publicKey": "0a1e7a145532a20b60d3d043b48baf6a3f794c8a32f5b7ed86ed09f89642e9ed",
      "votes": "60000000",
      "producedBlocks": "0",
      "missedBlocks": "361",
      "fees": "0",
      "rewards": "0",
      "_version_": 363,
      "rate": 1,
      "approval": "0.000000149882784917",
      "productivity": "99.99"
    },
    {
      "address": "G3yguB3tazFf6bia3CU1RjXtv2iV6",
      "tid": "ce6fced7d207e7e55f92a3b68a2394f34b2404cba5c35ea31bf80d2bc871efd5",
      "username": "gny_d72",
      "publicKey": "feda901bb63e494e2f30865734e40aa0464f59f2a526a61648c86ba2faf1a952",
      "votes": "0",
      "producedBlocks": "1592",
      "missedBlocks": "0",
      "fees": "247623722",
      "rewards": "313520792052",
      "_version_": 3162,
      "rate": 2,
      "approval": "0",
      "productivity": "100.00"
    }
  ]
}
```

## Exchange

> WARNING  
> The following Exchange options are only unlocked for exchanges. This will not work for ordinary nodes

### Open your account and get the infomation by secret

```bash
gny-cli openaccountwithsecret <secret>
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

```json
{
  "account": {
    "address": "G2QEzc5BndQ2h6BsSNqimCWbSBV9L",
    "balance": "20000000000",
    "secondPublicKey": null,
    "lockHeight": "0",
    "lockAmount": "0",
    "isDelegate": 0,
    "username": null,
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

### Generate public key with secret

```bash
gny-cli genpublickey <secret>
```

open your account and get the infomation by secret

| Name   | Type   | Required | Description        |
| ------ | ------ | -------- | ------------------ |
| secret | string | N        | gny account secret |

Response Parameter Description:

| Name      | Type   | Description           |
| --------- | ------ | --------------------- |
| publicKey | string | gny account publicKey |

### Generate accounts

```bash
gny-cli genaccount
```

Response Parameter Description:

| Name     | Type  | Description   |
| -------- | ----- | ------------- |
| accounts | Array | account array |

## Peer

### Get peers

```bash
gny-cli getpeers
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | bool    | true: response data return successfully |
| peers   | Array   | a JSON array of peers' information      |
| count   | integer | the number of currently running peers   |

JSON Response Example:

```json
{
  "success": true,
  "peers": [
    {
      "id": {
        "id": "QmeDn2SETzxuENnAiynzWXjw78eDRiNLmwzNDtwb2XhVsi",
        "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDo9QnqRUmrO3uAqyoAAnjmDB7+lCSA9a7tAKv0vsq0fnq0/espA70e7sJZSjmHqOpP5Jyse3pjezMfSsBR80vQJheb0dOwCsZu/dJ2kA0nuXRZwOd7ZUUsRUh5oj5NFBrY3tuScq/HtbXDqMs0MZdlKIBkEseTnF1rLZw8fhIiY3AFwlJFUCNGKyrk2rk6IvrwMWshyBkr+r1pPfGp6W46/fw5gwdvRTgxCvmqkQq35uncosBbV2+lAimvviTfT7NR6SuLdkAb5TqC0kh7XJV2eu44TtHwI/rTQw0lfCg/WnRKA+uFyedeg3BcTzqjdnhkxP8v7KAMnxi8Z/3q50jbAgMBAAE="
      },
      "multiaddrs": [
        "/ip4/13.80.136.143/tcp/4097/p2p/QmeDn2SETzxuENnAiynzWXjw78eDRiNLmwzNDtwb2XhVsi"
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
        "/ip4/174.129.53.40/tcp/4097/p2p/QmPiFnYYNeuYBxqzA77bPPrpJ8AaGJQujMVFXYJEGbpMRR"
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

```bash
gny-cli getversion
```

Request Parameter Description: none

Response Parameter Description:

| Name    | Type      | Description                             |
| ------- | --------- | --------------------------------------- |
| success | bool      | true: response data return successfully |
| version | string    | version number                          |
| build   | timestamp | built time                              |
| net     | string    | either localnet, testnet or mainnet     |

JSON Response Example:

```json
{
  "success": true,
  "version": "1.0.5",
  "build": "Tue Jan 28 2020 12:44:42 GMT+0000 (Coordinated Universal Time)",
  "net": "localnet"
}
```

### Get info

```bash
gny-cli getinfo
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

```json
{
  "success": true,
  "id": "QmQbVdde9AeXSP3FoLyVNd3Fi3BjCe2tFyJV43bNWEBYSA",
  "multiaddrs": [
    "/ip4/20.188.42.0/tcp/4097/p2p/QmQbVdde9AeXSP3FoLyVNd3Fi3BjCe2tFyJV43bNWEBYSA"
  ],
  "publicIp": "20.188.42.0",
  "address": "10.0.3.4"
}
```

## System

### Get version

```bash
gny-cli getsysteminfo
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
gny-cli gettransactions [-l <limit>] [-o <offset>] [-i <id>] [--senderId <senderId>] [--senderPublicKey <senderPublicKey>] [-b <blockId>] [-h <height>] [-t <type>] [-m <message>]

gny-cli gettransactions [--limit <limit>] [--offset <offset>] [--id <id>] [--senderId <senderId>] [--senderPublicKey <senderPublicKey>] [--blockId <blockId>] [--height <height>] [--type <type>] [--message <message>]
```

Request Parameter Description:

| Name            | Type     | Required              | Description                                                                                         |
| --------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------- |
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

```json
{
  "success": true,
  "count": 1,
  "transactions": [
    {
      "transactionId": "42254052d4bc1e1132c316469194e6b756a6c0f086a24b00c05a91ced5502046",
      "senderId": "G25AKCRu8mK2b4QXq8Jk8bFiNfxeY",
      "recipientId": "G2MdtJJPCWTFGZ75QoP7Z5KowRhst",
      "recipientName": null,
      "currency": "gny",
      "amount": "10000000000000000",
      "timestamp": 0,
      "height": "0",
      "_version_": 1
    }
  ]
}
```

### Get unconfirmed transactions

```bash
gny-cli getunconfirmedtransactions [-k <senderPublicKey>] [-a <address>]

gny-cli getunconfirmedtransactions [--key <senderPublicKey>] [--address <address>]
```

Request Parameter Description:

| Name      | Type   | Required | Description                                                                                                                              |
| --------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| publicKey | string | N        | returns the unconfirmed Transaction where the `senderPublicKey` of the unconfiremd transaction matches the provided `publicKey` argument |
| address   | string | N        | returns the unconfirmed Transaction where the `senderId` of the unconfirmed transaction matches the provided `address` argument          |

Response Parameter Description:

| Name         | Type | Description                                |
| ------------ | ---- | ------------------------------------------ |
| transactions | json | unconfirmed transaction detail inforamtion |

JSON Response Example:

```json
[
  {
    "transactionId": "42254052d4bc1e1132c316469194e6b756a6c0f086a24b00c05a91ced5502046",
    "senderId": "G25AKCRu8mK2b4QXq8Jk8bFiNfxeY",
    "recipientId": "G2MdtJJPCWTFGZ75QoP7Z5KowRhst",
    "recipientName": null,
    "currency": "gny",
    "amount": "10000000000000000",
    "timestamp": 0,
    "height": 0,
    "_version_": 1
  }
]
```

### Get unconfirmed transaction by transaction id

```bash
gny-cli getunconfirmedtransaction <id>
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

### Send money (contract)

Price: 0.1 GNY

```bash
gny-cli sendmoney -e <secret> -a <amount> -r <recipientId> [-m <message>] [-s <secondSecret>]

gny-cli sendmoney --secret <secret> --amount <amount> --recipient <recipientId> [--message <message>] [--secondSecret <secondSecret>]
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
gny-cli gettransactionbytes -f <file>
```

Request Parameter Description:

| Name | Type   | Required | Description           |
| ---- | ------ | -------- | --------------------- |
| file | string | Y        | transaction file path |

Response Parameter Description:

| Name             | Type   | Description           |
| ---------------- | ------ | --------------------- |
| transactionbytes | string | the transaction bytes |

### Get transaction id

```bash
gny-cli gettransactionid -f <file>
```

Request Parameter Description:

| Name | Type   | Required | Description           |
| ---- | ------ | -------- | --------------------- |
| file | string | Y        | transaction file path |

Response Parameter Description:

| Name          | Type   | Description        |
| ------------- | ------ | ------------------ |
| transactionId | string | the transaction id |

### Verify transaction bytes

```bash
gny-cli verifybytes -b <bytes> -s <signature> -p <publicKey>
```

Request Parameter Description:

| Name      | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| bytes     | string | Y        | transaction bytes              |
| signature | string | Y        | transaction or block signature |
| publicKey | string | Y        | signer public key              |

Response Parameter Description:

| Name   | Type    | Description                 |
| ------ | ------- | --------------------------- |
| resule | boolean | true: verified successfully |

### Send transaction with fee

```bash
gny-cli transaction -e <secret> -t <type> -a <args> -m <message> -f <fee> [-m <message>] [-s <secondSecret>]

gny-cli transaction --secret <secret> --type <type> --args <args> --fee <fee> [--message <message>] [--secondSecret <secret>]
```

Request Parameter Description:

| Name         | Type   | Required | Description                                       |
| ------------ | ------ | -------- | ------------------------------------------------- |
| secret       | string | Y        | GNY account password                              |
| type         | number | Y        | transaction type                                  |
| args         | Array  | Y        | array of arguments for contract                   |
| fee          | string | Y        | transaction fee                                   |
| message      | string | N        | message with the transaction                      |
| secondSecret | string | N        | sender's second password (only if previously set) |

Response Parameter Description:

| Name          | Type   | Description    |
| ------------- | ------ | -------------- |
| transactionId | string | transaction id |

## User Defined Asset UIA

### Get all publishers

```bash
gny-cli getissuers [-o <offset>] [-l <limit>]

gny-cli getissuers [--offset <offset>] [--limit <limit>]
```

Request Parameter Description:

| Name   | Type   | Required | Description                                            |
| ------ | ------ | -------- | ------------------------------------------------------ |
| limit  | number | N        | maximum number of records to return, between 0 and 100 |
| offset | number | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | boolean | true: response data return successfully |
| issues  | Array   | Array of publishers                     |
| count   | number  | Total number of publishers              |

JSON Response:

```json
{
  "count": 1,
  "issues": [
    {
      "tid": "279ee5d155f25bd5eb7f09b63a6e096b89e22ff70b5b8a9858cfd19dc21149d3",
      "name": "AAA",
      "issuerId": "G4GDW6G78sgQdSdVAQUXdm5xPS13t",
      "desc": "\"some description\"",
      "_version_": 1
    }
  ]
}
```

### Check if the address is a publisher

```bash
gny-cli isissuer <address>
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

```json
{
  "success": true,
  "isIssuer": true,
  "issuerName": "AAA"
}
```

```json
{
  "success": true,
  "isIssuer": false
}
```

### Query information about a publisher

```bash
gny-cli getissuer <name or address>
```

Request Parameter Description:

| Name                     | Type   | Required | Description                          |
| ------------------------ | ------ | -------- | ------------------------------------ |
| publisherName or address | string | Y        | Can be GNY publisher name or address |

Response Parameter Description:

| Name    | Type    | Description                                                   |
| ------- | ------- | ------------------------------------------------------------- |
| success | boolean | Whether operation was successful                              |
| issuer  | JSON    | Contains the publisher name, description and id (GNY address) |

JSON Response:

```json
{
  "issuer": {
    "tid": "c194bf2d4ccb1d07829f161165b307332d91a14f44a71a7a99a28dea8154e524",
    "name": "AAA",
    "issuerId": "G4GDW6G78sgQdSdVAQUXdm5xPS13t",
    "desc": "\"some description\"",
    "_version_": 1
  }
}
```

### View assets of a specified publisher

```bash
gny-cli getissuerassets <name>
```

Request Parameter Description:

| Name   | Type    | Required | Description                                            |
| ------ | ------- | -------- | ------------------------------------------------------ |
| name   | string  | Y        | GNY issuer name. For example `MARCUS`                  |
| limit  | integer | N        | maximum number of records to return, between 0 and 100 |
| offset | integer | N        | Offset, minimum 0                                      |

Response Parameter Description:

| Name    | Type     | Description                                          |
| ------- | -------- | ---------------------------------------------------- |
| success | boolean  | true: response data return successfully              |
| assets  | Array    | Array of assets                                      |
| count   | interger | The total number of assets registered by this issuer |

JSON Response:

```json
{
  "success": true,
  "count": 1,
  "assets": [
    {
      "name": "ISSUER.ASSET",
      "tid": "333b5854f9ce60dd2c6cb71999b750f62691ebad78a9ec6f9fec390eee70db4d",
      "timestamp": 98784628,
      "maximum": "100000000000000000",
      "precision": 8,
      "quantity": "100000000000000000",
      "desc": "descr",
      "issuerId": "G2b5NLaaXrfGFHsJpdTfeHZveth85",
      "_version_": 2,
      "issuer": {
        "name": "ISSUER",
        "tid": "6026a23a06f3d05ee082b7843a234bbbc13b54f97d0dadc1131f17f6062050b8",
        "issuerId": "G2b5NLaaXrfGFHsJpdTfeHZveth85",
        "desc": "my issuer",
        "_version_": 1
      }
    }
  ]
}
```

### Get all assets

```bash
gny-cli getassets [-o <offset>] [-l <limit>]

gny-cli getassets [--offset <offset>] [--limit <limit>]
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

```json
{
  "success": true,
  "count": 3,
  "assets": [
    {
      "name": "FIRST.AAA",
      "tid": "9a8848352cc22bfcf75cb3cacc9b6db1cbc4262cd2fa483d95853469b6ceb42b",
      "timestamp": 82044060,
      "maximum": "10000000000000000",
      "precision": 8,
      "quantity": "0",
      "desc": "aaa",
      "issuerId": "GhaMhSdrVCG4Juw1NPTvxY6YAVTF",
      "_version_": 1,
      "issuer": {
        "name": "FIRST",
        "tid": "5a44da33e3df355ec717968436f304af9f21d8f25b8ec01ed2c22b8fd6ebad6f",
        "issuerId": "GhaMhSdrVCG4Juw1NPTvxY6YAVTF",
        "desc": "first",
        "_version_": 1
      }
    },
    {
      "name": "yarooo.YAR",
      "tid": "204dcc7a77f823a7abb96830ddace9c4d91df1806a57810a1f1e76daf7ae63ea",
      "timestamp": 98558028,
      "maximum": "10000000000000000",
      "precision": 8,
      "quantity": "20000000000000",
      "desc": "yarooo coin",
      "issuerId": "G4V8YbZtXz7VZrpiD4trDPG8RtjUh",
      "_version_": 2,
      "issuer": {
        "name": "yarooo",
        "tid": "e97169d3453b519c4e0c7196510a9189aa7a40f0026ea2fe8396e8b19af6a001",
        "issuerId": "G4V8YbZtXz7VZrpiD4trDPG8RtjUh",
        "desc": "yarooo coin",
        "_version_": 1
      }
    },
    {
      "name": "ISSUER.ASSET",
      "tid": "333b5854f9ce60dd2c6cb71999b750f62691ebad78a9ec6f9fec390eee70db4d",
      "timestamp": 98784628,
      "maximum": "100000000000000000",
      "precision": 8,
      "quantity": "100000000000000000",
      "desc": "descr",
      "issuerId": "G2b5NLaaXrfGFHsJpdTfeHZveth85",
      "_version_": 2,
      "issuer": {
        "name": "ISSUER",
        "tid": "6026a23a06f3d05ee082b7843a234bbbc13b54f97d0dadc1131f17f6062050b8",
        "issuerId": "G2b5NLaaXrfGFHsJpdTfeHZveth85",
        "desc": "my issuer",
        "_version_": 1
      }
    }
  ]
}
```

### Get specified asset information

```bash
gny-cli getasset <name>
```

Request Parameter Description:

| Name | Type   | Required | Description |
| ---- | ------ | -------- | ----------- |
| name | string | Y        | Asset name  |

Response Parameter Description:

| Name    | Type    | Description                             |
| ------- | ------- | --------------------------------------- |
| success | boolean | true: response data return successfully |
| asset   | JSON    | The requested asset                     |

JSON Response:

```json
{
  "success": true,
  "asset": {
    "name": "FIRST.AAA",
    "tid": "9a8848352cc22bfcf75cb3cacc9b6db1cbc4262cd2fa483d95853469b6ceb42b",
    "timestamp": 82044060,
    "maximum": "10000000000000000",
    "precision": 8,
    "quantity": "0",
    "desc": "aaa",
    "issuerId": "GhaMhSdrVCG4Juw1NPTvxY6YAVTF",
    "_version_": 1,
    "issuer": {
      "name": "FIRST",
      "tid": "5a44da33e3df355ec717968436f304af9f21d8f25b8ec01ed2c22b8fd6ebad6f",
      "issuerId": "GhaMhSdrVCG4Juw1NPTvxY6YAVTF",
      "desc": "first",
      "_version_": 1
    }
  }
}
```

### Get the balance of all UIA Assets for an account

```bash
gny-cli getbalances -a <address> [-l <limit>] [-o <offset>]

gny-cli getbalances --adress <address> [--limit <limit>] [--offset <offset>]
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

```json
{
  "count": 1,
  "balances": [
    {
      "address": "G4GDW6G78sgQdSdVAQUXdm5xPS13t",
      "currency": "AAA.BBB",
      "balance": "500000000",
      "flag": 2,
      "_version_": 1
    }
  ]
}
```

### Send asset (contract)

Price: 10000000

```bash
gny-cli sendasset -e <secret> -c <currency> -a <amount> -r <address> [-m <message>] [-s <secret>]

gny-cli sendasset --secret <secret> --currency <currency> --amount <amount> --recipient <address> [--message <message>] [--secondSecret <secret>]
```

Request Parameter Description:

| Name         | Type   | Required | Description                             |
| ------------ | ------ | -------- | --------------------------------------- |
| secret       | string | Y        | gny account password                    |
| currency     | string | Y        | a specific UIA Asset                    |
| amount       | number | Y        | amount, between 1 and 10000000000000000 |
| recipient    | string | Y        | recipient's address                     |
| message      | string | N        | message with the transaction            |
| secondSecret | string | N        | gny account second password             |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Register as a delegate (contract)

Price: 100 GNY

```bash
gny-cli registerdelegate --secret <secret> [--secondSecret <secret>]
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

## Basic

### Set second secret (contract)

Price: 5 GNY

```bash
gny-cli setsecondsecret -e <secret> -s <secret>

gny-cli setsecondsecret --secret <secret> --secondSecret <secret>
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| secret       | string | Y        | gny account password        |
| secondSecret | string | Y        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Lock account (contract)

Price: 0.1 GNY

```bash
gny-cli lock -e <secret> -h <height> -m <amount> [-s <secret>]

gny-cli lock --secret <secret> --height <height> --amount <amount> [--secondSecret <secret>]
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| secret       | string | Y        | gny account password        |
| height       | number | Y        | the height to be locked     |
| amount       | number | Y        | the amount to be locked     |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Vote for a list of keys (contract)

Price: 0.1 GNY

```bash
gny-cli vote -e <secret> -u <usernames> [--s <secret>]

gny-cli vote --secret <secret> --usernames <usernames> [--secondSecret <secret>]
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| usernames    | Array  | Y        | delegate usernames          |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### Unvote for a list of keys (contract)

Price: 0.1 GNY

```bash
gny-cli unvote -e <secret> -u <usernames> [-s <secret>]

gny-cli unvote --secret <secret> --usernames <usernames> [--secondSecret <secret>]
```

Request Parameter Description:

| Name         | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| usernames    | Array  | Y        | delegate usernames          |
| secret       | string | Y        | gny account password        |
| secondSecret | string | N        | gny account second password |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

### List diff voters

```bash
gny-cli listdiffvotes [-u <username>] [-a <address>]

gny-cli listdiffvotes [--username <username>] [--address <address>]
```

Request Parameter Description:

| Name     | Type   | Required | Description       |
| -------- | ------ | -------- | ----------------- |
| username | string | Y        | delegate username |
| address  | string | Y        | delegate address  |

Response Parameter Description:

| Name      | Type  | Required | Description    |
| --------- | ----- | -------- | -------------- |
| diffvotes | Array | Y        | username array |

## Maintenance

### Create P2P Secret

```bash
gny-cli createp2psecret
```

Response Parameter Description:

| Name    | Type   | Required | Description                                                  |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| id      | string | Y        | [peer-id](https://www.npmjs.com/package/peer-id) id          |
| privKey | string | Y        | [peer-id](https://www.npmjs.com/package/peer-id) private key |
| pubKey  | string | Y        | [peer-id](https://www.npmjs.com/package/peer-id) private key |

JSON Response Example:

```json
{
  "id": "QmS8qAn5UYykHD2FpqmELMTDFAB5WKBSWiKJWX4U7cnnR3",
  "privKey": "CAASpwkwggSjAgEAAoIBAQ...",
  "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwg..."
}
```
