class EventEmitter {
  constructor() {
    this.events = {}; // Stores event names and their listeners
  }

  // Register a listener for a specific event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Trigger an event and call all its listeners
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }

  // Remove a specific listener from an event
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Register a one-time listener for an event
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// Example Usage
const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function farewell(name) {
  console.log(`Goodbye, ${name}!`);
}

// Register listeners
emitter.on('greet', greet);
emitter.on('farewell', farewell);

// Emit events
emitter.emit('greet', 'Alice'); // Output: Hello, Alice!
emitter.emit('farewell', 'Alice'); // Output: Goodbye, Alice!

// Remove a listener
emitter.off('greet', greet);
emitter.emit('greet', 'Bob'); // No output because the listener was removed

// One-time listener
emitter.once('greet', greet);
emitter.emit('greet', 'Charlie'); // Output: Hello, Charlie!
emitter.emit('greet', 'David'); // No output because the listener was one-time
