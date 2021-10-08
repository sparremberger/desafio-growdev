import express from "express";
import {
    getComments,
    postComment,
    getApi,
    postContact,
} from "../controllers/mainController";
const router = express.Router();

router.route("/").get(getApi);

router.route("/comments").get(getComments);
router.route("/comments").post(postComment);
router.route("/contact").post(postContact);

export default router;
