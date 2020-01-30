# Configure

## Start Forging

In order to start forging please pass a secret or multiple secrets to the `--secret` switch.

Example1: `--secret "chief next globe deny try danger trust wet spoil away eight task"`.
Example2: `--secret "abandon shop gain rebuild punch concert congress tuna distance push coyote victory,paper snack vote repair once render boss donkey volume entry wine anxiety,chronic settle analyst field horn elegant nominee loyal scatter hint captain loyal"`

> Information  
> In order start forging you need to first register as delegate. Be sure checkout our [Guides](../guide/).

```diff
services:
  # db1 service omitted
  node1:
    build: .
    container_name: "node1"
    image: gny-experiment
    command: bash -c 'while !</dev/tcp/db1/5432; do sleep 1; done; node packages/main/dist/src/app --ormConfig "ormconfig.integration.json"'
    environment:
+	  - GNY_SECRET=chief next globe deny try danger trust wet spoil away eight task
      - NODE_ENV="production"
    ports:
      - "4096:4096"
      - "4097:4097"
    depends_on:
      - db1
```

## All Environment Variable Options

## All available Options

```
Options:
  -V, --version              output the version number
  -c, --config <path>        Config file path
  -p, --port <port>          Listening port number
  -a, --address <ip>         Listening host name or ip
  -g, --genesisblock <path>  Genesisblock path
  -x, --peers [peers...]     Peers list
  -l, --log <level>          Log level
  -d, --daemon               Run gny node as daemon
  --base <dir>               Base directory
  --ormConfig <file>         ormconfig.json file
  --privateP2PKey <key>      Private P2P Key (base64 encoded) - overrides p2p_key.json file
  --secret [secret...]       comma separated secrets
  --publicIP <ip>            Public IP of own server
  --noLogFile                no log output to file
  -h, --help                 output usage information
```
