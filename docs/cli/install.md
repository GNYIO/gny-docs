# Install GNY CLI

## Install Prerequisites

Please install the following linux packages in order to make `gny-cli` work:

```bash
sudo apt-get update
sudo apt-get -y upgrade

sudo apt-get install curl ntp wget git libssl-dev openssl make gcc g++ autoconf automake python build-essential -y
sudo apt-get install libtool libtool-bin -y
```

## Install via npm

::: warning
Although the package is called `@gny/cli` in the npm registry. We will need to type **`gny-cli`** in the command line to call the appropriate commands.
:::

```bash
npm install --global @gny/cli
```
