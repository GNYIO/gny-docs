# Get started

In order to participate in the GNY network you will need to run a Blockchain node. It helps to decentralize the network in case other nodes drop out. For producing blocks you need to run a Blockchain node and activate the block generation by supplying your Delegate `secret`.

A Blockchain node consists of a `node.js` app and a `postgres` database.

## Prerequisites

We support currently only Linux. Please use Ubuntu or one of its derivates:

- Ubuntu 18.04.3 LTS
- Ubuntu 20.04 LTS

### Install Git

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git
```

Install Git from the [Git Website](https://git-scm.com/)

### Install node.js

Install `node.js` with `nvm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

If this didn't worked please visit the [`nvm website`](https://github.com/nvm-sh/nvm)

Install `node.js` version `v12.22.6`:

```bash
nvm install v12.22.6
nvm alias default
```

### Install PostgreSQL 10

```bash
# Import repo key
sudo apt install curl ca-certificates gnupg
curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Add PostgreSQL apt repo
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

sudo apt update
sudo apt-get install postgresql-10
```

### Setup PostgreSQL

```bash
sudo --login --user postgres psql -c "ALTER USER postgres WITH PASSWORD 'docker';"
```

### Install necessary dependencies:

```bash
sudo apt-get install curl ntp wget libssl-dev openssl make gcc g++ autoconf automake python build-essential -y

sudo apt-get install libtool libtool-bin -y
```

## Clone Repository

:::: tabs

::: tab mainnet

Clone the repository and checkout the `mainnet` branch:

```bash
git clone https://github.com/gnyio/gny && cd gny
git checkout mainnet
```

:::

::: tab testnet

Clone the repository and checkout the `testnet` branch:

```bash
git clone https://github.com/gnyio/gny && cd gny
git checkout testnet
```

:::

::::

## Compile project

```bash
npm ci && \
npm run lerna:bootstrap && \
npm run lerna:tsc
```
