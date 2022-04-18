import JewelryForm from "../../../components/forms/JewelryForm";
import Layout from "../../../components/layout/Layout";
import { nanoid } from "nanoid";
const jewelryPurchaseHolder = {
    jewelry: [
      
    ],
  };


export default function AddJewelrySection(){
    return(
        <Layout>
            <JewelryForm jewelryPurchase={jewelryPurchaseHolder} />
            
        </Layout>
    )
}