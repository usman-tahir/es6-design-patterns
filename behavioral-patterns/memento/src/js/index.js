(function() {
  'use strict';

  class Originator {
    constructor() {
      console.log('Originator()')
      this.state = 'a'
      console.log('state:', this.state)
    }

    SetMemento(Memento) {
      this.state = Memento.GetState()
      console.log('state:', this.state)
    }

    CreateMemento(state) {
      return new Memento(state)
    }
  }

  class Memento {
    constructor(state) {
      this.state = state
      console.log('Memento()')
      console.log('state:', this.state)
    }

    GetState() {
      return this.state
    }

    SetState(state) {
      this.state = state
    }
  }

  class Caretaker {
    constructor() {
      console.log('Caretaker()')
      this.mementos = []
    }

    AddMemento(memento) {
      console.log('Caretaker AddMemento()')
      this.mementos.push(memento)
    }

    SetMemento() {
      return this.mementos[this.mementos.length - 1]
    }
  }

  function initMemento() {
    let caretaker = new Caretaker()
    let originator = new Originator()

    caretaker.AddMemento(originator.CreateMemento('b'))
    originator.SetMemento(caretaker.SetMemento())
    console.log(originator.state)
  }

  initMemento()
}());