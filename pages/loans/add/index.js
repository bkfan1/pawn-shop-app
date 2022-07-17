import Layout from "../../../components/layout/Layout";
import LoanForm from "../../../components/forms/LoanForm";

const loan = {
  date: "",
  customer: {
    name: "",
    surname: "",
    dni: "",
    tel: "",
    address: "",
  },
  payments: [],

  capital: "",
  emuloments: "",

  totalAmount: "",
};

export default function AddLoanPage() {
  
  return (
    <Layout>
      <LoanForm loan={loan} />
    </Layout>
  );
}
