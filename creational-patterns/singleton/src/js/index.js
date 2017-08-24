(function() {
  'use strict';

  let _singleton = null

  class Singleton {
    constructor(data) {
      if (!_singleton) {
        this.data = data
        _singleton = this
      } else {
        return _singleton
      }
      console.log('Singleton()')
    }

    SingletonOperation() {
      console.log('SingletonOperation()')
    }

    GetSingletonData() {
      return this.data
    }
  }

  function initSingleton() {
    var singletonOne = new Singleton('dataOne')
    var singletonTwo = new Singleton('dataTwo')

    console.log(singletonOne.GetSingletonData())
    console.log(singletonTwo.GetSingletonData())

    console.log(singletonOne instanceof Singleton)
    console.log(singletonTwo instanceof Singleton)

    console.log(singletonOne === singletonTwo)
  }

  initSingleton()
}());