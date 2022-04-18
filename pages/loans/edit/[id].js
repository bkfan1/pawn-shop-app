import LoanForm from "../../../components/forms/LoanForm";
import Layout from "../../../components/layout/Layout";

export default function EditLoanSection({ loan }) {
  return (
    <Layout>
      <LoanForm loan={loan} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/loans");
  const loans = await res.json();

  const paths = loans.map((loan) => ({
    params: { id: loan._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/loans/${params.id}`);

  const loan = await res.json();

  return { props: { loan } };
}
