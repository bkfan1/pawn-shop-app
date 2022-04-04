import { deleteUniquePurchase, getUniquePurchase,updateUniquePurchase } from "../../../middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUniquePurchase(req, res);
      break;

    case "PUT":
        return await updateUniquePurchase(req, res);
        break;
    case "DELETE":
      return await deleteUniquePurchase(req, res);
      break;

    default:
        return res.status(403).json({error:"Method not allowed."});
      break;
  }
}
