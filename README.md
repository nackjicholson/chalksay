[![Build Status](https://travis-ci.org/nackjicholson/chalksay.svg?branch=master)](https://travis-ci.org/nackjicholson/chalksay)

# chalksay
Turns `console.log` into `console.fun`!

[![NPM](https://nodei.co/npm/chalksay.png)](https://nodei.co/npm/chalksay/)

![screenshot](https://github.com/sindresorhus/ansi-styles/raw/master/screenshot.png)

## Usage

`chalksay` is just a shortcut for logging [`chalk`](https://github.com/sindresorhus/chalk) styled text. Which is what 
you almost always want to do with `chalk` output.

Plain ol' `chalk`:

```javascript
var chalk = require('chalk');
console.log(chalk.blue('Say something blue'));
```

Even easier with `chalksay`:

```javascript
var chalksay = require('chalksay');
chalksay.blue('Say something blue');
```

Yes, you can do variadic calls to chalksay:

```javascript
var chalksay = require('chalksay');
chalksay.blue('Roses are blue,', 'Violets are blue,', 'Sugar is blue,', 'and so are you.');
```

All of the `chalk` styles are supported. Go nuts, say things in style!

## Install

`npm install chalksay`

## Test

The tests are colorful, run them it's fun.

`npm test`
