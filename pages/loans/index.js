import Layout from "../../components/layout/Layout";
import LoanForm from "../../components/forms/LoanForm";
import EditableTable from "../../components/tables/EditableTable";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

import { connection } from "../../database/connection";
import Loan from "../../database/models/Loan";


export default function AllLoansSection({ loans }) {
  //console.log(loans);

  return (
    <Layout>
      <ViewOnlyTable data={loans} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const db = await connection();
  const res = await Loan.find({});

  const loans = res.map((doc)=>{
    const loan = doc.toObject();
    loan._id = `${loan._id}`;
    loan.createdAt = `${loan.createdAt}`;

    return loan;
  });
  

  return { props: { loans } };
}
