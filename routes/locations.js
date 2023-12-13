import { Router } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
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
  try {
    const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../data/location.json');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File location.json not found' });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    if (data && data.locations) {
      res.status(200).json(data.locations);

    } else {
      res.status(404).json({ message: 'No locations found in the file' });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: 'An error occurred while fetching locations data', error: error.message });
  }
});


/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     description: Get a single location by id ("1", "2", or "3")
 *     tags:
 *       - locations
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the location ("1", "2", or "3")
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return the found location
 *         schema:
 *           $ref: '#/definitions/Location'
 *       404:
 *         description: Location with the specified id not found
 */
router.get("/:id", (req, res) => {
  // TODO: implement get location by id
  const data = JSON.parse(fs.readFileSync('./data/location.json', 'utf8'));
  console.log(data);
  const id = req.params.id;
  const list = data['locations'];
  var item = null;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      item = list[i];
      break;
    }
  }

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: 'Location ID not found' });
  }
});

export default router;
