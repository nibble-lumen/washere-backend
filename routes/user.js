import { Router } from "express";
const router = Router();
import auth from "../middleware/auth.js";

import { getAll, register, login } from "../controllers/user.js";

/**
 * @swagger
 * /:
 *  get:
 *    tags:
 *    - "/user/"
 *    summary: Get all users
 *    parameters:
 *    - in: header
 *      name: Bearer
 *      description: User token
 *    responses:
 *      '200':
 *        description: All
 *      '400':
 *        description: An unsuccessful response
 */

router.get("/", auth, getAll);

/**
 * @swagger
 * /:
 *  post:
 *    tags:
 *    - "/user/"
 *    summary: Register a new user
 *    parameters:
 *    - name: "body"
 *      in: "body"
 *      description: "User's information"
 *      schema:
 *        type: "object"
 *        properties:
 *          role_id:
 *            type: "string"
 *          fullname:
 *            type: "string"
 *          username:
 *            type: "string"
 *          email:
 *            type: "string"
 *          password:
 *            type: "string"
 *          newsletter:
 *            type: boolean
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              default: true
 *            message:
 *              type: string
 *              default: You have been successfully registered!
 *      '400':
 *        description: An unsuccesful response
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              default: false
 *            message:
 *              type: string
 */

router.post("/", register);

/**
 * @swagger
 * /login:
 *  post:
 *    tags:
 *    - "/user/"
 *    summary: Login a user
 *    parameters:
 *    - name: "body"
 *      in: "body"
 *      description: "User's information"
 *      schema:
 *        type: "object"
 *        properties:
 *          email:
 *            type: "string"
 *          password:
 *            type: "string"
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              default: true
 *            token:
 *              type: string
 *            message:
 *              type: string
 *              default: You have been successfully logged in!
 *
 *      '400':
 *        description: An unsuccesful response
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              default: false
 *            message:
 *              type: string
 */

router.post("/login", login);

export default router;
