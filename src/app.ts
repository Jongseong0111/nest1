import * as express from "express";

const app: express.Express = express();
import { Cat, CatType } from "./app.model";

const data = [1, 2, 3, 4];

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next();
});

app.get("/cats/som", (req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is some middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});
app.get("/cats", (req, res) => {
  res.send({ cats: Cat, blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
});

app.get("/cats/blue", (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on..");
});
