(function() {
  'use strict';

  class Mediator {
    constructor() {}

    ColleagueChanged(colleague) {}
  }

  class ConcreteMediator extends Mediator {
    constructor() {
      super()
      console.log('ConcreteMediator()')
      this.colleagueOne = new ConcreteColleagueOne(this)
      this.colleagueTwo = new ConcreteColleagueTwo(this)
    }

    ColleagueChanged(colleague) {
      switch(colleague) {
        case this.colleageOne:
          console.log('colleageOne has changed -> change colleagueTwo.feature')
          this.colleageTwo.setFeature('new feature 2')
          break
        case this.colleagueTwo:
          console.log('colleagueTwo has changed -> do nothing')
          break
        default:
          console.log('do nothing')
          break
      }
    }
  }

  class Colleague {
    constructor() {}

    Changed() {}
  }

  class ConcreteColleagueOne extends Colleague {
    constructor(mediator) {
      super()
      console.log('ConcreteColleagueOne()')
      this.mediator = mediator
      this.feature = 'feature 1'
    }

    setFeature(feature) {
      console.log('ConcreteColleagueOne\'s feature has changed from ' +
        this.feature + ' to ' + feature)
      this.Changed()
    }
  }

  class ConcreteColleagueTwo extends Colleague {
    constructor(mediator) {
      super()
      console.log('ConcreteColleagueTwo()')
      this.mediator = mediator
      this.feature = 'feature 2'
    }

    setFeature(feature) {
      console.log('ConcreteColleagueTwo feature has changed from ' +
        this.feature + ' to ' + feature)
      this.Changed()
    }
  }

  function initMediator() {
    let mediator = new ConcreteMediator()
    mediator.colleagueOne.setFeature('new feature 1')
  }

  initMediator()
}());