import { nanoid } from "nanoid";
import { useTableRows } from "../../hooks/useTableRows";
import EditableTable from "../tables/EditableTable";
import { useState } from "react";
import { useRouter } from "next/router";
import { useJewelryPaymentData } from "../../hooks/useJewelryPaymentData";
import JewelryPaymentDataForm from "./JewelryPaymentDataForm";
import axios from "axios";

export default function JewelryForm({ jewelryPurchase }) {
  const router = useRouter();
  const { pathname } = router;

  const columns = [
    { id: nanoid(), headerName: "Material" },
    { id: nanoid(), headerName: "Gramos" },
    { id: nanoid(), headerName: "Precio" },
    { id: nanoid(), headerName: "Pagado" },
    { id: nanoid(), headerName: "Acciones" },
  ];

  const { rows, addRow, deleteRow, rowCellInputValueOnChange } = useTableRows(
    jewelryPurchase.jewelry,
    {
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

        {
          cellName: "Acciones",
          inputType: "button",
          inputName: "deleteBtn",
        },
      ],
    }
  );

  const {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
    paymentDataValidation
  } = useJewelryPaymentData(jewelryPurchase.paymentMethod, jewelryPurchase.paymentData);

  const jewelryFormRowsValidation = ()=>{

    let fields = [];
    rows.forEach((row)=>{
      row.cells.forEach((cell)=>{
        cell.inputType !== "button" ? fields.push(cell.inputValue) : ""
      })
    });

    console.log(fields)

    //console.log(fields.every((field)=> field !== ""))

    return fields.every((field)=> field !== "");

  }

  const handleOnSubmit = async()=>{

    const isValidPaymentData = paymentDataValidation();
    const isValidRowData = jewelryFormRowsValidation();

    if(isValidPaymentData && isValidRowData){
      const method = pathname === "/jewelry/add" ? "POST" : "PUT";
      const url = pathname === "/jewelry/add" ? "http://localhost:3000/api/jewelry" : `http://localhost:3000/api/jewelry/${jewelryPurchase._id}`;

      const data = {
        date: new Date().toLocaleDateString('es-VE'),

        jewelry: rows,
        paymentMethod,
        paymentData,

        createdAt: new Date()
      }

      const res = await axios({
        method,
        url,
        data
      })

      res.status === 200 ? console.log("compra registrada con exito") : console.warn("ocurrión un error al actualizar la compra")
    }

  }

  return (
    <>
      <div className="jewelryForm is-flex is-flex-direction-column has-background-white p-4">
        <h1 className="title is-size-4">
          {pathname === "/jewelry/add"
            ? "Añadir compra de prendas"
            : pathname === "/jewelry/edit/[id]"
            ? "Editar compra de prendas"
            : ""}
        </h1>

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
          <hr/>

          <section className="is-flex is-flex-direction-column">
            <h1 className="title is-size-4">Datos de prendas</h1>
            <EditableTable
              columns={columns}
              rows={rows}
              addRow={addRow}
              deleteRow={deleteRow}
              rowCellInputValueOnChange={rowCellInputValueOnChange}
              pathToDisableButton={"/jewelry/"}
            />
          </section>
        </section>

        {pathname === "/jewelry/add" || pathname === "/jewelry/edit/[id]" ? (
          <button onClick={handleOnSubmit} className="button is-success mt-3">
            <i
              className={`${
                pathname === "/jewelry/add" ? "bi bi-plus" : "bi bi-arrow-up"
              }`}
            />
            {pathname === "/jewelry/add"
              ? "Añadir compra de joyas"
              : "Actualizar compra de joyas"}
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
