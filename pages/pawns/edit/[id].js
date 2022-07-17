import Layout from "../../../components/layout/Layout";
import PawnForm from "../../../components/forms/PawnForm";
import Pawn from "../../../database/models/Pawn";

export default function EditPawnPage({ pawn }) {
  return (
    <Layout>
      <PawnForm pawn={pawn} />
    </Layout>
  );
}

export async function getServerSideProps(context){
  const pawn = await Pawn.findById(context.params.id).lean();

  pawn._id = `${pawn._id}`;
  pawn.createdAt = `${pawn.createdAt}`;

  return { props: { pawn } }

}