import express from "express";
import { show } from "../controllers/moviesController.js";
import { index } from "../controllers/moviesController.js";

const routerMovies = express.Router();

routerMovies.get("/",index);

routerMovies.get("/:id", show)

export default routerMovies;