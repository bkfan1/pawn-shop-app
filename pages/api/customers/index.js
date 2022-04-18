import { createCustomer, getAllCustomers } from "../../../middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAllCustomers(req, res);
      break;
    case "POST":
      return await createCustomer(req, res);
      break;

    default:
      res.status(403).json({ error: "Method not allowed." });
      break;
  }
}
