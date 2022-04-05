import Layout from "../../../components/Layout/Layout";
import AddPurchaseForm from "../../../components/forms/AddPurchaseForm";

export default function AddPurchaseSection() {
  return (
    <Layout>
      <main className="is-flex is-justify-content-center is-align-items-center">
        <AddPurchaseForm />
      </main>
    </Layout>
  );
}
