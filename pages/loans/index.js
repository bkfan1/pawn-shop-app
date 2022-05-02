import { nanoid } from "nanoid";
import LoanForm from "../../components/forms/LoanForm";
import Layout from "../../components/layout/Layout";
import EditableTable from "../../components/tables/EditableTable";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

export default function AllLoansSection({ loans }) {
  console.log(loans);

  return (
    <Layout>
      <ViewOnlyTable data={loans} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/loans/`);

  const loans = await res.json();

  return { props: { loans } };
}
