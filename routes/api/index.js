import { Router } from "express";
import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js";

  const apirouter = Router();

  apirouter.use('/user' ,  userRouter);
  apirouter.use('/product' ,productRouter  );


  export default apirouter;