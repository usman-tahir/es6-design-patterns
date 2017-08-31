(function() {
  'use strict';

  class Context {
    constructor(state) {
      switch(state) {
        case 'A':
          this.state = new ConcreteStateA()
          break
        case 'B':
          this.state = new ConcreteStateB()
          break
        default:
          this.state = new ConcreteStateA()
          break
      }
    }

    Request() {
      this.state.Handle(this)
    }
  }

  class State {
    constructor() {}

    Handle() {}
  }

  class ConcreteStateA extends State {
    constructor() {
      super()
      console.log('ConcreteStateA()')
    }

    Handle(context) {
      console.log('ConcreteStateA Handle()')
    }
  }

  class ConcreteStateB extends State {
    constructor() {
      super()
      console.log('ConcreteStateB()')
    }

    Handle(context) {
      console.log('ConcreteStateB Handle()')
    }
  }

  function initState() {
    let contextA = new Context('A')
    let contextB = new Context('B')
    let contextC = new Context('C')

    contextA.Request()
    contextB.Request()
    contextC.Request()
  }

  initState()
}());