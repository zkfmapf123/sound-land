import { AuthController } from "./api/api.index";
import App from "./App";
import config from "./config";

(async() => {
  const app = new App({
    controllers: [
      new AuthController()
    ],
    port: +config.port,
    dev: config.dev as "dev" | "build"
  });

  await app.listen();
})();