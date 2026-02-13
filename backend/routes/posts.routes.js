import { Router } from "express";
import { activeCheck, createPost } from "../controllers/posts.contoller.js";
import multer from "multer";




const router=Router()    //express ka router


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); //cb->callback,null->no error,uploads/->folder name
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); //file.originalname->profile.jpg or resume.png
  },
});

const upload = multer({storage:storage});

router.route('/').get(activeCheck);

router.route('/post').post(upload.single('media'),createPost);


export default router;