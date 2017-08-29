(function() {
  'use strict';

  class FlyweightFactory {
    constructor() {
      this.flyweights = {}
      console.log('FlyweightFactory()')
    }

    GetFlyweight(key) {
      if(this.flyweights[key]) {
        return this.flyweights[key]
      } else {
        this.flyweights[key] = new ConcreteFlyweight(key)
        return this.flyweights[key]
      }
    }

    CreateGibberish(keys) {
      return new UnsharedConcreteFlyweight(keys, this)
    }
  }

  class Flyweight {
    constructor() {}

    Operation(extrinsicState) {}
  }

  class ConcreteFlyweight extends Flyweight {
    constructor(key) {
      super()
      this.intrinsicState = key
      console.log('ConcreteFlyweight()')
    }

    Operation(extrinsicState) {
      return extrinsicState + this.intrinsicState
    }
  }

  class UnsharedConcreteFlyweight extends Flyweight {
    constructor(keys, flyweights) {
      super()
      this.flyweights = flyweights
      this.keys = keys
      console.log('UnsharedConcreteFlyweight()')
    }

    Operation(extrinsicState) {
      let key = ''
      let word = ''

      for(let i = 0; i < extrinsicState; i += 1) {
        // randomly generated key
        key = this.keys[Math.floor(Math.random() * (this.keys.length))]
        word = this.flyweights.GetFlyweight(key).Operation(word)
      }
      console.log('UnsharedConcreteFlyweight Operation()')
      console.log('word:', word)
    }
  }

  function initFlyweight() {
    let flyweights = new FlyweightFactory()
    let gibberish = flyweights.CreateGibberish(['-', '+', '*'])
    
    gibberish.Operation(5)
    gibberish.Operation(10)
    gibberish.Operation(20)
    gibberish.Operation(40)
  }

  initFlyweight()
}());