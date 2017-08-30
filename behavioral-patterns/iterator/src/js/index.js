(function() {
  'use strict';

  class Iterator {
    constructor() {}

    First() {}

    Next() {}

    IsDone() {}

    CurrentItem() {}
  }

  class ConcreteIterator extends Iterator {
    constructor(aggregate) {
      super()
      console.log('ConcreteIterator()')
      this.cursor = 0
      this.aggregate = aggregate
    }

    First() {
      return this.aggregate.list[0]
    }

    Next() {
      this.cursor += 2
      return this.aggregate.list[this.cursor]
    }

    CurrentItem() {
      return this.aggregate.list[this.cursor]
    }
  }

  class Aggregate {
    constructor() {}

    CreateIterator() {}
  }

  class ConcreteAggregate extends Aggregate {
    constructor(list) {
      super()
      this.list = list
      console.log('ConcreteAggregate()')
    }

    CreateIterator() {
      this.iterator = new ConcreteIterator(this)
    }
  }

  function initIterator() {
    let list = [0, 1, 2, 3, 4, 5, 6, 7]
    let aggregate = new ConcreteAggregate(list)

    aggregate.CreateIterator()

    console.log(aggregate.iterator.First())
    console.log(aggregate.iterator.Next())
    console.log(aggregate.iterator.CurrentItem())
  }

  initIterator()
}());