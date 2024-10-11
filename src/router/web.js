import express from "express";
import HomeController from "../controllers/homeController";
import UserController from "../controllers/userController";
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

  router.post("/api/login", UserController.handleLogin);
  router.get("/api/get-all-users", UserController.handleGetAllUsers);
  router.post("/api/create-user", UserController.handleCreateUser);
  router.put("/api/edit-user", UserController.handleEditUser);
  router.delete("/api/delete-user", UserController.handleDeleteUser);

  return app.use("/", router);
};
module.exports = initWebRoutes;
