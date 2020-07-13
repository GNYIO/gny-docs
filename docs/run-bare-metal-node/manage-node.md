# Manage node

## With pm2

### Install pm2

Install `pm2`:

```bash
npm install pm2 --global
```

### Start gny

```bash
# first go to the gny directory
cd gny

# start gny
pm2 start --name gny npm -- start
```

![pm2 start gny](../shapes/pm2_start_gny.png)

### Show logs

```bash
pm2 logs gny
```

### Stop gny

```bash
pm2 stop gny
```

### Status of gny

```bash
pm2 status gny
```

![pm2 status](../shapes/pm2_status.png)

### Delete gny

```bash
pm2 delete gny
```
