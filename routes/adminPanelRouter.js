import { Router } from "express";
import { homePage, loginPage, registerPage } from "../controllers/adminPanelController.js";

 const adminPanelRouter = Router();

 adminPanelRouter.get('/' , homePage);
 adminPanelRouter.get('/login' , loginPage);
 adminPanelRouter.get('/register' , registerPage);


 export default adminPanelRouter;