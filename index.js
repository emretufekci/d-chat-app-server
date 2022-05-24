const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
app.use(cors());
const Gun = require("gun")

const server = require('http').createServer().listen(8765);
  new Gun({
    peers: ['http://localhost:8765/gun'],
    web: server,
  });