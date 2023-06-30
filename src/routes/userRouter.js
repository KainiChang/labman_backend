import { Router } from "express";
import { getUser, getUserByStudentID} from "../controllers/users/apiFunctions/getUsers.js";
import { newUser} from "../controllers/users/apiFunctions/postUsers.js";
import { updateUser} from "../controllers/users/apiFunctions/putUser.js";
import { deleteUser} from "../controllers/users/apiFunctions/deleteUsers.js";
import { loginValidation} from "../controllers/users/apiFunctions/loginValidation.js";

const userRouter = Router();

//query users
userRouter.get("/", getUser);
userRouter.get("/:student_id", getUserByStudentID);
userRouter.post("/:student_id/login", loginValidation);
  
//insert a new user/student
userRouter.post("/", newUser);

userRouter.put("/:student_id", updateUser);

userRouter.delete("/:student_id", deleteUser);

export { userRouter };