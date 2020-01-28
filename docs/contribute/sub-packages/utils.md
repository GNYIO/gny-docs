# Package Utils

This package embodies several useful functions.

## Overview

This package consists of many different classes:

- [Address related](#address-related)
- [Transaction Fees](#transaction-fees-calculator)
- [Class Blockreward](#class-blockreward)
- [Limit Cache](#limit-cache-key-val)
- [Slot](#slot)

## Address related

### generateAddress(publicKey: string)

This method turns a `publicKey` into an andress:

```ts
import { generateAddress } from "@gny/utils";

const publicKey =
  "8c9f363ef4e7fcad161f1cfaceff15b557956593f8dcd989139822f7e2abe6f4";
const address = generateAddress(publicKey);
console.log(address); // GeVw2DVnLMx4ppcTojqNU7rQPvNW
```

### isAddress(address: string): boolean

This method checks if a string is an address:

```ts
import { isAddress } from "@gny/utils";

const address = "GhzUkDCedPD89mzawGujeacu9AkN";
const result = isAddress(address);
console.log(result); // true
```

## Transaction Fees Calculator

This object returns the fee each available contract type:

```ts
import { feeCalculators } from '@gny/utils';

{
  0: () => 0.1,
  1: () => 5,
  2: () => 5,
  3: () => 0.1,
  4: () => 0.1,
  5: () => 0.1,
  6: () => 0,
  10: () => 100,
  100: () => 100,
  101: () => 500,
  102: () => 0.1,
  103: () => 0.1,
}
```

## class BlockReward

The `BlockReward` class wraps around some useful methods for calculating everything related to milestones, block rewards and supply.

```ts
import { BlockReward } from "@gny/utils";
const blockReward = new BlockReward();
```

### calculateMilestone(height: number | string | BigNumber): number

This method calculates the milestone from a given Block height.

- The milestone `0` ranges from height `0` until `3002159`
- The milestone `1` ranges from height `3002160` until `6002159`
- The milestone `2` ranges from height `9002159` until `Infintiy`

```ts
const milestone0 = blockReward.calculateMilestone(String(3002159)); // 0
const milestone1 = blockReward.calculateMilestone(String(6002159)); // 1
const milestone2 = blockReward.calculateMilestone(String(9002159)); // 2
```

### calculateReward(height: number | string | BigNumber): number

```ts
const reward0 = blockReward.calculateReward(2159); // 0
const reward1 = blockReward.calculateReward(2160); // 200000000
const reward2 = blockReward.calculateReward(3002160); // 150000000
const reward3 = blockReward.calculateReward(6002160); // 100000000
const reward4 = blockReward.calculateReward(9002160); // 50000000
```

### calculateSupply(init: number | string | BigNumber): BigNumber

```ts
const result0 = blockReward.calculateSupply(0); // BigNumber('40000000000000000')
const result1 = blockReward.calculateSupply(2159); // BigNumber('40000000000000000')
const result2 = blockReward.calculateSupply(2160); // BigNumber('40000000200000000')
const result3 = blockReward.calculateSupply(2162); // BigNumber('40000000600000000')
```

## LimitCache\<KEY, VAL\>

The `LimitCache<KEY, VAL>` limits the the keys that are saved. When you have a `new LimitCache<string, boolean>(2)` and you are adding 3 keys then the first added will be gone. This helps that the cache is not growing indefinitely.

```ts
import { LimitCache } from "@gny/utils";

const limit = 10000; // default
const limitCache = new LimitCache<string, boolean>(limit);
```

### set(key: KEY, value: VAL): void

```ts
limitCache.set(
  "568a0b86490177ea105c26b99c8f2a8e9eb0bc582957a0320ae7621ed56a63dd",
  true
);
```

### has(key: KEY): boolean

```ts
limitCache.has(
  "09d1d652b8cced07a99f2f6cfe8763e10e9c073b20d7514a5306ac27ee9ef088"
); // false
```

### getLimit(): number

```ts
limitCache.getLimit(); // 10000
```

### Slot

Every 10 seconds a new **Slot** is beeing created. The `currentSlot` is `n`th Slot since the `epochTime` of the Blockchain (`2018-11-18T20:00:00.000Z`).

```
currentSlot: 492862, realTime: 22:03:48
currentSlot: 492862, realTime: 22:03:49

currentSlot: 492863, realTime: 22:03:50
currentSlot: 492863, realTime: 22:03:51
currentSlot: 492863, realTime: 22:03:52
currentSlot: 492863, realTime: 22:03:53
currentSlot: 492863, realTime: 22:03:54
currentSlot: 492863, realTime: 22:03:55
currentSlot: 492863, realTime: 22:03:56
currentSlot: 492863, realTime: 22:03:57
currentSlot: 492863, realTime: 22:03:58
currentSlot: 492863, realTime: 22:03:59

currentSlot: 492864, realTime: 22:04:00
```
