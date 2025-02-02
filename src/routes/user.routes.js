import express from "express";
import {
  UserSchema,
  UserLoginSchema,
  TestQuerySchema,
  getUserDoc,
  getUserByIdDoc,
  testQueryDoc,
} from "../schemas/user.schema.js";
import { commonValidations } from "../schemas/commonValidation.js";
import * as userController from "../controllers/user.controller.js";
import RouteRegistrar from "../helper/RouteRegistrar.js";
import { userLoginDoc } from "../schemas/user.schema.js";

const router = express.Router();

const registrar = new RouteRegistrar(router);

registrar.post("/authJWT/login", {
  openApiDoc: userLoginDoc,
  schema: { bodySchema: UserLoginSchema },
  controller: userController.postUserLogin,
});

registrar.get("/", {
  openApiDoc: getUserDoc,
  schema: { bodySchema: UserSchema },
  controller: userController.postUserLogin,
});

registrar.get("/test-query", {
  openApiDoc: testQueryDoc,
  schema: { querySchema: TestQuerySchema },
  controller: (req, res) => {
    res.send("test query");
  },
});

registrar.get("/:id", {
  openApiDoc: getUserByIdDoc,
  schema: { paramsSchema: { id: commonValidations.id } },
  controller: (req, res) => {
    res.send("get user by id");
  },
});

export default router;
