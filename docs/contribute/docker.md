# Docker

## Run Blockchain and Database in Docker

First verify that you executed the Installation process.

The following command builds the image for the GNY Blockchain node and the postgres database:

```bash
sudo docker-compose build
```

Then start both services:

```bash
sudo docker-compose up
```

<br/>

## Helpful Docker Commands

### Show all images

```bash
sudo docker image ls
```

### Bash into image

```bash
sudo docker run -it 99f5bbbb1a69 /bin/bash
```

## Containers

### Show all running containers

```bash
sudo docker ps --all
```

### Bash into running container

```bash
sudo docker exec -it 650e76a2d377 /bin/bash
```

## Delete everything

### Stop all running containers

```bash
sudo docker stop $(sudo docker ps --all --quiet)
```

### Delete all stopped containers

```bash
sudo docker rm $(sudo docker ps --all --quiet)
```

<br/>
