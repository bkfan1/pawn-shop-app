import { createPawn, getAllPawns } from "../../../middleware/pawns/index";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAllPawns(req, res);
      break;
    case "POST":
      return await createPawn(req, res);
      break;

    default:
      res.status(400).json({});
      break;
  }
}
