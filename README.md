# node-bitwise-xor

 [![Build
Status](https://travis-ci.org/czzarr/node-bitwise-xor.png)](https://travis-ci.org/czzarr/node-bitwise-xor)

Returns a Buffer of the result of bitwise XOR operation between two
Buffers or Strings

## Example
```javascript
var xor = require('bitwise-xor');

xor(Buffer.from('00ff', 'hex'), Buffer.from('3344', 'hex'));

// returns <Buffer 33 bb>
```

## Install
`npm install bitwise-xor`

## License
MIT
