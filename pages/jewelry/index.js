import Layout from "../../components/layout/Layout";
import ViewOnlyTable from "../../components/tables/ViewOnlyTable";

export default function AllJewelryPurchasesSection({jewelryPurchases}){
    return(
        <Layout>
            <ViewOnlyTable data={jewelryPurchases} />
            
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/jewelry/`);
  
    const jewelryPurchases = await res.json();
  
    return { props: { jewelryPurchases } };
  }