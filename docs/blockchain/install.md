# Install GNY Blockchain

Ubuntu 18.04.3 LTS or higher is required!

## Install Linux Dependencies

```
sudo apt-get install curl ntp wget git libssl-dev openssl make gcc g++ autoconf automake python build-essential -y

sudo apt-get install libtool libtool-bin -y

# Install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
# This loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm use # uses node version in the .nvmrc file
nvm alias default # set node version in .nvmrc as default one
```

## Install Docker and Docker-Compose

> Follow [this Tutorial](https://docs.docker.com/install/linux/docker-ce/ubuntu/) to install **Docker** and [this Tutorial](https://docs.docker.com/compose/install/) to install **Docker-Compose**.

<br/>

## Clone Repository

Clone this repository:

```bash
git clone https://github.com/gnyio/gny-experiment gny-experiment && cd $_
```

### Install Dependencies

Install exactly the dependencies from `package-lock.json` with `npm ci`:

```bash
npm ci
```

### Install Sub-Packages

Bootstrap all [lerna.js](https://github.com/lerna/lerna) packages with:

```bash
npm run lerna:bootstrap
```

### Transpile TypeScript

Transpile all [lerna.js](https://github.com/lerna/lerna) packages with:

```bash
npm run lerna:tsc
```

### Start Node

Start a postgres docker container:

```bash
# start POSTGRESQL database on port 3000
sudo docker run --env POSTGRES_PASSWORD=docker --env POSTGRES_DB=postgres --env POSTGRES_USER=postgres -p 3000:5432 postgres
```

Open a new `console` and start the GNY blockchain:

```bash
node packages/main/dist/src/app
```

Default ports:

|    Service     |  Port  |           Where to change            |
| :------------: | :----: | :----------------------------------: |
|    Postgres    |  3000  |           `ormconfig.json`           |
|     Redis      |  3001  |           `ormconfig.json`           |
| Blockchain-API |  4096  |            `config.json`             |
| Blockchain-P2P | 4096+1 | Can't be changed! Always API-Port +1 |

> **Attention**
> After changing ports be sure to rebuild the project with `npm run tsc`

<br/>

## Extra: Run whole Blockchain only in Docker

First verify that you executed the [Installation](#Installation) process.

The following command builds the image for the GNY Blockchain node and the `postgres` database:

```bash
sudo docker-compose build
```

Then start both services:

```bash
sudo docker-compose up
```

## Run Tests

Before running the unit tests be sure to have the project installed with [Installation](#Installation)

To run the unit tests, simple run:

```bash
npm run test
```

To run the integration tests you need to first login as the root user (because of docker):

```bash
sudo -s
npm run test:integration
```

<br/>
