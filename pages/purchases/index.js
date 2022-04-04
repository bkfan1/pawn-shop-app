import Layout from "../../components/Layout/Layout";
import PurchasesTable from "../../components/tables/PurchasesTable";

export default function PurchasesSection({ purchases }) {
  console.log(purchases);
  return (
    <Layout>
      <main>
        <PurchasesTable purchases={purchases} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/purchases");

  const purchases = await res.json();

  return { props: { purchases } };
}
