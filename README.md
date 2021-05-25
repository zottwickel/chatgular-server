# Overview

This is the Node.js backend for chatgular. To be used with chatgular client version 0.0.0.

# Current Features

GET / => Returns HTML code to redirect to the client.

#### Socket.IO Events

```'chat message'``` takes a string and sends that string to all connected clients.