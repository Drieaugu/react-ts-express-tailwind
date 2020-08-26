import { Router } from "express";

const route = Router();
export default (app: Router): void => {
  app.use("/", route);

  route.get("/api", (req, res) => {
    return res.json({ fruit: "pineapple" });
  });
};
