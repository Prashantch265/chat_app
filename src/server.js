const app = require("./app");
const { port } = require("./config/config");
const { logger } = require("./utils/logger");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

http.listen(port, () => {
  logger.info(`=================================`);
  logger.info(`======= ENV: ${process.env.NODE_ENV} =======`);
  logger.info(`🚀 App listening on the port ${port}`);
  logger.info(`=================================`);
});

require("./lib/socket")(io);