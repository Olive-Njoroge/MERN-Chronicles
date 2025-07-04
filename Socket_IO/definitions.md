# Traditional HTTP vs. WebSockets

## HTTP:
- Client requests data → Server responds → Connection closes.

## WebSockets:
- Persistent connection between client and server enabling bi-directional communication.

---

# How WebSockets Work:
1. Client sends a handshake request.
2. Server acknowledges and upgrades to WebSocket.
3. Both parties can now send messages asynchronously.

---

# What is Socket.IO?

**Socket.IO** is a JavaScript library that facilitates real-time, bi-directional, and event-based communication between web clients and servers.  
It allows for instant data transfer and updates between the client and server, making it suitable for applications like:
- Chat applications
- Collaborative tools
- Real-time dashboards

**Socket.IO** builds on top of WebSockets, providing additional features such as:
- Automatic reconnection
- Fallback to other transport protocols when WebSockets are not available

---

# Key Features of Socket.IO:
- **Automatic reconnection**
- **Event-based communication**
- **Room management** for group interactions
- **Cross-browser compatibility**

---

# Setting Up a Real-Time Server Using Socket.IO

### Install Required Packages:
```bash
pnpm add socket.io
