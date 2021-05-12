# Start Node

## Configuration

<ClientOnly>
  <GNYSecret>
  </GNYSecret>
</ClientOnly>

<ClientOnly>
  <P2PSecret>
  </P2PSecret>
</ClientOnly>

<br/>

### Quick Start

:::: tabs

::: tab mainnet

```bash
export GNY_PUBLIC_IP=<your ip>

export GNY_NETWORK=mainnet
export GNY_P2P_PEERS=/ip4/78.141.235.22/tcp/4097/p2p/QmdEmHir6AxNzHrhWBJ3PfUddRBabmmEGmdSaCenrKMCUh

export GNY_DB_PASSWORD=docker
export GNY_DB_USER=postgres2
export GNY_DB_HOST=localhost
export GNY_DB_PORT=5432
export GNY_DB_DATABASE=postgres2
```

:::

::: tab testnet

```bash
export GNY_PUBLIC_IP=<your ip>

export GNY_NETWORK=testnet
export GNY_P2P_PEERS=/ip4/192.248.155.206/tcp/4097/p2p/QmUTkMvTdFsgNdtYMcN6U7VHBMzcVbg2oC3xYCagCJbRNs

export GNY_DB_PASSWORD=docker
export GNY_DB_USER=postgres2
export GNY_DB_HOST=localhost
export GNY_DB_PORT=5432
export GNY_DB_DATABASE=postgres2
```

:::

::::

Before starting your node, you need prepare the encypted secrets file `secret.txt`, `p2psecret.txt`, the corresponding key files `secret.key` and `p2psecret.key`. All the files should be put into the folder `./secrets/`.

```bash
# Generate key file
openssl req -x509 -nodes -days 100000 -newkey rsa:8912 -keyout secret.key -out secretcertificate.pem

# Encrypt secret file
openssl smime -encrypt -aes-256-cbc -in originalsecret.txt -out secret.txt -outform DER secretcertificate.pem

# Generate key file
openssl req -x509 -nodes -days 100000 -newkey rsa:8912 -keyout p2psecret.key -out p2psecretcertificate.pem

# Encrypt p2p secret file
openssl smime -encrypt -aes-256-cbc -in originalp2psecret.txt -out p2psecret.txt -outform DER p2psecretcertificate.pem
```

Start your node using the following bash script:

```bash
#!/bin/bash

GNY_SECRET=`openssl smime -decrypt -in ./secrets/secret.txt -inform DER -inkey ./secrets/secret.key`
GNY_P2P_SECRET=`openssl smime -decrypt -in ./secrets/p2psecret.txt -inform DER -inkey ./secrets/p2psecret.key`

npm run start --secret "$GNY_SECRET" --privateP2PKey "$GNY_P2P_SECRET"
```

::: tip
For information on how to **forge Blocks** see [**configure**](./configure)
:::

<br/>
<br/>
