# bscnvert

Effortlessly convert between decimal, char, hexadecimal, octal, and binary representations with this versatile JavaScript utility. Simplify your coding tasks and streamline your programming experience.

## Instalation

First install Node.js. Then:
````sh
npm install bscnvert

# or

yarn add bscnvert
````

## Importing
Using CommonJS `require()`
````js
const base = require('bscnvert');
````

Using ES6/TypeScript imports
````js
import base from 'bscnvert';
````

## How to use
### Example

````js
const base = require('bscnvert');

base.binary.toDecimal('1000'); // return 8

// or

const { binary } = require('bscnvert');

binary.toChar('01110100 01100101 01110011 01110100'); // return 'test'
````

## Running Tests

To run the test suite, first clone the repository:
````sh
git clone https://github.com/fredrecco/bscnvert.git
````

Install the dependencies:
````sh
npm install

# or

yarn
````

Then run:
````sh
npm test

# or

yarn test
````