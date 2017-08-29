(function() {
  'use strict';

  class Facade {
    constructor() {
      this.log('Facade()')
      this.htmlId = null
    }

    log(text) {
      if(typeof this.htmlId === null) {
        console.log(text)
      } else {
        $('#' + this.htmlId).append(text + '<br>')
      }
    }

    erase() {
      $('#' + this.htmlId).html('')
    }

    testDesignPattern(designPattern) {
      switch(designPattern) {
        case 'Facade':
          this.htmlId = 'testFacade'
          this.erase()
          this.log('This is the Facade')
          break
        case 'AbstractFactory':
          this.htmlId = 'testAbstractFactory'
          this.erase()
          initAbstractFactory()
          break
        case 'Builder':
          this.htmlId = 'testBuilder'
          this.erase()
          initBuilder()
          break
        case 'Factory':
          this.htmlId = 'testFactory'
          this.erase()
          initFactory()
          break
        case 'Prototype':
          this.htmlId = 'testPrototype'
          this.erase()
          initPrototype()
          break
        case 'Singleton':
          this.htmlId = 'testSingleton'
          this.erase()
          initSingleton()
          break
        case 'Adapter':
          this.htmlId = 'testAdapter'
          this.erase()
          initAdapter()
          break
        case 'Bridge':
          this.htmlId = 'testBridge'
          this.erase()
          initBridge()
          break
        case 'Composite':
          this.htmlId = 'testComposite'
          this.erase()
          initComposite()
          break
        case 'Decorator':
          this.htmlId = 'testDecorator'
          this.erase()
          initDecorator()
          break
      }
    }
  }
}());