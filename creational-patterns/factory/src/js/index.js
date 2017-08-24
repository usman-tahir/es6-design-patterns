(function() {
  'use strict';

  class Product {
    constructor() {}
  }

  class ConcreteProduct extends Product {
    constructor() {
      super()
      console.log('ConcreteProduct()')
    }
  }

  class Creator {
    constructor() {}

    FactoryMethod() {}

    SomeOperation() {
      console.log('SomeOperation()')
      this.product = this.FactoryMethod()
      console.log(this.product instanceof ConcreteProduct)
    }
  }

  class ConcreteCreator extends Creator {
    constructor() {
      super()
      console.log('ConcreteCreator()')
    }

    FactoryMethod() {
      return new ConcreteProduct()
    }
  }

  function initFactoryMethod() {
    let factory = new ConcreteCreator()
    factory.SomeOperation()
  }

  initFactoryMethod()
}());