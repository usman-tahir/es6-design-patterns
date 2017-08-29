(function() {
  'use strict';

  class Abstraction {
    constructor() {}

    Operation() {
      this.implementor.OperationImplementor()
    }
  }

  class RefinedAbstraction extends Abstraction {
    constructor() {
      super()
      console.log('RefinedAbstraction()')
    }

    setImplementor(implementor) {
      this.implementor = implementor
    }
  }

  class Implementor {
    constructor() {}

    OperationImplementor() {}
  }

  class ConcreteImplementorA extends Implementor {
    constructor() {
      super()
      console.log('ConcreteImplementorA()')
    }

    OperationImplementor() {
      console.log('ConcreteImplementorA OperationImplementor()')
    }
  }

  class ConcreteImplementorB extends Implementor {
    constructor() {
      super()
      console.log('ConcreteImplementorB()')
    }

    OperationImplementor() {
      console.log('ConcreteImplementorB OperationImplementor()')
    }
  }

  function initBridge() {
    let abstraction = new RefinedAbstraction()
    let state = Math.floor(Math.random() * 2)

    if(state) {
      abstraction.setImplementor(new ConcreteImplementorA())
    } else {
      abstraction.setImplementor(new ConcreteImplementorB())
    }

    abstraction.Operation()
  }

  initBridge()
}());