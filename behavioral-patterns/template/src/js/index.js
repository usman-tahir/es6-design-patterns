(function() {
  'use strict';

  class AbstractClass {
    constructor() {}

    TemplateMethod() {
      this.PrimitiveOperationOne()
      this.PrimitiveOperationTwo()
    }

    PrimitiveOperationOne() {}

    PrimitiveOperationTwo() {}
  }

  class ConcreteClass extends AbstractClass {
    constructor() {
      super()
      console.log('ConcreteClass()')
    }

    PrimitiveOperationOne() {
      console.log('ConcreteClass PrimitiveOperationOne()')
    }

    PrimitiveOperationTwo() {
      console.log('ConcreteClass PrimitiveOperationTwo()')
    }
  }

  function initTemplate() {
    let classOne = new ConcreteClass()
    classOne.TemplateMethod()
  }

  initTemplate()
}());