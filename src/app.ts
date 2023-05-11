import express from "express";
import routes from "./routes";
import logger from "./utils/logger";

const app = express();

app.use(express.json());

const PORT = 8080;

app.listen(PORT, async () => {
  logger.info(`http://127.0.0.1:${PORT}`);
  routes(app);
});
