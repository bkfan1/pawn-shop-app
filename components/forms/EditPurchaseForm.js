import { useItems } from "../../hooks/useItems";
import { usePaymentData } from "../../hooks/usePaymentData";
import EditableItemsTable from "../tables/EditableItemsTable";
import PaymentDataForm from "../forms/PaymentDataForm";
import axios from "axios";

export default function EditPurchaseForm({ purchase }) {
  //console.log(purchase);

  const { items, itemRowValueOnChange, addItemRow, deleteItemRow } = useItems(
    purchase.items
  );

  const {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
  } = usePaymentData(purchase.paymentMethod, purchase.paymentData);

  const updatePurchase = async () => {
    const updatedPurchaseData = { items, paymentMethod, paymentData };
    const res = await axios.put(
      `http://localhost:3000/api/purchases/${purchase._id}`,
      updatedPurchaseData
    );

    res.status === 200
      ? console.log("compra actualizada con exito")
      : console.warn("ocurrió un error al actualizar la compra");
  };

  return (
    <div className="editPurchaseForm is-flex is-flex-direction-column p-4">
      <h1 className="title is-size-4 my-0 mb-2">Editando compra</h1>
      <ul>
        <li>
          <i className="bi bi-info-square" />
          
          <span className="has-text-grey"> Identificador de compra: {purchase._id}</span>
        </li>
        <li className="has-text-grey my-1">
        <i className="bi bi-calendar mr-1" />
          <span>
            Fecha de creación:{" "}
            {new Date(purchase.createdAt).toLocaleString("es-VE")}
          </span>
        </li>
      </ul>

      <div className="editPurchaseForm__formsHolder is-flex is-justify-content-space-between mt-4 mb-6">
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
      <button onClick={updatePurchase} className="button is-info ">
        <i className="bi bi-check is-size-4" /> Guardar cambios
      </button>
    </div>
  );
}
