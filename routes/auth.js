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
  try {
    
    const userData = JSON.parse(fs.readFileSync("data/user.json", "utf8"));

    const { username, password } = req.body;

    // Check if the provided username exists in the fetched data
    if (userData.username !== username) {
      return res.status(404).json({ message: "Username not exist" });
    }

    // Check if the provided password matches the fetched password
    if (userData.password !== password) {
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
