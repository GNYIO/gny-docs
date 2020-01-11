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
