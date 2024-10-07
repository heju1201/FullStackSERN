import express from "express";
import HomeController from "../controllers/HomeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", HomeController.getHomePage);
  router.get("/crud", HomeController.getCRUD);
  router.get("/about", HomeController.getAboutPage);
  router.post("/post-crud", HomeController.postCRUD);
  router.get("/get-users", HomeController.displayUsers);
  router.get("/edit-user", HomeController.editUser);
  router.post("/put-user", HomeController.putUser);
  router.get("/delete-user", HomeController.deleteUser);
  return app.use("/", router);
};
module.exports = initWebRoutes;
