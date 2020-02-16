::: warning Important
Before registering as delegate you need to [`set a username`](./set-username)
:::

# Register as Delegate

In order to forge Blocks GNY network one has to first register as a delegate.

## With CLI

```bash
gny-cli --host "45.76.215.117" --port 4096 registerdelegate --secret ""
```

<br/>

::: tip
After you successfully registered as `delegate` be sure to add your account secret to your forging node in order to enable forging. Forging will be possible if you are being voted in the top **101 delegates**

See [Configure](../run-node/configure) for details
:::
