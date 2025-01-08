/* eslint-disable array-callback-return */
import React, { useState } from 'react';

function LikedList() {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class Linked {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    pop() {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    shift() {
      if (!this.head) return 'undefined';
      let newHead = this.head.next;
      this.head = newHead;
      this.length--;
    }
  }

  const Tabs = [
    { name: 'tab1' },
    { name: 'tab2' },
    { name: 'tab3' },
    { name: 'tab4' },
    { name: 'tab5' },
  ];

  const [linked, setLinked] = useState(new Linked());

  const handleTabClicks = (text) => {
    if (linked.length < 3) {
      linked.push(text);
    } else {
      linked.pop();
      linked.push(text);
    }
    console.log('linked list', linked);
    setLinked(linked);
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
          backgroundColor: '#FFA07A',
        }}
      >
        {Tabs.map((ele, i) => (
          <p
            onClick={() => handleTabClicks(ele.name)}
            key={i}
            style={{
              padding: '10px',
              fontSize: '20px',
              fontWeight: '500',
            }}
          >
            {ele.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LikedList;
