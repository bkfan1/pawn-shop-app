import Layout from "../../../components/layout/Layout";
import PawnForm from "../../../components/forms/PawnForm";

export default function AddPawnSection() {
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

  return (
    <Layout>
      <PawnForm pawn={pawn} />
    </Layout>
  );
}
