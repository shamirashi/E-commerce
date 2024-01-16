import { Router } from "express";
import multer from "multer";

import auth from "./auth.js"
import * as fileHandler from "./request-handler.js";

const storage = multer.diskStorage({
    destination: "./file",
    filename: (req, file, cb) => {
        cb(null,  file.originalname);
    }
});

const upload = multer({ storage: storage }).fields([
    { name : "profile" , maxCount: 1}
])

const storage1 = multer.diskStorage({
    destination: "./products",
    filename: (req, file, cb) => {
        cb(null,  file.originalname);
    }
});

const uploader = multer({ storage: storage1 }).fields([
    { name : "image" , maxCount: 1}
])

const router = Router();

router.route("/register").post(upload,fileHandler.register);
router.route("/login").post(fileHandler.login);

router.route("/get-private-data").get(auth,fileHandler.getPrivateData);


router.route("/Product1").post(uploader,fileHandler.product1);
router.route("/Product1/glass").get(fileHandler.getGlass);
router.route("/Product1/glass1/:id").get(fileHandler.getGlassView);

router.route("/Product2").post(uploader,fileHandler.product2);
router.route("/Product2/sandal").get(fileHandler.getSandal);
router.route("/Product2/sandal1/:id").get(fileHandler.getSandalView);

router.route("/Product3").post(uploader,fileHandler.product3);
router.route("/Product3/jacket").get(fileHandler.getJackets);
router.route("/Product3/jacket1/:id").get(fileHandler.getJacketView);

router.route("/Product4").post(uploader,fileHandler.product4);    
router.route("/Product4/cloth").get(fileHandler.getCloth);
router.route("/Product4/cloth1/:id").get(fileHandler.getClothView);

router.route("/Products").get(fileHandler.getProducts); 

router.route("/get-user-orders/:id").get(fileHandler.getUserProd); 

export default router; 