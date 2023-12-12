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
  res.send("<b>/auth/login</b> works");

  try {
    
    const userData = JSON.parse(fs.readFileSync('./data/user.json', 'utf8'));
    console.log(userData);

    const _username = req.params['username'];

    const _password = req.params['password'];

    const list = userData['users'];
    var item_username = null;
    var item_password = null;
  
    for (let i = 0; i < list.length; i++){
      if (list[i].username === _username){
        item_username = list[i].username;
        break;
      }
    }

    for (let i = 0; i < list.length; i++){
      if (list[i].password === _password){
        item_username = list[i].password;
        break;
      }
    }
    // Check if the provided username exists in the fetched data
    if (item_password == null) {
      return res.status(404).json({ message: "Username not exist" });
    }

    // Check if the provided password matches the fetched password
    if (userData.password == null) {
      return res.status(401).json({ message: "Wrong password" });
    }

    // username and password are correct
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
