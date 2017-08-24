(function() {
  'use strict';

  class Prototype {
    constructor(p) {} // Passed in prototype

    Clone() {}
  }

  class ConcretePrototypeOne extends Prototype {
    constructor() {
      console.log('ConcretePrototypeOne()')
      super()
      this.feature = 'feature one'
    }

    setFeature(key, value) {
      this[key] = value
    }

    Clone() {
      console.log('ConcretePrototypeOne Clone()')
      let clone = new ConcretePrototypeOne()
      let keys = Object.keys(this)

      keys.forEach(k => clone.setFeature(k, this[k]))

      console.log('ConcretePrototypeOne cloned')
      return clone
    }
  }

  class ConcretePrototypeTwo extends Prototype {
    constructor() {
      console.log('ConcretePrototypeTwo()')
      super()
    }

    Clone() {
      console.log('ConcretePrototypeTwo Clone()')
      return clone;
    }
  }

  function initPrototype() {
    let prototypeOne = new ConcretePrototypeOne()
    prototypeOne.setFeature('feature', 'feature 2')

    let cloneOne = prototypeOne.Clone()
    console.log(cloneOne.feature)
  }

  initPrototype()
}());