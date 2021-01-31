# Lock Account for Voting

You can lock part of your GNY tokens for a time period. The minimum lock time period is `currentBlockHeight + 172800`.

::: tip
Check current Block height with: `http://192.248.155.206:4096/api/blocks/getHeight`
::::

Example: The current height is `121986`. We need to lock an amount `x` at least up till Block height `121986 + 172800 = 294786`

## With CLI

```bash
gny-cli --host "192.248.155.206" --port 4096 lock --secret "" --height 3728000 --amount 60000000
```
