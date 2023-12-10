/**
 * @swagger
 * definitions:
 *   Location:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - image
 *       - description
 *       - address
 *       - extra
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       image:
 *         type: string
 *       description:
 *         type: string
 *       address:
 *         type: string
 *       extra:
 *         type: string
 *   Locations:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Location'
 */
export default class Location {
  constructor(id, name, image, description, address, extra) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.address = address;
    this.extra = extra;
  }
}
