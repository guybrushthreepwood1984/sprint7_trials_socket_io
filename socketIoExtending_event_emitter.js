/* 
In Node.js, you can extend the EventEmitter class to create your own classes that can emit events. However, in Socket.IO, each socket is already an instance of EventEmitter, so you don't typically need to extend it. Instead, you can just use the on method to listen for events and the emit method to emit events.

If you want to add additional functionality to the Socket.IO sockets, you could wrap the Socket.IO functionality in your own class. Here's an example:
*/

import { EventEmitter } from 'events';
import io from 'socket.io-client';

class MySocket extends EventEmitter {
  constructor(url) {
    super();
    this.socket = io(url);

    // Forward all events from the internal socket to this object
    this.socket.onAny((event, ...args) => {
      this.emit(event, ...args);
    });
  }

  // Add your own methods here
  sendChatMessage(msg) {
    this.socket.emit('chat message', msg);
  }
}

// Usage:
const mySocket = new MySocket('http://localhost:3000');
mySocket.on('chat message', (msg) => {
  console.log('Received chat message:', msg);
});
mySocket.sendChatMessage('Hello, world!');
