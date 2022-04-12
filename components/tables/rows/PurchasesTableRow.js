import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../modal";
import EditableItemsTable from "../EditableItemsTable";
import PaymentDataForm from "../../forms/PaymentDataForm";

export default function PurchasesTableRow({ purchase }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);


  const deletePurchase = async (purchaseId) => {
    const op = confirm("Deseas realmente eliminar esta compra?");

    if (op) {
      const res = await axios.delete(
        `http://localhost:3000/api/purchases/${purchaseId}`
      );

      res.status === 200
        ? console.log("compra eliminada con exito")
        : console.warn("ocurrió un error al intentar eliminar la compra");
    }
  };

  return (
    <tr>
      <td>
        <span>{purchase._id}</span>
      </td>
      <td>
        <span>{purchase.createdAt}</span>
      </td>
      <td>
        <a title="Ver detalles de compra" className="button is-info is-light rounded is-size-7" onClick={() => setShowModal(true)}>
          <i className="bi bi-eye button-icon is-size-6" />
          <span className="button-text">Ver</span>
        </a>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <EditableItemsTable items={purchase.items} />

          <PaymentDataForm
            paymentMethod={purchase.paymentMethod}
            paymentData={purchase.paymentData}
          />
        </Modal>
      </td>
      <td>
        <button
          onClick={() => router.push(`purchases/edit/${purchase._id}`)}
          className="button rowButton is-link is-size-7 mr-3"
          title="Editar compra"
        >
          <i className="bi bi-pencil" />
        </button>
        <button
          onClick={() => deletePurchase(purchase._id)}
          className="button  is-danger is-size-7"
          title="Eliminar compra"
        >
          <i className="bi bi-trash" />
        </button>
      </td>
    </tr>
  );
}
