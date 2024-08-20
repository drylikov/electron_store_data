# Electron store data

A Node.js module to store [Electron](https://github.com/electron/electron) datas in the computer.

## Installation
```sh
# with npm
$ npm i electron_store_data

# or with yarn
$ yarn add electron_store_data
```

## Usage
```js
// include module
const Store = require('electron_store_data')

// initialize
const storeWindow = new Store({
  filename: 'window', // will be window.json
  defaults: {
    bounds: { x: '', y: '', width: 900, height: 500 }
  }
})

// get
console.log(storeWindow.get('bounds'))
// { x: '', y: '', width: 900, height: 500 }

// set
storeWindow.set('bounds', { x: 500, y: 200, width: 800, height: 450 })

// delete
storeWindow.delete('bounds')
```
