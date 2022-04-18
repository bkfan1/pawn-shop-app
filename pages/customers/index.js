import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";
export default function AllCustomersSection({customers}){
    return(
        <Layout>
            <ViewOnlyTable data={customers} />

        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/customers/`);
  
    const customers = await res.json();
  
    return { props: { customers } };
  }