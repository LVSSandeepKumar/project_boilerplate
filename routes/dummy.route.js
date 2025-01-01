import { Router } from "express";
import { dummy } from "../controllers/dummy.controller";

const router = Router();

router.get("/", dummy);

export default router;