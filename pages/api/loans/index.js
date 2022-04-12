import { getAllLoans, createLoan } from "../../../middleware/index";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAllLoans(req, res);
      break;
    case "POST":
      return await createLoan(req, res);
      break;

    default:
      res.status(403).json({ error: "Method not allowed" });
      break;
  }
}
