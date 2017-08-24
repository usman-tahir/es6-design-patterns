(function() {
  'use strict';

  class Target {
    constructor(type) {
      let result

      switch(type) {
        case 'adapter':
          result = new Adapter()
          break
        default:
          result = null
      }
      return result
    }

    Request() {}
  }

  class Adaptee {
    constructor() {
      console.log('Adaptee()')
    }

    SpecificRequest() {
      console.log('Adaptee SpecificRequest()')
    }
  }

  class Adapter extends Adaptee {
    constructor() {
      super()
      console.log('Adapter()')
    }

    Request() {
      return this.SpecificRequest()
    }
  }

  function initAdapter() {
    let f = new Target('adapter')
    f.Request()
  }

  initAdapter()
}());