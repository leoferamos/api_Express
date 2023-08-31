import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { EditUserController } from "./controller/user/EditUserController";
import { AuthenticateUserController } from "./controller/user/AuthenticateUserController";


import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";
import { EditProductController } from "./controller/product/EditProductController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
import { EditCategoryController } from "./controller/category/EditCategoryController";


const createUserController  = new CreateUserController();
const listUsersController= new ListUsersController();
const deleteUserController= new DeleteUserController();
const editUserController = new EditUserController();
const autenticationUserController  = new AuthenticateUserController();


const createProductController  = new CreateProductController();
const listProductController= new ListProductController();
const deleteProductController= new DeleteProductController();
const editProductController = new EditProductController();

const createCategoryController  = new CreateCategoryController();
const listCategoryController= new ListCategoryController();
const deleteCategoryController= new DeleteCategoryController();
const editCategoryController = new EditCategoryController();

const router = Router();
router.post("/login", autenticationUserController.handle);
router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.put("/users/:id", editUserController.handle);

router.post("/products", createProductController.handle);
router.get("/products", listProductController.handle);
router.delete("/products/:id", deleteProductController.handle);
router.put("/products/:id", editProductController.handle);

router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);
router.put("/categories/:id", editCategoryController.handle);

export {router}