# Create Secret

::: warning
The generated `secret` should be kept safe and should be told to **nobody**. All digital assets are tied to this secret. If you loose this secret you will loose all your digital assets.

Don't reuse this `secret` on differnet GNY networks (`localnet`, `testnet`, `mainnet`). You make yourself vulnerable to [Replay attacks](https://en.wikipedia.org/wiki/Replay_attack)
::::

::: tip
This secret (`BIP39 standard`) is used to access your funds on the GNY Blockhain and activates forging (if you are a delegate).
:::

## With CLI

First install the `@gny/cli` via npm:

```bash
npm install --global @gny/cli
```

Then execute the `genaccount` command:

```bash
gny-cli genaccount
? Enter number of accounts to generate 1
```

The result:

```json
[
  {
    "address": "G2iZ5kf5z8NnyoTV17b6rSNEYQYzA",
    "secret": "source express orange puppy spy...",
    "publicKey": "96ac2d8076bd2858d391d0e22dd63a4edc879a9447d0fe2f8a1d175e36f105c8"
  }
]
```

::: tip
The `secret` is the key `secret` starting with: `source express orange...`
:::

::: tip
In order to start forging you need to add your `secret` to your node configuration.

Visit [run-node/configure](../run-node/configure) for details
:::
