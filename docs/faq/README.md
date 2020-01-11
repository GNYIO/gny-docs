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
