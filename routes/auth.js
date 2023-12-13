import { Router } from "express";
import fs from "fs";
const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Login (test data: [{"admin", "admin"}, {"manager", "manager"}])
 *     tags:
 *       - auth
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *         examples:
 *           value:
 *             username: john.doe
 *             password: 123456
 *     responses:
 *       200:
 *         description: Login successful
 *       404:
 *         description: Username not exist
 *       401:
 *         description: Wrong password
 */
router.post("/login", (req, res) => {
  try {
    
    const userData = JSON.parse(fs.readFileSync('./data/user.json', 'utf8'));
    console.log(userData);

    const _username = req.body['username'];
    const _password = req.body['password'];
    const list = userData['users'];
    for (let i = 0; i < list.length; i++){
      if (list[i].username === _username){
        if (list[i].password !== _password){
          return res.status(401).json({ message: "Wrong password" });
        }
        return res.status(200).json({ message: "Login successful" });     
      }
    }
    return res.status(404).json({ message: "Username not exist" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
