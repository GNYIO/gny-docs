# FAQ

### What is a `secret`?

A `secret` is a twelve word long phrase. It is also known as the [`BIP39`](https://en.bitcoin.it/wiki/Seed_phrase) standard. This is an example of a `secret`:

```
struggle chapter wolf goddess course sure stairs skate surround divert knee quick
```

From the `secret` the `publicKey`, `privateKey` and `address` can be calculated:

```json
{
  "secret": "struggle chapter wolf goddess course sure stairs skate surround divert knee quick",
  "address": "G4GuH5FUgLe2xjhxqz4C6ECQcdCp8",
  "publicKey": "d0d12d87074296bf3819ce3bd296fb182d4646e9f5693dbaf0cb7338c3f5386f"
}
```

The `secret` in the GNY network is used to:

- Access your funds
- Initiate transactions
- Activate Forging for Delegates

::: warning  
Never disclose or share you `secret` with anyone. Be careful with which website you use your `secret` with. Always double check. Write the twelve word phrase onto a paper and keep it save.
:::

### Whats a `multiaddr`?

The [`multiaddr`](https://www.npmjs.com/package/multiaddr) is part of the [`multiformats`](https://github.com/multiformats) project, which itself is part of the [`libp2p`](https://github.com/libp2p/) universe and the [`ipfs`](https://github.com/ipfs) universe.

A `multiaddr` describes a self-describing network address. Like:

```
/ip4/20.174.24.9/tcp/4097/ipfs/QmRHqTMqdtmomUu7rSnikhnFtKx3B1gaXzctvr2TtLLJmE
```

### Whats a `p2pSecret`?

The `p2pSecret` is used to identify a P2P node (on the P2P port) and encrypt the P2P communication.

```json
{
  "id": "QmRHqTMqdtmomUu7rSnikhnFtKx3B1gaXzctvr2TtLLJmE",
  "privKey": "CAASqAkwggSkAgEAAoIBAQDCAwXZkfl...",
  "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDCAwXZ..."
}
```

### What is a `Genesis` Account?

A `Genesis` Account is the first Account in a Blockchain. In the GNY Blockchain the `Genesis` Account has initially 400 million GNY which are later distributed.

Down below you will find the the `Genesis` Account for the `localnet`. The `localnet` is only for local development. If you want to user another account for your `localnet` then transfer GNY to another address. Otherwise only the `Genesis` Account can invoke contracts.

```json
{
  "keypair": {
    "publicKey": "575bf8f32b941b9e6ae1af82539689198327b73d77d22a98cdef2460c9257f7b",
    "privateKey": "c68434b960ef024b2a868118be7641be25e566f720a5eb12ff314022629ccc71575bf8f32b941b9e6ae1af82539689198327b73d77d22a98cdef2460c9257f7b"
  },
  "address": "G4GDW6G78sgQdSdVAQUXdm5xPS13t",
  "secret": "grow pencil ten junk bomb right describe trade rich valid tuna service"
}
```

### What are `contracts`?

Contracts are the only tools that can change the Blockchain. If you want to transfer GNY to another account, you will need to invoke a contract. You invoke a contract by broadcasting a Transaction. This is getting pretty technical. If you use the Wallet, the technical aspect is hidden behind the graphical user interface.

Here is a full list of all available contracts currently in the GNY Blockchain:

| Contract Type |            Name             |                    Description                     | Prize (GNY) |
| :-----------: | :-------------------------: | :------------------------------------------------: | :---------: |
|       0       |      `basic.transfer`       |     Transfer `GNY` from one account to another     |     0.1     |
|       1       |     `basic.setUserName`     |             Set `username` for Account             |      5      |
|       2       | `basic.setSecondPassphrase` |     Set `secondPassPhrase` for current Account     |      5      |
|       3       |        `basic.lock`         |      Lock Account until specific Block height      |     0.1     |
|       4       |        `basic.vote`         |                Vote for a Delegate                 |     0.1     |
|       5       |       `basic.unvote`        |                  Unvote Delegate                   |     0.1     |
|       6       |       `basic.unlock`        | Unlock Account after lock Block height was reached |      0      |
|      10       |  `basic.registerDelegate`   |            Register Account as Delegate            |     100     |
|      100      |    `uia.registerIssuer`     |          Register Account as Asset Issuer          |     100     |
|      101      |     `uia.registerAsset`     |                 Register an Asset                  |     500     |
|      102      |         `uia.issue`         |               Issue registered Asset               |     0.1     |
|      103      |       `uia.transfer`        |          Transfer Asset to other Account           |     0.1     |

### What is a Block period?

Every 10 seconds a Block is mined.

### What is a `network` type?

WIP
