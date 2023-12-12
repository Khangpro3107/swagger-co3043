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
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readLocationsData() {
  try {
    const jsonPath = path.join(__dirname, '..', 'data', 'location.json');
    const jsonData = await fs.readFile(jsonPath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading the locations data file:", error.message);
    return null;
  }
}

router.get("/all", async (req, res) => {
  try {
    const data = await readLocationsData();
    if (data) {
      res.json(data);
    } else {
      res.status(500).send("An error occurred while fetching locations data");
    }
  } catch (error) {
    res.status(500).send("An error occurred while processing the request");
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

  for (let i = 0; i < list.length; i++){
    if (list[i].id === id){
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
