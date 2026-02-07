import { Router } from "express";
import { activeCheck } from "../controllers/posts.contoller.js";




const router=Router()    //express ka router



router.route('/').get(activeCheck);

export default router;