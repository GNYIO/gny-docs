# Create P2P Secret

## Here

<ClientOnly>
  <P2PSecret>
  </P2PSecret>
</ClientOnly>

## With CLI

First install the `@gny/cli` via npm:

```bash
npm install --global @gny/cli
```

Then execute the `createp2psecret` command:

```bash
gny-cli createp2psecret
```

The result:

```json
{
  "id": "QmS8qAn5UYykHD2FpqmELMTDFAB5WKBSWiKJWX4U7cnnR3",
  "privKey": "CAASpwkwggSjAgEAAoIBAQCXtFhfimFv+VSF...",
  "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCXtFhfimFv+..."
}
```

::: tip
The `p2p secret` is the key `privKey` starting with: `CAASpwkwggSjAgEAAoIBAQCXtFhfi...`
:::
