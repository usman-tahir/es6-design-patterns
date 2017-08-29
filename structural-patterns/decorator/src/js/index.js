(function() {
  'use strict';

  class Component {
    constructor() {}

    Operation() {}
  }

  class ConcreteComponent extends Component {
    constructor() {
      super()
      console.log('ConcreteComponent()')
    }

    Operation() {
      console.log('o o')
    }
  }

  class Decorator extends Component {
    constructor(component) {
      super()
      this.component = component
      console.log('Decorator()')
    }

    Operation() {
      this.component.Operation()
    }
  }

  class ConcreteDecoratorA extends Decorator {
    constructor(component, sign) {
      super(component)
      this.addedState = sign
      console.log('ConcreteDecoratorA()')
    }
  }

  class ConcreteDecoratorB extends Decorator {
    constructor(component, sign) {
      super(component)
      this.addedState = sign
      console.log('ConcreteDecoratorB()')
    }

    Operation() {
      super.Operation()
      console.log(this.addedState + this.addedState + this.addedState +
        this.addedState + this.addedState)
    }

    AddedBehavior() {
      this.Operation()
      console.log('|........|')
    }
  }

  function initDecorator() {
    let component = new ConcreteComponent()
    let decoratorA = new ConcreteDecoratorA(Component, '!!!')
    let decoratorB = new ConcreteDecoratorB(Component, '.')

    console.log('component: ')
    component.Operation()

    console.log('decoratorA: ')
    decoratorA.Operation()

    console.log('decoratorB: ')
    decoratorB.AddedBehavior()
  }

  initDecorator()
}());