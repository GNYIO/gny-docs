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
