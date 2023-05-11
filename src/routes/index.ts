import { Express, Request, Response, Router } from "express";

interface RouterConf {
  path: string;
  router: Router;
  meta?: unknown;
}

const routerCof: Array<RouterConf> = [];

function routes(app: Express) {
  app.get("/", (Req: Request, res: Response) =>
    res.status(200).send("HHHHHHHHHHHHHHH")
  );

  routerCof.forEach((conf)=> app.use(conf.path, conf.router))
}

export default routes;
