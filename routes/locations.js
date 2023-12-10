import { Router } from "express";
const router = Router();

/**
 * @swagger
 * /locations/all:
 *   get:
 *     description: Get all saved locations
 *     tags:
 *       - locations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all saved locations
 *         schema:
 *           $ref: '#/definitions/Locations'
 */
router.get("/all", (req, res) => {
  // TODO: implement get all locations
  res.send("<b>/locations/all</b> works");
});

/**
 * @swagger
 * /locations/location/{id}:
 *   get:
 *     description: Get a single location by id
 *     tags:
 *       - locations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return the found location
 *         schema:
 *           $ref: '#/definitions/Location'
 *       404:
 *         description: Location with the specified id not found
 */
router.get("/location/:id", (req, res) => {
  // TODO: implement get location by id
  res.send("<b>/locations/location/{id}</b> works");
});

export default router;
