const path = require('path')
const electron = require('electron')
const fs = require('fs')

class Store {
  constructor (props) {
    this.rootFolder = (electron.app || electron.remote.app).getPath('userData')
    this.dataFolder = path.join(this.rootFolder, 'data')
    this.fullPath = path.join(this.dataFolder, `${props.filename}.json`)
    this.data = this.readFile(props.defaults) || {}
  }

  readFile (defaults) {
    try {
      return JSON.parse(fs.readFileSync(this.fullPath, 'utf8'))
    } catch (e) {
      return defaults
    }
  }

  writeFile () {
    if (!fs.existsSync(this.dataFolder)) fs.mkdirSync(this.dataFolder)
    return fs.writeFileSync(this.fullPath, JSON.stringify(this.data))
  }

  get (key) {
    return this.data[key]
  }

  set (key, val) {
    this.data[key] = val
    return this.writeFile()
  }

  delete (key) {
    delete this.data[key]
    return this.writeFile()
  }
}

module.exports = Store
