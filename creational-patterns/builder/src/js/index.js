(function() {
  'use strict';

  class Director {
    constructor() {
      this.structure = ['Maze', 'Wall', 'Door']
      console.log('Director()')
    }

    Construct() {
      for(var all in this.structure) {
        let builder = new ConcreteBuilder()
        builder.BuildPart(this.structure[all])
        builder.GetResult()
      }
    }
  }

  class Builder {
    constructor() {}

    BuildPart() {}
  }

  class ConcreteBuilder extends Builder {
    constructor() {
      super()
      console.log('ConcreteBuilder()')
    }

    BuildPart(rawMaterial) {
      console.log('ConcreteBuilder BuildPart()')
      let material = rawMaterial
      this.product = new Product(material)
    }

    GetResult() {
      console.log(JSON.stringify(this.product))
      return this.product
    }
  }

  class Product {
    constructor(material) {
      console.log('Product()')
      this.data = material
    }
  }

  function initBuilder() {
    let director = new Director()
    director.Construct()
  }

  initBuilder()
}());