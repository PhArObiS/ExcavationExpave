import * as express from "express";
import MailController from "../controllers/mail.mjs";

const router = express.Router();

router.post("/send-lead", MailController.store);

export default router;
