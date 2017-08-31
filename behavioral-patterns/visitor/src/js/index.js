(function() {
  'use strict';

  class Visitor {
    constructor() {}

    VisitConcreteElementA(ConcreteElementA) {}

    VisitConcreteElementB(ConcreteElementB) {}
  }

  class ConcreteVisitorOne extends Visitor {
    constructor() {
      super()
      console.log('ConcreteVisitorOne()')
    }

    VisitConcreteElementA(ConcreteElementA) {
      console.log('ConcreteVisitorOne VisitConcreteElementA()')
    }

    VisitConcreteElementB(ConcreteElementB) {
      console.log('ConcreteVisitorOne VisitConcreteElementB()')
    }
  }

  class ConcreteVisitorTwo extends Visitor {
    constructor() {
      super()
      console.log('ConcreteVisitorTwo()')
    }

    VisitConcreteElementA(ConcreteElementA) {
      console.log('ConcreteElementB VisitConcreteElementA()')
    }

    VisitConcreteElementB(ConcreteElementB) {
      console.log('ConcreteElementB VisitConcreteElementB()')
    }
  }

  class ObjectStructure {
    constructor() {
      console.log('ObjectStructure()')
    }
  }

  class _Element {
    constructor() {}

    Accept(visitor) {}
  }

  class ConcreteElementA extends _Element {
    constructor() {
      super()
      console.log('ConcreteElementA()')
    }

    Accept(visitor) {
      visitor.VisitConcreteElementA(this)
    }

    OperationA() {
      console.log('ConcreteElementA OperationA()')
    }
  }

  class ConcreteElementB extends _Element {
    constructor() {
      super()
      console.log('ConcreteElementB()')
    }

    Accept(visitor) {
      visitor.VisitConcreteElementB(this)
    }

    OperationB() {
      console.log('ConcreteElementB OperationB()')
    }
  }

  function initVisitor() {
    let visitorOne = new ConcreteVisitorOne()
    let visitorTwo = new ConcreteVisitorTwo()
    let elementA = new ConcreteElementA()
    let elementB = new ConcreteElementB()

    elementA.Accept(visitorOne)
    elementB.Accept(visitorTwo)
  }

  initVisitor()
}());