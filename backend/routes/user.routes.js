import { Router } from "express";
import { downloadProfile, getAllUserProfile, getUserAndProfile, login, register, updateProfileData, updateUserProfile, uploadProfilePicture } from "../controllers/user.controller.js";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); //cb->callback,null->no error,uploads/->folder name
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); //file.originalname->profile.jpg or resume.png
  },
});

const upload = multer({ storage: storage });

router.route("/update_profile_picture").post(upload.single("profile_picture"),uploadProfilePicture);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user_update").post(updateUserProfile)
router.route("/get_user_and_profile").get(getUserAndProfile)
router.route("/update_profile_data").post(updateProfileData)
router.route("/user/get_all_users").get(getAllUserProfile)
router.route("/user/download_resume").get(downloadProfile)


export default router;
