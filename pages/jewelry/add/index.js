import Layout from "../../../components/layout/Layout";
import JewelryForm from "../../../components/forms/JewelryForm";

export default function AddJewelrySection() {
  const jewelryPurchase = {
    jewelry: [],
  };

  return (
    <Layout>
      <JewelryForm jewelryPurchase={jewelryPurchase} />
    </Layout>
  );
}
