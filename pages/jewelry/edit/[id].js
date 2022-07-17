import Layout from "../../../components/layout/Layout";
import JewelryForm from "../../../components/forms/JewelryForm";

import JewelryPurchase from "../../../database/models/JewelryPurchase";
import { connection } from "../../../database/connection";

export default function editJewelryPage({ jewelryPurchase }) {
  //console.log(jewelryPurchase);
  return (
    <Layout>
      <JewelryForm jewelryPurchase={jewelryPurchase} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const conn = await connection();
  const jewelryPurchase = await JewelryPurchase.findById(
    context.params.id
  ).lean();

  jewelryPurchase._id = `${jewelryPurchase._id}`;
  jewelryPurchase.createdAt = `${jewelryPurchase.createdAt}`;
  jewelryPurchase.date = `${jewelryPurchase.date}`;

  return { props: { jewelryPurchase } };
}
