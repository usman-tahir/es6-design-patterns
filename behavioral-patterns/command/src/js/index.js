(function() {
  'use strict';

  class Invoker {
    constructor() {
      console.log('Invoker()')
    }

    StoreCommand(command) {
      this.command = command
    }
  }

  class Command {
    constructor() {}

    Execute() {}
  }

  class ConcreteCommand extends Command {
    constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('ConcreteCommand()')
    }

    Execute() {
      console.log('ConcreteCommand Execute()')
      this.receiver.Action()
    }
  }

  class Receiver {
    constructor() {
      console.log('Receiver()')
    }

    Action() {
      console.log('Receiver Action()')
    }
  }

  function initCommand() {
    let invoker = new Invoker()
    let receiver = new Receiver()
    let command = new ConcreteCommand(receiver)

    invoker.StoreCommand(command)
    invoker.command.Execute()
  }

  initCommand()
}());