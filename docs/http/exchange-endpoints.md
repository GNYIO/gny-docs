# Exchange Endpoints

The following endpoints are exclusively for Exchanges. This endpoints are not reachable on default - they need to be **enabled first**. The Exchange endpoints work with plain text `secrets`. This is normally not recommended for node operators, because a malicious Blockchain nodes could log users `secrets` and steal all assets.

## Enable Exchange Endpoints

**IMPORTANT**  
To enable the Exchange endpoints (`/api/exchange`) start the GNY Blockchain with the environment variable `EXCHANGE_API=true`

Adapt your `docker-compose.yml` file and pass the environment variable to the GNY Blockchain:

```yml
version: "3.3"
services:
  # db1 service omitted
  node1:
    build: .
    container_name: "node1"
    image: gny-experiment
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 1; done; node packages/main/dist/src/app --ormConfig "ormconfig.integration.json"'
    environment:
      - NODE_ENV="production"
      - EXCHANGE_API=true # this activates the /api/exchange endpoints
    ports:
      - "4096:4096"
      - "4097:4097"
    depends_on:
      - db1
```

## 1 Exchange Endpoints

### 1.1 Send unsigned Transaction

Interface Address: /api/exchange/  
Request Method: PUT  
Supported Format: JSON  
Request Parameter Description:

| Name         | Type   | Required | Description                                                                                    |
| ------------ | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| secret       | string | Y        | GNY account password                                                                           |
| secondSecret | string | N        | sender's second password (must fit the BIP39 standard), the length should be between 1 and 100 |
| fee          | string | Y        | the fee you want to pay, there are minimums depending on the contract you are using            |
| type         | number | Y        | the contract type. This is an integer                                                          |
| args         | Array  | Y        | the arguments with which the contract should be invoked                                        |
| message      | string | N        | optional message, max length 256 characters                                                    |

Response Parameter Description:

| Name          | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| success       | bool   | true: response data return successfully |
| transactionId | string | transaction id                          |

Request Example:

```bash
curl -k -H "Content-Type: application/json" -X PUT -d '{"secret":"grow pencil ten junk bomb right describe trade rich valid tuna service", "type":0, "args":[100000000,"G4GDW6G78sgQdSdVAQUXdm5xPS13t"], "fee": "10000000"}' 'http://localhost:4096/api/exchange/'
```

JSON Response Example:

```js
{
	"success": true,
	"transactionId": "638d7754c226df313b1475c29d57d3e8bed379c3010f17182e864b06b3c33d75"
}
```

### 1.2 Open Account with Secret

Interface Address: /api/exchange/openAccount/  
Request Method: POST  
Supported Format: json  
Request Parameter Description:

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| secret | string | Y        | gny account password |

Response Parameter Description:

| Name    | Type | Description                 |
| ------- | ---- | --------------------------- |
| success | bool | Whether login is successful |
| account | json | Account information         |

Request Example:

```bash
curl -X POST -H "Content-Type: application/json" -k -d '{"secret":"fault still attack alley expand music basket purse later educate follow ride"}' http://localhost:4096/api/exchange/openAccount/
```

JSON Response Example:

```json
{
  "account": {
    "address": "G4b8BhmeRFBmWAHZemKD25BmEP2G",
    "balance": 0,
    "secondPublicKey": "",
    "lockHeight": 0,
    "publicKey": "bd1e78c5a10fbf1eca36b28bbb8ea85f320967659cbf1f7ff1603d0a368867b9"
  },
  "latestBlock": {
    "height": 53,
    "timestamp": 3471490
  },
  "version": {
    "version": "1.0.0",
    "build": "DEFAULT_BUILD_TIME",
    "net": "testnet"
  }
}
```

### 1.3 Generate Account

Interface Address: /api/exchange/generateAccount  
Request Method: POST  
Supported Format: json  
Request Parameter Description: None

Response Parameter Description:

| Name       | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| success    | bool   | Whether operation was successful |
| secret     | string | GNY account `secret`             |
| publicKey  | string | publicKey of GNY account         |
| privateKey | string | privateKey of GNY account        |
| address    | string | address of GNY account           |

Request Example:

```bash
curl -X POST "http://localhost:4096/api/exchange/generateAccount/"
```

JSON Response Example:

```json
{
  "success": true,
  "secret": "strategy vicious bar rude flee myself current brief million dress view square",
  "publicKey": "92f969f2fda2080777e18b7e2dc4ab75eec4e802534befeba9f8b38fe6f3470c",
  "privateKey": "fd78f7cb6746e029d8d1b307c179bbdd77774c561d036b6a3c799987c4de276592f969f2fda2080777e18b7e2dc4ab75eec4e802534befeba9f8b38fe6f3470c",
  "address": "G3up2HLLTbSMZ7JSPfqAw7Se4SRxX"
}
```

### 1.4 Generate PublicKey from secret

Interface Address: /api/exchange/generatePublicKey/  
Request Method: POST  
Supported Format: json  
Request Parameter Description:

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| secret | string | Y        | gny account `secret` |

Response Parameter Description:

| Name      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| success   | bool   | Whether login is successful |
| publicKey | string | publicKey of GNY account    |

Request Example:

```bash
curl -X POST -H "Content-Type: application/json" -k -d '{"secret":"uncover gentle depend any sponsor service vast sock balance pole tilt hint"}' http://localhost:4096/api/exchange/generatePublicKey/
```

JSON Response Example:

```json
{
  "success": true,
  "publicKey": "eafa6d559bf3121de489ab792dc6e5c36a5a85955f4a8bcd8508df7a43215572"
}
```
