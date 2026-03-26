import { Router } from "express";
import { createUser, getAllUsers, deleteUser, updateUser, getUser, verifyEmail, verifyOTP } from "../../controllers/apiController/userController.js";

const userRouter = Router();

// Create user
userRouter.post('/', createUser);

// Get all users
userRouter.get('/', getAllUsers);

// Get single user by ID
userRouter.get('/:id', getUser);

// Update user by ID
userRouter.patch('/:id', updateUser);

// Delete user by ID
userRouter.delete('/:id', deleteUser);

// Verify email
userRouter.post('/verifyEmail', verifyEmail);

// Verify OTP
userRouter.post('/verifyOTP', verifyOTP);

export default userRouter;