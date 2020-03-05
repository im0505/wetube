import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
  getLogin,
  logout,
  getJoin,
  postLogin,
  postJoin
} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
