# Manage node

## With Docker

This is only a short excerpt from the fantastic [docs.docker.com](https://docs.docker.com/) documentation website. Please visit it for more indepth information.

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
