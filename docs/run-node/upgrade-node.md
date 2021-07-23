# Upgrade Docker

## Check if both of your services (`db1` and `node1` are running)

```bash
sudo docker-compose --file docker-compose.yml ps
```

## Pull newest docker image

:::: tabs

::: tab mainnet

Pull the latest `mainnet` image:

```bash
sudo docker pull gnyio/node:mainnet
```

:::

::: tab testnet

Pull the latest `testnet` image:

```bash
sudo docker pull gnyio/node:testnet
```

:::

::: tab mainnet-arm

Pull the latest `mainnet-arm` image:

```bash
sudo docker pull gnyio/node:mainnet-arm
```

:::

::: tab testnet-arm

Pull the latest `testnet-arm` image:

```bash
sudo docker pull gnyio/node:testnet-arm
```

:::

::::

## Check your local docker images

```bash
sudo docker image ls
```

![docker-compose image ls](../.vuepress/public/docker_compose_image_ls.png)

## Make the upgrade

We keep the database sersvice `db1` running and

- stop
- delete
- and recreate service `node1`

```bash
# stop node1
sudo docker stop node1
# remove node1
sudo docker rm node1

# start node1 with the latest image
sudo docker-compose --file docker-compose.yml up --detach
```

![docker-compose up detach](../.vuepress/public/upgrade_docker_compose_up_detach.png)

## Check again

```bash
sudo docker-compose --file docker-compose.yml ps
```

![docker-compose ps](../.vuepress/public/docker_compose_upgrade_ps.png)
