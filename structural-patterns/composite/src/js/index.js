(function() {
  'use strict';

  class Component {
    constructor() {}

    Operation() {}

    Add(Component) {}

    Remove(Component) {}

    GetChild(key) {}
  }

  class Leaf extends Component {
    constructor(name) {
      super()
      this.name = name
      console.log('Leaf()')
    }

    Operation() {
      console.log('Leaf Operation(), name:', this.name)
    }
  }

  class Composite extends Component {
    constructor(name) {
      super()
      this.name = name
      this.children = []
      console.log('Composite()')
    }

    Operation() {
      console.log('Composite Operation(), name:', this.name)
      for(let i in this.children) {
        this.children[i].Operation()
      }
    }

    Add(Component) {
      this.children.push(Component)
    }

    Remove(Component) {
      for(let i in this.children) {
        if(this.children[i] === Component) {
          this.children.splice(i, 1)
        }
      }
    }

    GetChild(key) {
      return this.children[key]
    }
  }

  function initComposite() {
    let compositeOne = new Composite('C1')
    compositeOne.Add(new Leaf('L1'))
    compositeOne.Add(new Leaf('L2'))

    let compositeTwo = new Composite('C2')
    compositeTwo.Add(compositeOne)

    compositeOne.GetChild(1).Operation()
    compositeTwo.Operation()
  }

  initComposite()
}());