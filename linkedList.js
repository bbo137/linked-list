/* eslint-disable max-classes-per-file */
//import Node from "./node";

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.t_size = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    let aux = this.head;
    if (this.t_size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.t_size += 1;
      return
    }
    while (aux.next != null) {
      aux = aux.next;
    }
    aux.next = newNode;
    this.tail = newNode;
    this.t_size += 1; 
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.t_size === 0) this.tail = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.t_size += 1; 
  }

  size() {
    return this.t_size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index > this.t_size || index < 0) return null;
    let aux = this.head;
    for (let i = 0; i < index; i++) {
      aux = aux.next;
    }
    return aux;
  }

  pop() {
    if (this.t_size === 0) return;
    let previous = this.head;
    let current = previous.next;
    if (this.t_size <= 1) {
      this.head = null;
      this.tail = null;
      this.t_size = 0;
      return;
    }
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.tail = previous;
    this.t_size -=1;
  }

  contains(value) {
    let aux = this.head;
    while (aux != null) {
      if (aux.value === value) {
        return true;
      }
      aux = aux.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let aux = this.head;
    while (aux != null) {
      if (aux.value === value) {
        return index;
      }
      aux = aux.next;
      index += 1;
    }
    return null;
  }

  toString() {
    let string = '';
    let aux = this.head;
    while (aux != null) {
      string += `(${aux.value}) -> `;
      aux = aux.next;
    } 
    return string;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index > this.t_size || index < 0) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.t_size) {
      this.append(value);
      return
    }
    let previous = this.head;
    let current = previous.next;
    for (let i = 0; i < index-1; i++) {
      previous = current;
      current = current.next;
    }
    newNode.next = current;
    previous.next = newNode;
    this.t_size += 1;
  }

  removeAt(value, index){
    if (index >= this.t_size || index < 0) return;
    if (index === 0) {
      this.head = this.head.next;
      this.t_size -= 1;
      return;
    }
    if (index === this.t_size) {
      this.pop();
    }
    let previous = this.head;
    let current = previous;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next    
    }
    previous.next = current.next;
    this.t_size -=1;
  }
}

const list = new LinkedList();

