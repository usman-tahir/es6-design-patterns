(function() {
  'use strict';

  class Context {
    constructor(type) {
      switch(type) {
        case 'A':
          this.strategy = new ConcreteStrategyA()
          break
        case 'B':
          this.strategy = new ConcreteStrategyB()
          break
        default:
          this.strategy = new ConcreteStrategyA()
          break
      }
    }

    ContextInterface() {
      this.strategy.AlgorithmInterface()
    }
  }

  class Strategy {
    constructor() {}

    AlgorithmInterface() {}
  }

  class ConcreteStrategyA extends Strategy {
    constructor() {
      super()
      console.log('ConcreteStrategyA()')
    }

    AlgorithmInterface() {
      console.log('ConcreteStrategyA AlgorithmInterface()')
    }
  }

  class ConcreteStrategyB extends Strategy {
    constructor() {
      super()
      console.log('ConcreteStrategyB()')
    }

    AlgorithmInterface() {
      console.log('ConcreteStrategyB AlgorithmInterface()')
    }
  }

  function initStrategy() {
    let contextA = new Context('A')
    let contextB = new Context('B')
    let contextC = new Context('C')

    contextA.ContextInterface()
    contextB.ContextInterface()
    contextC.ContextInterface()
  }

  initStrategy()
}());