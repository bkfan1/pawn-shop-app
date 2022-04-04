import connectionToDb from "../../../database/connection";
import {getAllPurchases, createPurchase} from "../../../middleware/index"


export default async function handler(req, res){
    switch (req.method) {
        case "GET":
            return await getAllPurchases(req, res);
            break;

        case "POST":
            return await createPurchase(req, res);
            break;
        default:
            return res.status(403).json({error:"Method not allowed"});
            break;
    }
}