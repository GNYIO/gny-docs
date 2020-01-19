# Manage node

## With Docker

This is only a short summary from the fantastic [docs.docker.com](https://docs.docker.com/) documentation website. Please visit it for more indepth information.

# Visualization

```yml
version: "3.3"
services:
  db1:
    image: "postgres:9.6.12"
    container_name: "db1"
    restart: always
    expose: # only internal
      - "5432"
    environment:
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
  node1:
    build: .
    container_name: "node1"
    image: gny-experiment:integration # tags
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 0.5; done; node packages/main/dist/src/app --ormConfig "ormconfig.integration.json"'
    environment:
      - NODE_ENV=production
    ports:
      - "4096:4096"
      - "4097:4097"
    depends_on:
      - db1
```

`docker-compose` bundles many services that are started together and interact together. In our case we have the services: GNY Blockchain Node (a `node.js` app) and a database (`postgres`) service. Each of this services is a separate [`docker container`](https://www.docker.com/resources/what-container).

![postgresdb](../.vuepress/public/simple-db.png) ![GNY Blockchain](../.vuepress/public/basic-node.png)

This two services are based off their respective [docker images](https://docs.docker.com/engine/reference/commandline/images/) `postgres:9.6.12` and `gny/blockchain`.

### Docker Images

A `docker image` is like a cookie cutter which can cuts cookies (instantiate containers). From one image we can create exact the same program, without the need to install or provide all libraries a program depends upon.

![docker-db-image](../.vuepress/public/docker-db-image.png) ![docker-node-image](../.vuepress/public/docker-node-image.png)

From an image we can create multiple containers.

|                                                                                                   |                                                                                                       |
| :-----------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| ![docker-db-image-multiple-instances](../.vuepress/public/docker-db-image-multiple-instances.png) | ![docker-node-image-multiple-instances](../.vuepress/public/docker-node-image-multiple-instances.png) |

### Docker networks

`docker-compose` creates automatically a network where only the services inside the `docker-compose` file can communicate. This is represented by the grey box. We can configure which service ports from the containers are visible on the host machine. The `postgres` database port is not reachable from the host machine. Only the GNY Blockchain service can access the `postgres` database service. The GNY Blockchain ports (`4096` and `4097`) are mapped to the host machine.

This is the beauty of `docker-compose`. We can specify all services that should work together and with one command we can start|stop|pause all services.

![](../.vuepress/public/docker-compose.png)

### Docker-Compose Lifecycle

![](../.vuepress/public/docker-compose-lifecycle.png)

# Docker-Compose 101

## Create and Start all services

```bash
docker-compose --file docker-compose.yml up
```

This command does will print all container messages to screen:
![docker_compose_up_console_output](../.vuepress/public/docker_compose_up_console.png)

## Create and Start all services

```bash
docker-compose --file docker-compose.yml up --detach
```

This command runs all services in background. See `logs` command to see the logs of the services in the background.

![docker_compose_up_console_background](../.vuepress/public/docker_compose_up_background.png)

## Start all services

This can only be executed if the docker-compose `network` and all `containers` were created previously. For example after an `docker-compose stop`.

```bash
docker-compose --file docker-compose.yml start
```

![docker_compose_start_error](../.vuepress/public/docker_compose_start_error.png)

![docker_compose_start_success](../.vuepress/public/docker_compose_start_success.png)

## Check status of services

```bash
docker-compose --file docker-compose.yml ps
```

![docker_compose_ps](../.vuepress/public/docker_compose_ps.png)

## Stop all services

```bash
docker-compose --file docker-compose.yml stop
```

![docker_compose_stop](../.vuepress/public/docker_compose_stop.png)

## Stop and Remove

This removes the docker-compose `network` and `volumes` that were created.

```bash
docker-compose --file docker-compose.yml down --volumes
```

<br>

## Docker 101

## Images

### Show all images

```bash
sudo docker image ls
```

### Get bash into image

```bash
sudo docker run -it <imageId> /bin/bash
```

## Containers

### Show status of running containers

```bash
sudo docker ps --all
```

### Show status of containers of a docker-compose file

```bash
sudo docker-compose --file docker-compose.yml ps
```

### Bash into running container

```bash
sudo docker exec -it <containerId> /bin/bash
```

## Delete

### Stop all running containers

```bash
sudo docker stop $(sudo docker ps --all --quiet)
```

### Delete all stopped containers

```bash
sudo docker rm $(sudo docker ps --all --quiet)
```

<br/>