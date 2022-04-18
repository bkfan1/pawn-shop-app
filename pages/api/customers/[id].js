import {
  deleteUniqueCustomer,
  getUniqueCustomer,
  updateUniqueCustomer,
} from "../../../middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUniqueCustomer(req, res);
      break;

    case "PUT":
      return await updateUniqueCustomer(req, res);
      break;
      
    case "DELETE":
      return await deleteUniqueCustomer(req, res);
      break;

    default:
      res.status(403).json({ error: "Method not allowed." });
      break;
  }
}
