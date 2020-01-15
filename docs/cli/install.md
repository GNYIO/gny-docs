# Install GNY Client

## Install by npm

```bash
npm install @gny/cli
```

## Usage

### Set host, port, mainet

- There are two ways to set host and port.
  - Set environment variables `GNY_HOST` and `GNY_PORT`
  - Use command line by `cli -H 127.0.0.1 -P 4096` where `-H, --host <host>` is hte hostname or ip of the node, `-P, --port <port>` is the port.

The default host and port is `127.0.0.1:4096`.
- `cli -M, --main` is to specify the mainet. The default value is `false`.

### Example

```bash
# create genesisfile
cli getheight
```
