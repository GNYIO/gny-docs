# Get started

In order to participate in the GNY network you will need to run a Blockchain node. It helps to decentralize the network in case other nodes drop out. For producing blocks you need to run a Blockchain node and activate the block generation by supplying your Delegate `secret`.

A Blockchain node consists of a `node.js` app and a `postgres` database.

## Prerequisites

We support currently only Linux. Please use Ubuntu or one of its derivates:

- Ubuntu 18.04.3 LTS
- Ubuntu 19.10

### Install Git

```bash
sudo apt-get install git
```

Install Git from their [Git Website](https://git-scm.com/)

### Install node.js

Install `node.js` with `nvm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

If this didn't worked please visit the [`nvm website`](https://github.com/nvm-sh/nvm)

Install `node.js` version `v10.16.2`:

```bash
nvm install v10.16.2
nvm alias default
```

Install necessary dependencies:

```bash
sudo apt-get install curl ntp wget libssl-dev openssl make gcc g++ autoconf automake python build-essential -y

sudo apt-get install libtool libtool-bin -y
```

## Close Repository

```bash
git clone https://github.com/gnyio/gny && cd gny
```

## Compile project

```bash
npm ci && \
npm run lerna:bootstrap && \
npm run lerna:tsc
```