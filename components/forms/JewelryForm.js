import { useState } from "react";
import { useRouter } from "next/router";

import { useTableRows } from "../../hooks/useTableRows";
import { useResponseStatus } from "../../hooks/useResponseStatus";
import { useJewelryPaymentData } from "../../hooks/useJewelryPaymentData";

import EditableTable from "../tables/EditableTable";
import JewelryPaymentDataForm from "./JewelryPaymentDataForm";
import ResponseStatusModal from "../misc/ResponseStatusModal";

import { nanoid } from "nanoid";
import axios from "axios";


export default function JewelryForm({ jewelryPurchase }) {
  const router = useRouter();
  const { pathname } = router;

  const columns = [
    { id: nanoid(), headerName: "Material" },
    { id: nanoid(), headerName: "Gramos" },
    { id: nanoid(), headerName: "Precio" },
    { id: nanoid(), headerName: "Pagado" },
  ];

  const { rows, addRow, deleteRow, rowCellInputValueOnChange, rowsValidation } =
    useTableRows(jewelryPurchase.jewelry, {
      id: nanoid(),
      cells: [
        {
          cellName: "Material",
          inputType: "text",
          inputValue: "",
          inputName: "material",
        },
        {
          cellName: "Gramos",
          inputType: "text",
          inputValue: "",
          inputName: "weight",
        },
        {
          cellName: "Precio",
          inputType: "text",
          inputValue: "",
          inputName: "price",
        },
        {
          cellName: "Pagado",
          inputType: "checkbox",
          inputValue: false,
          inputName: "paid",
        },
      ],
    });

  const {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
    paymentDataValidation,
  } = useJewelryPaymentData(
    jewelryPurchase.paymentMethod,
    jewelryPurchase.paymentData
  );

  const {
    status,
    setStatus,
    statusMessage,
    setStatusMessage,
    handleStatusMessage,
  } = useResponseStatus();

  const handleOnSubmit = async () => {
    const isValidPaymentData = paymentDataValidation();
    const isValidRowData = rowsValidation();
    const isValidDate = transactionDate !== "";

    if (isValidDate && isValidPaymentData && isValidRowData ) {
      const method = pathname === "/jewelry/add" ? "POST" : "PUT";
      const url =
        pathname === "/jewelry/add"
          ? "http://localhost:3000/api/jewelry"
          : `http://localhost:3000/api/jewelry/${jewelryPurchase._id}`;

      const data = pathname === "/jewelry/add" ? {
        date: transactionDate,

        jewelry: rows,
        paymentMethod,
        paymentData,

        createdAt: new Date(),
      } : {
        date: transactionDate,

        jewelry: rows,
        paymentMethod,
        paymentData,

      };

      const res = await axios({
        method,
        url,
        data,
      });

      console.log(res.status);

      handleStatusMessage(res.status);
    }
  };

  const [transactionDate, setTransactionDate] = useState(jewelryPurchase.date);


  return (
    <>
      <div className="jewelryForm is-flex is-flex-direction-column has-background-white p-4">
        {status !== null ? (
          <>
            <ResponseStatusModal
              status={status}
              statusMessage={statusMessage}
              pathToAddNew={"/jewelry/add"}
              
            />
          </>
        ) : (
          <>
            <h1 className="title is-size-4">
              {pathname === "/jewelry/add"
                ? "Añadir compra de prendas"
                : pathname === "/jewelry/edit/[id]"
                ? "Editar compra de prendas"
                : ""}
            </h1>
            <div className="field">
              <label className="label">Fecha</label>
              <input type="date" value={transactionDate} onChange={(e)=>{
                setTransactionDate(e.target.value)

              }} className="input"
              style={{width:"160px"}}
              disabled={pathname === "/jewelry" ? true : false}
              />
            </div>


            <section className="jewelryForm_formsHolder is-flex ">
              <section className="is-flex is-flex-direction-column mr-5 ">
                <h1 className="title is-size-4">Datos de pago</h1>
                <JewelryPaymentDataForm
                  paymentMethod={paymentMethod}
                  paymentMethodOnChange={paymentMethodOnChange}
                  paymentData={paymentData}
                  paymentDataOnChange={paymentDataOnChange}
                />
              </section>
              <hr />

              <section className="is-flex is-flex-direction-column">
                <h1 className="title is-size-4">Datos de prendas</h1>
                <EditableTable
                  columns={columns}
                  rows={rows}
                  addRow={addRow}
                  deleteRow={deleteRow}
                  rowCellInputValueOnChange={rowCellInputValueOnChange}
                />
              </section>
            </section>

            {pathname === "/jewelry/add" ||
            pathname === "/jewelry/edit/[id]" ? (
              <button
                onClick={handleOnSubmit}
                className="button is-success mt-3"
              >
                <i
                  className={`${
                    pathname === "/jewelry/add"
                      ? "bi bi-plus"
                      : "bi bi-arrow-up"
                  }`}
                />
                {pathname === "/jewelry/add"
                  ? "Añadir compra de joyas"
                  : "Actualizar compra de joyas"}
              </button>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
}
