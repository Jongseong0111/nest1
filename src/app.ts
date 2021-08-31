import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  let jong = { d: "dd" };
  res.send(jong);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
