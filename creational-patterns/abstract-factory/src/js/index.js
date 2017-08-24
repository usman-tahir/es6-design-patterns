(function() {
  'use strict';

  class AbstractFactory {
    constructor() {}

    createProductA() {}

    createProductB() {}
  }

  class ConcreteFactoryOne extends AbstractFactory {
    constructor() {
      super()
      console.log('ConcreteFactoryOne()')
    }

    createProductA(product) {
      console.log('ConcreteFactoryOne createProductA()')
      return new ProductA_One()
    }

    createProductB(product) {
      console.log('ConcreteFactoryOne createProductB()')
      return new ProductB_One()
    }
  }

  class ConcreteFactoryTwo extends AbstractFactory {
    constructor() {
      super()
      console.log('ConcreteFactoryTwo()')
    }

    createProductA(product) {
      console.log('ConcreteFactoryTwo createProductA()')
      return new ProductA_Two()
    }

    createProductB() {
      console.log('ConcreteFactoryTwo createProductB()')
      return new ProductB_Two()
    }
  }

  class AbstractProductA {
    constructor() {}
  }

  class AbstractProductB {
    constructor() {}
  }

  class ProductA_One extends AbstractProductA {
    constructor() {
      super()
      console.log('ProductA_One created')
    }
  }

  class ProductA_Two extends AbstractProductA {
    constructor() {
      super()
      console.log('ProductA_Two created')
    }
  }

  class ProductB_One extends AbstractProductA {
    constructor() {
      super()
      console.log('ProductA_One created')
    }
  }

  class ProductB_Two extends AbstractProductB {
    constructor() {
      super()
      console.log('ProductB_Two created')
    }
  }

  function initAbstractFactory() {
    let factoryOne = new ConcreteFactoryOne()
    let productB_One = factoryOne.createProductB()

    let factoryTwo = new ConcreteFactoryTwo()
    let productA_Two = factoryTwo.createProductA()
  }

  initAbstractFactory()
}());