import Layout from "../../../components/layout/Layout";
import LoanForm from "../../../components/forms/LoanForm";

import Loan from "../../../database/models/Loan";
import { connection } from "../../../database/connection";

export default function EditLoanPage({ loan }) {
  return (
    <Layout>
      <LoanForm loan={loan} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const conn = await connection();
  const loan = await Loan.findById(context.params.id).lean();
  loan._id = `${loan._id}`;
  loan.createdAt = `${loan.createdAt}`;

  return { props: { loan } };
}
