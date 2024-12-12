import express from "express";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log(`Server is listening at the port: ${3000}`);
});
