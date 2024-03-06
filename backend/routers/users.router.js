import express from 'express';
import protectedRoute from '../middleware/protectedRouter.js';
import {users} from "../controllers/users.controller.js"

const router = express.Router();

router.get("/", protectedRoute,users)

export default router;