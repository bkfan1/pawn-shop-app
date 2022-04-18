import LoanForm from "../../../components/forms/LoanForm";
import Layout from "../../../components/layout/Layout";

export default function AddLoanSection() {
  let loan = {
    date: "12/12/22",
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
