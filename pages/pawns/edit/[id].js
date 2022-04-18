import PawnForm from "../../../components/forms/PawnForm";
import Layout from "../../../components/layout/Layout";

export default function EditPawnSection({ pawn }) {
  return (
    <Layout>
      <PawnForm pawn={pawn} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/pawns");
  const pawns = await res.json();

  const paths = pawns.map((pawn) => ({
    params: { id: pawn._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/pawns/${params.id}`);

  const pawn = await res.json();

  return { props: { pawn } };
}
