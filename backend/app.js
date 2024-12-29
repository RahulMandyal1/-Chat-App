import express from "express";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/lib/db.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);

io.on("connection", (socket) => {
  console.log("A new user has been connected successfully");
  socket.on("send name", (username) => {
    io.emit("send name", username);
  });

  socket.on("send message", (chat) => {
    io.emit("send message", chat);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening at the port: ${PORT}`);
});
