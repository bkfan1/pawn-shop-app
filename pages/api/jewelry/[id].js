import { getUniqueJewelryPurchase, updateUniqueJewelryPurchase,deleteUniqueJewelryPurchase } from "../../../middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUniqueJewelryPurchase(req, res);
      break;

    case "PUT":
        return await updateUniqueJewelryPurchase(req, res);
        break;
    case "DELETE":
      return await deleteUniqueJewelryPurchase(req, res);
      break;

    default:
        return res.status(403).json({error:"Method not allowed."});
      break;
  }
}
