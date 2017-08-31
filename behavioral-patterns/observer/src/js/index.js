(function() {
  'use strict';

  class Subject {
    constructor() {}

    Attach(Observer) {
      this.observers.push(Observer)
      console.log('Attach()')
    }

    Detach(Observer) {
      for(let i in this.observers) {
        if(this.observers[i] === Observer) {
          this.observers.splice(i, 1)
        }
      }
    }

    Notify() {
      console.log('Notify()')
      for(let i in this.observers) {
        this.observers[i].Update(this)
      }
    }
  }

  class ConcreteSubject extends Subject {
    constructor() {
      super()
      this.subjectState = null
      this.observers = []
      console.log('ConcreteSubject()')
    }

    GetState() {
      return this.subjectState
    }

    SetState(state) {
      this.subjectState = state
      this.Notify()
    }
  }

  class Observer {
    constructor() {}

    Update() {}
  }

  class ConcreteObserver extends Observer {
    constructor() {
      super()
      this.observerState = ''
      console.log('ConcreteObserver()')
    }

    Update(Subject) {
      this.observerState = Subject.GetState()
      console.log('Observer Update()')
      console.log('state:', this.observerState)
    }
  }

  function initObserver() {
    let observerOne = new ConcreteObserver()
    let observerTwo = new ConcreteObserver()
    let subject = new ConcreteSubject()

    subject.Attach(observerOne)
    subject.Attach(observerTwo)
    subject.SetState('state 1')
  }

  initObserver()
}());