import Layout from "../../../components/layout/Layout";
import PawnForm from "../../../components/forms/PawnForm";

const pawn = {
  agreementDate: "",
  expiringDate: "",
  customer: {
    name: "",
    surname: "",
    dni: "",
    tel: "",
    address: "",
  },

  goods: [],
};

export default function AddPawnPage() {

  return (
    <Layout>
      <PawnForm pawn={pawn} />
    </Layout>
  );
}
