import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

import { connection } from "../../database/connection";
import Pawn from "../../database/models/Pawn"

export default function AllPawnsSection({ pawns }) {
  return (
    <Layout>
      <ViewOnlyTable data={pawns} />
    </Layout>
  );
}

export async function getServerSideProps() {

  const db = await connection();
  const res = await Pawn.find({});

  const pawns = res.map((doc)=>{
    const pawn = doc.toObject();
    pawn._id = `${pawn._id}`;
    pawn.createdAt = `${pawn.createdAt}`;
    return pawn;

  })

  return { props: { pawns } };
}
