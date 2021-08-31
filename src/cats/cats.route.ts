//* Read 고양이 전체 데이터 조회
import * as express from "express";

const app: express.Express = express();

import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* 특정 고양이 조회

router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* Create new Cat

router.post("/cats/", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);

    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        data,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* Update cats -> Put

router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const data = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = data;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* Update part of cats -> Patch

router.patch("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const data = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...data };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});
//* Delete cats

router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});
export default router;
