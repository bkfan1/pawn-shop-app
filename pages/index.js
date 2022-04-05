import AddPurchaseForm from "../components/forms/AddPurchaseForm";
import PaymentDataForm from "../components/forms/PaymentDataForm";
import Layout from "../components/Layout/Layout";
import Modal from "../components/modal";
import EditableItemsTable from "../components/tables/EditableItemsTable";
import PurchasesTable from "../components/tables/PurchasesTable";
import { useState } from "react";



export default function Home(){
  const [showModal, setShowModal] = useState(false);
  return(
    <>
    <Layout>
      <main>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal onClose={() => setShowModal(false)}
          show={showModal} />

      </main>
    </Layout>
    </>
  )
}