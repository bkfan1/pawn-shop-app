import Layout from "../../../components/layout/Layout";
import DailyLoanForm from "../../../components/forms/DailyLoanForm";
import { nanoid } from "nanoid";

const testDailyLoan = {
  _id: "624c7f68c67b0ebc474e0701",
  date: "",
  customer: {
    name: "",
    surname: "",
    dni: "",
    tel: "",
    address: "",
  },

  capital:0,
  emuloments:0,

  payments: [],

  totalAmount: 0,
}


export default function AddDailyLoanSection() {
  return (
    <Layout>
      <main>
          <DailyLoanForm dailyLoan={testDailyLoan} />

      </main>
    </Layout>
  );
}
