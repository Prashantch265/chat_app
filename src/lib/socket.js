const { createServer } = require("http");
const { Server } = require("socket.io");
const { logger } = require("../utils/logger");

// module.exports = (app) => {
//   const httpServer = createServer(app);
//   const io = new Server(httpServer, {});

//   io.on("connection", (socket) => {});

//   io.of()

//   httpServer.listen(5000, () => {
//     logger.info(`socket listening to 5000`);
//   });
// };

module.exports = (io) => {
  io.on("connection", (socket) => {
    logger.info("Connected to socket");

    socket.on("disconnect", () => {
      logger.info("Client disconnected");
    });

    socket.on("chat message", function (msg) {
      logger.info("Received a chat message");
      io.emit("chat message", msg);
    });
    
  });
};
