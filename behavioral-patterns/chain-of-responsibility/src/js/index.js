(function() {
  'use strict';

  class Handler {
    constructor() {}

    HandleRequest() {}
  }

  class ConcreteHandlerOne extends Handler {
    constructor() {
      super()
      console.log('ConcreteHandlerOne()')
    }

    setSuccessor(successor) {
      this.successor = successor
    }

    HandleRequest(request) {
      if(request === 'run') {
        console.log('ConcreteHandlerOne HandleRequest()')
      } else {
        console.log('ConcreteHandlerOne calls its successor')
        this.successor.HandleRequest(request)
      }
    }
  }

  class ConcreteHandlerTwo extends Handler {
    constructor() {
      super()
      console.log('ConcreteHandlerTwo()')
    }

    HandleRequest(request) {
      console.log('ConcreteHandlerTwo HandleRequest()')
    }
  }

  function initChainOfResponsibility() {
    let handlerOne = new ConcreteHandlerOne()
    let handlerTwo = new ConcreteHandlerTwo()

    handlerOne.setSuccessor(handlerTwo)
    handlerOne.HandleRequest('run')
    handlerOne.HandleRequest('stay')
  }

  initChainOfResponsibility()
}());