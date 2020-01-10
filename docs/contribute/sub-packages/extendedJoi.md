# Package ExtendedJoi

This package is extending the great library [joi](https://github.com/hapijs/joi).

## Extending Joi.string() type

### string().publicKey()

The following `publicKey` passes validation:

```ts
const publicKey =
  "8713a73c428d5153632dee2effa8fc600f0f802c0fb63ee1622a889b14fbbab4";

const schema = Joi.string().publicKey();
Joi.validate(publicKey, schema); // passses
```

### string().secret()

The following `secret` ([BIP39](https://en.bitcoin.it/wiki/Seed_phrase)) passes the validation:

```ts
const secret =
  "slice polar library matrix top suffer parade second piano surprise burst sister";

const schema = Joi.string().secret();
Joi.validate(secret, schema); // passes
```

### string().address()

The following `address` passes the validation. It always starts with a capital `G`:

```ts
const address = "GCTKkyYDz8mGgUg6RS5RfgujoGoH";

const schema = Joi.string().address();
Joi.validate(secret, schema); // passes
```

### string().username()

The following `username` passes the validation. The username must be between 2 and 20 characters long. Only allowed are: small letters, digits and underscores (`_`).

```ts
const username1 = "liang_peili";
const username2 = "a1300";
const username3 = "xpgeng__";

const schema = Joi.string().username();
Joi.validate(username1, schema); // passes
Joi.validate(username2, schema); // passes
Joi.validate(username3, schema); // passes
```

### string().issuer()

The following `issuer` passes the validation. Lower and uppercase characters are allowed. The issuer must be between 1 and 16 characters long.

```ts
// /^[A-Za-z]{1,16}$/;
const issuer1 = "a";
const issuer2 = "A41";
const issuer3 = "ISSUER";

const schema = Joi.string().issuer();
Joi.validate(issuer1, schema); // passes
Joi.validate(issuer2, schema); // passes
Joi.validate(issuer3, schema); // passes
```

### string().asset()

The following `asset` passes the validation. The asset is composed of `issuer` and a separate asset name separated by a dot (`.`).

```ts
const asset1 = "ISSUER.ASSET";
const asset2 = "liang.XYZ";
const asset3 = "a1300.ABZ";

const schema = Joi.string().asset();
Joi.validate(asset1, schema); // passes
Joi.validate(asset2, schema); // passes
Joi.validate(asset3, schema); // passes
```

### string().signature()

The following `signature` passes the validation.

```ts
const signature =
  "cf56b32f7e1206bee719ef0cae141beff253b5b93e55b3f9bf7e71705a0f03b4afd8ad53db9aecb32a9054dee5623ee4e85a16fab2c6c75fc17f0263adaefd0c";

const schema = Joi.string().signature();
Joi.validate(signature, schema);
```

### string().hex(bufferLength?: any)

The following `hex` passes the validation.

```ts
const hex1 = "8c9f363ef4e7fcad161f1cfaceff15b557956593f8dcd989139822f7e2abe6f4";
const schemaWithLength = Joi.string().hex(32);
Joi.validate(hex1, schemaWithLength); // passes

const hex2 = "313233343536";
const schema = Joi.string().hex();
Joi.validate(hex2, schema); // passes
```

### string().ipv4PlusPort()

The following `ipv4PlusPort` passes the validation.

```ts
const ipv4PlusPort = "127.0.0.1:8888";

const schema = Joi.string().ipv4PlusPort();
Joi.validate(ipv4PlusPort, schema);
```

### string().positiveOrZeroBigInt()

The following `positiveOrZeroBigInt` passes the validation.

```ts
const positiveOrZeroBigInt = "1000000";

const schema = Joi.string().positiveOrZeroBigInt();
Joi.validate(positiveOrZeroBigInt, schema);
```
