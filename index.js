class linkedList {
  constructor() {
    this.head = new node()
  }

  append(v) {
    if (this.head.value == null) {
      this.head.value = v
      return
    }

    let newNode = new node()
    newNode.value = v

    let currNode = this.head
    while (currNode.next != null) {
      currNode = currNode.next
    }

    currNode.next = newNode

  }

  prepend(v) {
    if (this.head.value == null) {
      this.head.value = v
      return
    }

    let newNode = new node()
    newNode.value = v

    let currNode = this.head
    this.head = newNode
    newNode.next = currNode

  }

  size() {
    if (this.head.value == null) {
      return 0;
    }

    let sum = 1
    let currNode = this.head

    while (currNode.next != null) {
      sum += 1
      currNode = currNode.next

    }

    return sum
  }

  getHead() {
    return this.head
  }

  getTail() {
    let currNode = this.head

    while (currNode.next != null) {
      currNode = currNode.next
    }

    return currNode
  }

  at(index) {
    if (index >= this.size()) {
      return "index is outside list range"
    }

    let currNode = this.head
    let i = 0

    while (i < index) {
      currNode = currNode.next
      i++
    }

    return currNode
  }

  pop() {
    let currNode = this.head

    while (currNode.next.next != null) {
      currNode = currNode.next
    }

    currNode.next = null
  }

  contains(v) {
    let currNode = this.head

    if (currNode.value == v) {
      return true
    }

    while (currNode.next != null) {
      currNode = currNode.next

      if (currNode.value == v) {
        return true
      }
    }

    return false
  }

  find(v) {
    let currNode = this.head
    let i = 0

    if (currNode.value == v) {
      return i
    }

    while (currNode.next != null) {
      currNode = currNode.next
      i++

      if (currNode.value == v) {
        return i
      }
    }

    return false
  }

  toString() {
    let currNode = this.head
    let str = ""

    if (currNode.value == null) {
      str += "null"

    } else if (currNode.next == null) {
      str += "( " + currNode.value + " ) -> null"

    } else {
      str += "( " + currNode.value + " )"

    }

    while (currNode.next != null) {
      currNode = currNode.next

      if (currNode.next == null) {
        str += " -> ( " + currNode.value + " ) -> null"

      } else {
        str += " -> ( " + currNode.value + " )"

      }
    }

    console.log(str)
  }

  invertAt(v, index) {
    let currNode = this.head
    let i = 0

    if (i == index) {
      currNode.value = v
    }

    while (currNode.next != null) {
      currNode = currNode.next
      i++

      if (i == index) {
        currNode.value = v
      }
    }

    return false
  }

  removeAt(index) {
    let currNode = this.head
    let i = 0

    if (i == index) {
      this.head = currNode.next
    }

    while (currNode.next != null) {
      currNode = currNode.next
      i++

      if (i == index - 1) {
        currNode.next = currNode.next.next
      }
    }

    return false
  }

}

class node {
  constructor() {
    this.value = null
    this.next = null
  }
}

let list = new linkedList()

list.append(4)
list.append(2)
list.append(0)
list.prepend(6)
console.log("size = " + list.size())
list.prepend(0)
list.append(7)
console.log("size = " + list.size())
console.log("head = " + list.getHead().value)
console.log("tail = " + list.getTail().value)
console.log("list[3] = " + list.at(3).value)
console.log("tail[0] = " + list.at(0).value)
console.log("tail[1] = " + list.at(1).value)
console.log("tail[9] = " + list.at(9))
console.log("contains(7) = " + list.contains(7))
console.log("find(7) = " + list.find(7))
list.toString()
list.pop()
console.log("contains(7) = " + list.contains(7))
console.log("find(7) = " + list.find(7))
list.toString()
list.invertAt(9, 2)
list.toString()
list.removeAt(3)
list.toString()
