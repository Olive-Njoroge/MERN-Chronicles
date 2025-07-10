// Import the Express framework to create a web server
const express = require("express");

// Import dotenv to load environment variables from a .env file
const dotenv = require('dotenv');

// Import the built-in HTTP module to create a server
const http = require('http');

// Import Server class from socket.io to enable real-time communication
const { Server } = require('socket.io');

// Load environment variables from the .env file into process.env
dotenv.config();

// Initialize the Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize a new Socket.IO server and attach it to the HTTP server
const io = new Server(server, {
    cors: {
        origin: '*', // Allow requests from any origin (CORS policy)
    },
});

// Listen for client connections to the Socket.IO server
io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);  // Log when a new client connects

    // Listen for 'message' events sent by the client
    socket.on('message', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('message', msg);
    });

    // Listen for the client disconnecting
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);  // Log when a client disconnects
    });
});

// Start the HTTP server and listen on the specified port from .env or fallback to 5000
server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
