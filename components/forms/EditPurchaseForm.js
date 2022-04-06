import { useItems } from "../../hooks/useItems";
import { usePaymentData } from "../../hooks/usePaymentData";
import EditableItemsTable from "../tables/EditableItemsTable";
import PaymentDataForm from "../forms/PaymentDataForm";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EditPurchaseForm({ purchase }) {
  //console.log(purchase);
  const router = useRouter();

  const {
    items,
    itemRowValueOnChange,
    addItemRow,
    deleteItemRow,
    itemsValidation,
    itemsError,
  } = useItems(purchase.items);

  const {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
    paymentDataValidation,
    paymentError,
  } = usePaymentData(purchase.paymentMethod, purchase.paymentData);

  const [responseStatus, setResponseStatus] = useState("");

  const updatePurchase = async () => {
    if (itemsValidation() && paymentDataValidation()) {

      const updatedPurchaseData = { items, paymentMethod, paymentData };

      const res = await axios.put(
        `http://localhost:3000/api/purchases/${purchase._id}`,
        updatedPurchaseData
      );

      setResponseStatus(res.status);
    }
    
  };

  return (
    <div className="editPurchaseForm is-flex is-flex-direction-column is-justify-content-space-between p-4">
      <header>
        <h1 className="title is-size-4 my-0 mb-2">Editar compra</h1>
        <ul>
          <li>
            <i className="bi bi-info-square" />

            <span className="has-text-grey">
              {" "}
              Identificador de compra: {purchase._id}
            </span>
          </li>
          <li className="has-text-grey my-1">
            <i className="bi bi-calendar mr-1" />
            <span>
              Fecha de creación:{" "}
              {new Date(purchase.createdAt).toLocaleString("es-VE")}
            </span>
          </li>
        </ul>
      </header>

      <div className="editPurchaseForm__formsHolder is-flex mt-4 mb-4">
        <PaymentDataForm
          paymentMethod={paymentMethod}
          paymentMethodOnChange={paymentMethodOnChange}
          paymentData={paymentData}
          paymentDataOnChange={paymentDataOnChange}
        />

        <EditableItemsTable
          items={items}
          itemRowValueOnChange={itemRowValueOnChange}
          addItemRow={addItemRow}
          deleteItemRow={deleteItemRow}
        />
      </div>

      <div >
        {paymentError !== "" ? (
          <p className="has-text-danger has-text-weight-bold mb-3">{paymentError}</p>
        ) : (
          ""
        )}

        {itemsError !== "" ? (
          <p className="has-text-danger has-text-weight-bold mb-3">{itemsError}</p>
        ) : (
          ""
        )}
      </div>

      {responseStatus === 200 ? <p className="has-text-success has-text-weight-bold mb-3">Compra actualizada exitosamente.</p> : responseStatus >= 400 ? <p className="has-text-danger has-text-weight-bold">Ha ocurrido un error al intentar actualizar la compra</p> :""}

      <button onClick={updatePurchase} className="button is-info ">
        <i className="bi bi-check is-size-4" /> Guardar cambios
      </button>
    </div>
  );
}
