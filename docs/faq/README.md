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

> WARNING  
> Never disclose or share you `secret` with anyone. Be careful with which website you use your `secret` with. Always double check. Write the twelve word phrase onto a paper and keep it save.

### Whats a `multiaddr`?

The [`multiaddr`](https://www.npmjs.com/package/multiaddr) is part of the [`multiformats`](https://github.com/multiformats) project, which itself is part of the [`libp2p`](https://github.com/libp2p/) universe and the [`ipfs`](https://github.com/ipfs) universe.

A `multiaddr` describes a self-describing network address. Like:

```
/ip4/20.174.24.9/tcp/4097/ipfs/QmRHqTMqdtmomUu7rSnikhnFtKx3B1gaXzctvr2TtLLJmE
```

This can be read as

### Whats a `p2pSecret`?

The `p2pSecret` is used to identify a P2P node (on the P2P port) and encrypt the P2P communication.

```json
{
  "id": "QmRHqTMqdtmomUu7rSnikhnFtKx3B1gaXzctvr2TtLLJmE",
  "privKey": "CAASqAkwggSkAgEAAoIBAQDCAwXZkflrt9zgdgHuYiP28o7NTHKMhqOcTM/ZYnKCOEtr2/YsixUGI2MU0gaLSaXiJ1fZoYMZ0l+MhSVcnj3xgihKJJuQnlxQe77djUlLdcXCuSwC8H8/MMty4f5Kg0Srfl3zatIIUQgRA2MpWUxe7hQ/hPHfcy+tZC0Cy3aPsNorfk2L0CFKT1DcMf23BVdlANaWwaVhSheFUj6Z1dqSAcOSgMQve/ECUocxLyhx6xQCpsoR2tHeUwQmmP6vEuRdocmUVEDsiNYW57kA4vq/IvLNAs4I6VIrAyC3DtoKVRApgBkmfyuIpu693vCgnsggOqQ0MZlzZi8P2dLsw8JXAgMBAAECggEBAKl/SpUSWv4o2+eeMYG6bAFLWEc0Cr+KwVXEJbKdt7zcwcexnBi+SdfbAq0l8GGwLiSuiqmv2YGtsZxqloGcHjHorJpZ8S8fqzcFZXLaBLbQZb4BWNoYkpL6ZkQv/KHMnSnWdO483NI3OPzkILX3NimZhkcYNtgpIfYyFsDiUOqm6JomtyBTB6nBRCnT9Enplz+iuKID/UrW380NmtDB3prwmFs0frwsoSg12L61piBtkE7oNqmEaAQsoFXsQqokzdMjL5gcPHRrUx6O/7S1OOXIpBJvPM9mV9Oe1d9gZVSwu3xNm4WGb1qPFMzUQE/80wQdXypeY5KcR9YleONzwkECgYEA8uSMzYNLkA7/KHRaVUGMjPKFpsZQKEhSbyeMQ+tw5MSokoQgI1Ea1bzs7aXMEBNbh68J8AndxzCEyIe9N41NG0Y65bYWUQZAnbYJwvMUc86eneJO02uhe9dFVNj9IdG7Cvm78cfbQ1lPhu1+Tl1wHN2kmir5l/K6OXcIj+fvpEUCgYEAzHs0hp59BSNhHynRcU/1nrtVjnA0HKIfosTM2PVNv7KYvRx8Df9X7P/5Ldvf+sLXTD54hWTCjWB81n1bpmkG9QQnUOnitI44KXRHvQVzU4/BIYncb/GAv9r0cep9JjBGrWLycJxnpl19nCB1wBxZivTSeXVJ0//waR7bSA7lC+sCgYA1sBsHWhwbrZTsxjspWSHODdVI9dDF9qZx91XjtWjwyB9Ss22/ILBDyky8gsdGTmEO7rvNmQCyhKD1CjviyZLfknh2SfdI1Y72zUP/GWfN6T/aOimeRc4d54llpcjd7tPfKzBF0x0+F8GiW2Btxe2AE+XMRe+BjJ9pEEyOMoAf2QKBgD8Ol2oUIdWdzWuAx9e7orDqcD3WmBtkW4EkU09shidhefyHdjIS1hh972eW8IEx6JbYhO4N3nkekiDK06KDrOON/lnTZlfrq6IM+7psnd3c7N/c1Z+nx95iNROUDjfil0kMxFq5wLTrC7tDv0wY8fwJ94YBB11bBdZE77ZO8Y81AoGBAKIX6cYEwUrVBZ7DKwJAEzJgzRUWOCa/fTXkYQxToVZ81Hzbpc/k5sl8G3zjC/aoO6qofumn8JcOAa/rM/AT/tR/XD8d/cUeEdm7W8i5JwoJqQcCqmxYztzQ6RNqF/tpGn55EUE/Dt1F58tBfqHC+IW/emOxqi8OEhn0u68b8CBG",
  "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDCAwXZkflrt9zgdgHuYiP28o7NTHKMhqOcTM/ZYnKCOEtr2/YsixUGI2MU0gaLSaXiJ1fZoYMZ0l+MhSVcnj3xgihKJJuQnlxQe77djUlLdcXCuSwC8H8/MMty4f5Kg0Srfl3zatIIUQgRA2MpWUxe7hQ/hPHfcy+tZC0Cy3aPsNorfk2L0CFKT1DcMf23BVdlANaWwaVhSheFUj6Z1dqSAcOSgMQve/ECUocxLyhx6xQCpsoR2tHeUwQmmP6vEuRdocmUVEDsiNYW57kA4vq/IvLNAs4I6VIrAyC3DtoKVRApgBkmfyuIpu693vCgnsggOqQ0MZlzZi8P2dLsw8JXAgMBAAE="
}
```

### What is a `network` type?

In order to better test

### What is a `Genesis` Account?

A `Genesis` Account is the first Account in a Blockchain. In the GNY Blockchain the `Genesis` Account has initially 400 million GNY which are later distributed.

Down belos you will find the the `Genesis` Account for the `localnet`. The `localnet` is only for local development. If you want to user another account for your `localnet` then transfer GNY to another address. Otherwise only the `Genesis` Account can invoke contracts.

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
