import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";
import JewelryPurchase from "../../database/models/JewelryPurchase";
import {connection} from "../../database/connection";

export default function AllJewelryPurchasesPage({ jewelryPurchases }) {
  return (
    <Layout>
      <ViewOnlyTable data={jewelryPurchases} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const conn = await connection();
  const res = await JewelryPurchase.find({});

  const jewelryPurchases = res.map((doc) => {
    const jewelryPurchase = doc.toObject();
    jewelryPurchase._id = `${jewelryPurchase._id}`;
    jewelryPurchase.createdAt = `${jewelryPurchase.createdAt}`;

    return jewelryPurchase;
  });

  return { props: { jewelryPurchases } };
}
