import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

import { connection } from "../../database/connection";
import JewelryPurchase from "../../database/models/JewelryPurchase";

export default function AllJewelryPurchasesSection({ jewelryPurchases }) {
  return (
    <Layout>
      <ViewOnlyTable data={jewelryPurchases} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const db = await connection();
  const res = await JewelryPurchase.find({});

  const jewelryPurchases = res.map((doc) => {
    const jewelryPurchase = doc.toObject();
    jewelryPurchase._id = `${jewelryPurchase._id}`;
    jewelryPurchase.createdAt = `${jewelryPurchase.createdAt}`;

    return jewelryPurchase;
  });

  return { props: { jewelryPurchases } };
}
