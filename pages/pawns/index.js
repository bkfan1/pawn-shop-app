import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

export default function AllPawnsSection({ pawns }) {
  return (
    <Layout>
      <ViewOnlyTable data={pawns} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/pawns/`);

  const pawns = await res.json();

  return { props: { pawns } };
}
