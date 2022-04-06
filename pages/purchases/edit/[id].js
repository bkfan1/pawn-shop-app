import EditPurchaseForm from "../../../components/forms/EditPurchaseForm";
import Layout from "../../../components/layout/Layout";

export default function UniquePurchaseEditSection({ purchase }) {
  //console.log(purchase);

  return (
    <>
      <Layout>
        <main className="is-flex is-justify-content-center is-align-items-center">
          <EditPurchaseForm purchase={purchase} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/purchases");
  const purchases = await res.json();

  const paths = purchases.map((purchase) => ({
    params: { id: purchase._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/purchases/${params.id}`);

  const purchase = await res.json();

  return { props: { purchase } };
}
