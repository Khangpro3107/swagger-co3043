/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */
export default class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
