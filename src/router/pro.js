import express from "express"
import { getALL ,getdetail,create,remove,update} from "../controllers/pro.js"
const router= express.Router();
router.get("/user",getALL);
router.get("/user/:id",getdetail),
router.post("/user/add",create)
router.delete("/user/:id",remove)
router.put("/user/:id",update)
export  default router