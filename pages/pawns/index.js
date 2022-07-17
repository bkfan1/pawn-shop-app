import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

import Pawn from "../../database/models/Pawn";
import {connection} from "../../database/connection";

export default function AllPawnsSection({ pawns }) {
  return (
    <Layout>
      <ViewOnlyTable data={pawns} />
    </Layout>
  );
}

export async function getServerSideProps() {

  const conn = await connection();

  const res = await Pawn.find({});

  const pawns = res.map((doc)=>{
    const pawn = doc.toObject();
    pawn._id = `${pawn._id}`;
    pawn.createdAt = `${pawn.createdAt}`;
    return pawn;

  })

  return { props: { pawns } };
}
