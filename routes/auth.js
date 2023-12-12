import { Router } from "express";
import fs from "fs"; // Import the fs module
const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Login
 *     tags:
 *       - auth
 *     parameters:
 *       - in: body
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
  // res.send("<b>/auth/login</b> works");

  try {
    
    const userData = JSON.parse(fs.readFileSync('./data/user.json', 'utf8'));
    console.log(userData);

    const _username = req.params['username'];
    const _password = req.params['password'];
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
