import express from "express";
import cors from "cors";
import routerMovies from "./routes/moviesRoute.js";

const app=express()

const port=3000
app.use(cors())
app.use(express.static("public"))

app.use(express.json())

app.get("/", routerMovies);

app.use("/", routerMovies);





app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})