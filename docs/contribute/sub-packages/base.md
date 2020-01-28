# Package Base

This package exports the following static classes:

- [BlockBase](./#BlockBase)
- [TransactionBase](./#TransactionBase)
- [ConsensusBase](./#ConsensusBase)
- [RoundBase](./#RoundBase)

## BlockBase

The class `BlockBase` exploses only **static** and **pure** methods.

### getId(block: IBlock): string

### sign(block: IBlock, keyPair: KeyPair): string

### getBytes(block: IBlock, skipSignature?: any): Buffer

### verifySignature(block: IBlock): boolean

### normalizeBlock(old: IBlock): IBlock

### calculateHash(block: IBlock): Buffer

### calculateFee(): string

<br/>

## TransactionBase

The class `TransactionBase` only exposes **static** and **pure** methods.

### normalizeTransaction(old: ITransaction): ITransaction

### verifyBytes(bytes: Buffer, publicKey: string, signature: string): boolean

### verifyNormalSignature(transaction: ITransaction, sender: IAccount, bytes: Buffer): string | undefined

### verify(context: Pick\<Context, 'trs' | 'sender'\>): Promise\<string | undefined\>

### create(data: CreateTransactionType): Partial\<ITransaction\>

### getId(transaction: ITransaction): string

### getBytes(transaction: Partial\<ITransaction\>, skipSignature?: boolean, skipSecondSignature?: boolean): Buffer

<br/>

## ConsensusBase

### normalizeVotes(votes: any): ManyVotes

### createVotes(keypairs: KeyPair[], heightAndId: BlockHeightId): ManyVotes

### verifyVote(height: string, id: string, vote: Signature): boolean

### hasEnoughVotes(votes: ManyVotes): boolean

### hasEnoughVotesRemote(votes: ManyVotes): boolean

### createPropose(keypair: KeyPair, block: IBlock, address: string): BlockPropose

### acceptPropose(propose: BlockPropose): boolean

<br/>

## RoundBase

### calculateRound(height: string): string
