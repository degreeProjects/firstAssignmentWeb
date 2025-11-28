import { Express } from "express";
import postsRoute from "../routes/postRoutes";

export const configRoutes = (app: Express) => {
  app.use("/posts", postsRoute);
};