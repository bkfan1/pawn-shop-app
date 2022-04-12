import Router, { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import PurchasesTable from "../../components/tables/PurchasesTable";

export default function PurchasesSection({ purchases }) {
  
  return (
    <Layout>
      <main className="is-flex is-justify-content-center is-align-items-center">
        <PurchasesTable purchases={purchases} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/purchases");

  if(res.status !== 200){
    console.warn("Ha ocurrido un error al fetchear las compras")
  }

  const purchases = await res.json();

  return { props: { purchases } };
}
