import DailyLoanForm from "../../../components/forms/DailyLoanForm";
import Layout from "../../../components/layout/Layout";
import { nanoid } from "nanoid";

const testDailyLoan = {
  _id: "624c7f68c67b0ebc474e0701",
  date: "03/03/22",
  customer: {
    name: "Jack",
    surname: "Ferranti",
    dni: "V-30389058",
    tel: "0424-5329011",
    address: "Whatever",
  },

  capital: 100,
  emuloments: 30,

  payments: [{ id: nanoid(), date: "Hoy", amount: 0, paid: false }],

  totalAmount: 100,
};

export default function EditUniqueDailyLoanSection({ dailyLoan }) {
  return (
    <Layout>
      <main>
        <DailyLoanForm dailyLoan={dailyLoan} />
      </main>
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

  const dailyLoan = await res.json();

  return { props: { dailyLoan } };
}
