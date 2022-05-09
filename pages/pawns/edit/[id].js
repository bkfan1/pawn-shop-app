import Layout from "../../../components/layout/Layout";
import PawnForm from "../../../components/forms/PawnForm";

import {connection} from "../../../database/connection";
import Pawn from "../../../database/models/Pawn";

export default function EditPawnSection({ pawn }) {
  return (
    <Layout>
      <PawnForm pawn={pawn} />
    </Layout>
  );
}

export async function getServerSideProps(context){
  const db = await connection();
  const pawn = await Pawn.findById(context.params.id).lean();

  pawn._id = `${pawn._id}`;
  pawn.createdAt = `${pawn.createdAt}`;

  return { props: { pawn } }

}