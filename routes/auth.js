import { Router } from "express";
const router = Router();

/**
 * @swagger
 * /auth/login:
 *   get:
 *     description: Login
 *     tags:
 *       - auth
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Login successful
 *         schema:
 *           $ref: '#/definitions/User'
 *       404:
 *         description: Username not exist
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: Wrong password
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post("/login", (req, res) => {
  // TODO: implement login
  res.send("<b>/auth/login</b> works");
});

export default router;
