import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

import Loan from "../../database/models/Loan";


export default function AllLoansPage({ loans }) {
  //console.log(loans);

  return (
    <Layout>
      <ViewOnlyTable data={loans} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await Loan.find({});

  const loans = res.map((doc)=>{
    const loan = doc.toObject();
    loan._id = `${loan._id}`;
    loan.createdAt = `${loan.createdAt}`;

    return loan;
  });
  

  return { props: { loans } };
}
