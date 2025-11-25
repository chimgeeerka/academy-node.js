import { Router } from "express";
import { login, logout } from "../controller/user.js";

export const userRouters = new Router();

userRouters.post("/login", login);
userRouters.post("/logout", logout);