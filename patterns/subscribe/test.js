const EventEmitter = require('./eventEmitter')

class Girl extends EventEmitter {
  constructor() {
    super()
  }
}

let girl = new Girl()

const drink = data => {
  console.log(data)
  console.log('喝酒')
}

const findBoy = () => {
  console.log('交友')
}

girl.on('newListener', eventName => {})

girl.on('结婚', () => {})

girl.setMaxListeners(3)

console.log(girl.getMaxListeners())

girl.once('失恋', drink)
girl.once('失恋', drink)

girl.prependListener('失恋', () => {
  console.log('before')
})

girl.once('失恋', drink)

girl.emit('失恋', '1')
