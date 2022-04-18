import {getAllJewelryPurchases, createJewelryPurchase} from "../../../middleware/index"


export default async function handler(req, res){
    switch (req.method) {
        case "GET":
            return await getAllJewelryPurchases(req, res);
            break;

        case "POST":
            return await createJewelryPurchase(req, res);
            break;
        default:
            return res.status(403).json({error:"Method not allowed"});
            break;
    }
}