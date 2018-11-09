# `create-accessor`

[![CircleCI](https://circleci.com/gh/dan1elhughes/create-accessor/tree/master.svg?style=shield)](https://circleci.com/gh/dan1elhughes/create-accessor/tree/master)
[![codecov](https://codecov.io/gh/dan1elhughes/create-accessor/branch/master/graph/badge.svg)](https://codecov.io/gh/dan1elhughes/create-accessor)
[![npm version](https://badge.fury.io/js/create-accessor.svg)](https://badge.fury.io/js/create-accessor)

Creates accessor functions to access deeply nested objects without checking for undefined at every step.

## Installation

Via npm:

```bash
$ npm install --save create-accessor
```

## Usage

```js
import createAccessor from 'create-accessor';

// Access object paths with "." delimiter:
const obj = { a: { b: { c: 10 } } };
console.log(createAccessor('a.b.c', obj)); // => 10

// Also works on nested arrays:
const obj = { a: [{ b: [{ c: 10 }] }] };
console.log(createAccessor('a.0.b.0.c', obj)); // => 10

// And supports currying (passing in the object later):
const obj = { a: { b: { c: 10 } } };
const read = createAccessor('a.b.c');
console.log(read(obj)); // => 10

// And if the path doesn't exist, it doesn't attempt to read nested undefineds:
const obj = { a: {} };
const read = createAccessor('a.b.c');
console.log(read(obj)); // => undefined
```

## API

### createAccessor(path, object)

Reads the provided path on the input object, delimited with the "." character.

### createAccessor(path)

Returns a curried version of the above; i.e., create the function first and pass in the object later.
