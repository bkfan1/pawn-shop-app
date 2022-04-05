import EditableItemsTable from "../tables/EditableItemsTable";
import PaymentDataForm from "./PaymentDataForm";
import { useStep } from "../../hooks/useStep";
import { useItems } from "../../hooks/useItems";
import { usePaymentData } from "../../hooks/usePaymentData";
import axios from "axios";
import { useRouter } from "next/router";

export default function AddPurchaseForm() {
  const router = useRouter();
  const { step, nextStep, prevStep } = useStep(1);
  const {
    items,
    itemsValidation,
    addItemRow,
    deleteItemRow,
    itemRowValueOnChange,
  } = useItems([]);
  const {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
    paymentDataValidation,
  } = usePaymentData();

  const createPurchase = async () => {
    // Do not convert it to json, send it as an object
    const data = {items, paymentMethod, paymentData, createdAt: new Date()}
    //console.log(data)
    console.log("registrando compra...")

    const res = await axios.post('http://localhost:3000/api/purchases', data)

    if(res.status === 200){
      console.log("compra registrada con exito");
      router.reload();
    }
    else{console.warn("ha ocurrido un error al intentar registrar una compra")}

  };

  switch (step) {
    case 1:
      return (
        <div className="addPurchaseFormWrapper  p-4 is-flex is-justify-content-space-between">
          <EditableItemsTable
            items={items}
            addItemRow={addItemRow}
            deleteItemRow={deleteItemRow}
            itemRowValueOnChange={itemRowValueOnChange}
          />

          <menu className="is-flex is-justify-content-space-between p-0 mt-4">
            <button onClick={()=>router.push("/")} className="button is-danger">Cancelar</button>
            <button
              onClick={() => {
                if (itemsValidation()) {
                  nextStep();
                }
              }}
              className="button is-info"
            >
              Siguiente
            </button>
          </menu>
        </div>
      );

      break;
    case 2:
      return (
        <div className="addPurchaseFormWrapper p-4 is-flex is-justify-content-space-between">
          <PaymentDataForm
            paymentMethod={paymentMethod}
            paymentMethodOnChange={paymentMethodOnChange}
            paymentData={paymentData}
            paymentDataOnChange={paymentDataOnChange}
          />

          <menu className="is-flex is-justify-content-space-between p-0 mt-5">
            <button onClick={prevStep} className="button is-info is-light">
              Atrás
            </button>
            <button onClick={createPurchase} className="button is-success">
              Enviar
            </button>
          </menu>
        </div>
      );
      break;

    default:
      break;
  }

  return <></>;
}
