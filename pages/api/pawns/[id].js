import {
  deleteUniquePawn,
  getUniquePawn,
  updateUniquePawn,
} from "../../../middleware/pawns/index";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUniquePawn(req, res);
      break;

    case "PUT":
      return await updateUniquePawn(req, res);
      break;

    case "DELETE":
      return await deleteUniquePawn(req, res);
      break;

    default:
      res.status(400).json({});
      break;
  }
}
