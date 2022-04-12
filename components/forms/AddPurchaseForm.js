import EditableItemsTable from "../tables/EditableItemsTable";
import PaymentDataForm from "./PaymentDataForm";
import { useStep } from "../../hooks/useStep";
import { useItems } from "../../hooks/useItems";
import { usePaymentData } from "../../hooks/usePaymentData";
import axios from "axios";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddPurchaseForm() {
  const router = useRouter();
  const { step, setStep, nextStep, prevStep } = useStep(1);
  const {
    items,
    itemsValidation,
    addItemRow,
    deleteItemRow,
    itemRowValueOnChange,
    itemsError,
  } = useItems([]);
  const {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
    paymentDataValidation,
    paymentError,
  } = usePaymentData();

  const currentDate = DateTime.local();

  const createPurchase = async () => {
    // Do not convert it to json. Send it as an object
    const data = {
      date: new Date().toLocaleDateString('es-VE'),
      items,
      paymentMethod,
      paymentData,
      createdAt: `${currentDate.day}/${currentDate.month}/${currentDate.year}`,
    };

    if(itemsValidation() && paymentDataValidation()){
      const res = await axios.post("http://localhost:3000/api/purchases", data);

      setResponseStatus(res.status);

      nextStep();
    }

  };
  const [responseStatus, setResponseStatus] = useState(0);

  switch (step) {
    case 1:
      return (
        <div className="addPurchaseFormWrapper  p-4 is-flex is-justify-content-space-between">
          <section style={{ height: "500px" }}>
            <EditableItemsTable
              items={items}
              addItemRow={addItemRow}
              deleteItemRow={deleteItemRow}
              itemRowValueOnChange={itemRowValueOnChange}
            />
          </section>

          {<p className="has-text-danger has-text-weight-bold">{itemsError}</p>}

          <menu className="is-flex is-justify-content-space-between p-0 mt-4">
            <button
              onClick={() => router.push("/")}
              className="button is-danger"
            >
              Cancelar
            </button>
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

          {<p className="has-text-danger has-text-weight-bold">{paymentError}</p>}

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

    case 3:
      return(
        <div className="addPurchaseFormWrapper p-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          {responseStatus === 200 ? (
            <>
            <figure style={{width:"75px", height:"75px", borderRadius:"60%"}} className="is-flex is-justify-content-center is-align-items-center has-background-success p-3">
          <i className="bi bi-check is-size-1 has-text-white"/>
          </figure>
          
          <h1 className="title is-size-4 my-4">Compra registrada exitosamente.</h1>
            </>
          ) : responseStatus >= 400 ? (
            <>
            <figure style={{width:"75px", height:"75px", borderRadius:"60%"}} className="is-flex is-justify-content-center is-align-items-center has-background-danger p-3">
          <i className="bi bi-x is-size-1 has-text-white"/>
          </figure>
          
          <h1 className="title is-size-4 my-4">Ha ocurrido un error al intentar registrar la compra.</h1>
          <button onClick={()=>router.reload()} className="button">Volver a intentarlo</button>
            </>
          ): setStep(1)}

        </div>
      )
        
      break;

    default:
      setStep(1);
      break;
  }

  return <></>;
}
