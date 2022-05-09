import Layout from "../../../components/layout/Layout";
import LoanForm from "../../../components/forms/LoanForm";

export default function AddLoanSection() {
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
  return (
    <Layout>
      <LoanForm loan={loan} />
    </Layout>
  );
}
