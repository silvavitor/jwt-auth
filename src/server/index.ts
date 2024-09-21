import express from "express";
import { makeListLeadsController } from "../factories/makeListLeadsController";
import { makeSignInController } from "../factories/makeSignInController";
import { makeSignUpController } from "../factories/makeSignUpController";
import { routeAdapter } from "./adapters/routeAdapter";

const app = express();

app.use(express.json());

app.post("/signup", routeAdapter(makeSignUpController()));
app.post("/signin", routeAdapter(makeSignInController()));

app.get("/leads", routeAdapter(makeListLeadsController()));

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
