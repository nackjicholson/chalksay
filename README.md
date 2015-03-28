[![Build Status](https://travis-ci.org/nackjicholson/chalksay.svg?branch=master)](https://travis-ci.org/nackjicholson/chalksay)

# chalksay
When you chalksay, you turn `console.log` into `console.fun`!

[![NPM](https://nodei.co/npm/chalksay.png)](https://nodei.co/npm/chalksay/)

#### Usage

chalksay is really just a shortcut for the thing you want to do with chalk 90% of the time.

```javascript
var chalk = require('chalk');
console.log(chalk.blue('Say something blue'));
```

Here's the same thing with chalksay:

```javascript
var chalksay = require('chalksay');
chalksay.blue('Say something blue');
```

All of the chalk styles are supported. Go nuts! Say things in style!

#### Install

`npm install chalksay`

#### Test

The tests are colorful, run them it's fun.

`npm test`
