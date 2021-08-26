# Upgrade Bare Metal

Stop `pm2` gny process:

```bash
pm2 stop gny
```

Get newest gny version:

```bash
# leave gny directory
cd ..

# delete gny directory
rm -rf gny

# clone repository
git clone https://github.com/gnyio/gny-experiment gny-experiment && cd $_
```

Checkout the corresponding branch:

:::: tabs

::: tab mainnet

```bash
git checkout mainnet
```

:::

::: tab testnet

```bash
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

### Restart GNY node

```bash
# start gny
pm2 start --name gny npm -- start
```

## Restore from snapshots

:::: tabs

::: tab mainnet
Get the latest `mainnet` snapshot file name from [the snapshots site](https://mainnet.snapshots.gny.io/), and run the following bash script by replacing the snapshot name:

```bash
#You need ~ 10GB of free space for this
sudo apt-get install zip unzip

# download
sudo -i -u postgres wget http://mainnet.snapshots.gny.io/v2_height_xxxxxxx_xx-xx-2021_xx_xx_xx.zip
sudo -i -u postgres unzip v2_height_xxxxxxx_xx-xx-2021_xx_xx_xx.zip

# Restore postgres database
sudo -i -u postgres psql -f v2_height_xxxxxxx_xx-xx-2021_xx_xx_xx.sql

# start again
npm run start

```

:::

::: tab testnet

Get the latest `testnet` snapshot file name from [the snapshots site](https://testnet.snapshots.gny.io/), and run the following bash script by replacing the snapshot name:

```bash
#You need ~ 10GB of free space for this
sudo apt-get install zip unzip

# download database
sudo -i -u postgres wget http://testnet.snapshots.gny.io/v2_height_xxxxxxx_xx-xx-2021_xx_xx_xx.zip
sudo -i -u postgres unzip v2_height_xxxxxxx_xx-xx-2021_xx_xx_xx.zip

# Restore postgres database
sudo -i -u postgres psql -f v2_height_xxxxxxx_xx-xx-2021_xx_xx_xx.sql

# start again
npm run start

```

:::

::::
