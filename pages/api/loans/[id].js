import {getUniqueLoan, updateUniqueLoan, deleteUniqueLoan} from "../../../middleware/index";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUniqueLoan(req, res);
      break;
    case "PUT":
      return await updateUniqueLoan(req, res);
      break;
    case "DELETE":
      return await deleteUniqueLoan(req, res);
      break;

    default:
      res.status(403).json({ error: "Method not allowed" });
      break;
  }
}
