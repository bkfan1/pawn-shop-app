import PawnForm from "../../../components/forms/PawnForm"
import Layout from "../../../components/layout/Layout"

const somePawn = {
    agreementDate: "",
    expiringDate: "",
    customer: {
        name: "",
        surname:"",
        dni:"",
        tel:"",
        address:""
    },

    goods: []

}
export default function AddPawnSection(){
    return(
        <Layout>
            <PawnForm pawn={somePawn} />
            
        </Layout>
    )
}