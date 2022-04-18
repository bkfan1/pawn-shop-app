import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import EditableTable from "../tables/EditableTable";
import EditableRow from "../tables/rows/EditableRow";
import CustomerDataForm from "./CustomerDataForm";
import { useTableRows } from "../../hooks/useTableRows";
import { useCustomer } from "../../hooks/useCustomer";
import {useState} from "react";
import axios from "axios";

export default function PawnForm({ pawn }) {
  const router = useRouter();
  const { pathname } = router;

  const [agreementDate, setAgreementDate] = useState(pawn.agreementDate)
  const [expiringDate, setExpiringDate] = useState(pawn.expiringDate)


  const columns = [
    { id: nanoid(), headerName: "Cantidad" },
    { id: nanoid(), headerName: "Descripción" },
    { id: nanoid(), headerName: "Valor del Bien" },
    { id: nanoid(), headerName: "Porc. (%)" },
    { id: nanoid(), headerName: "Monto" },
    { id: nanoid(), headerName: "Pacto subtotales" },
    { id: nanoid(), headerName: "Acciones" },
  ];

  const { customer, customerDataOnChange, customerDataValidation } =
    useCustomer(pawn.customer);

  const { rows, addRow, deleteRow, rowCellInputValueOnChange, rowsValidation } = useTableRows(
    pawn.goods,
    {
      id: nanoid(),
      cells: [
        {
          cellName: "Cantidad",
          inputType: "text",
          inputValue: "",
          inputName: "howMany",
        },

        {
          cellName: "Descripción",
          inputType: "text",
          inputValue: "",
          inputName: "description",
        },
        {
          cellName: "Valor del bien",
          inputType: "text",
          inputValue: "",
          inputName: "value",
        },

        {
          cellName: "Porcentaje",
          inputType: "text",
          inputValue: "",
          inputName: "percent",
        },

        {
          cellName: "Cantidad",
          inputType: "text",
          inputValue: "",
          inputName: "amount",
        },
        {
          cellName: "Pacto subtotales",
          inputType: "text",
          inputValue: "",
          inputName: "subtotalPact",
        },
        {
          cellName: "Acciones",
          inputType: "button",
          inputName: "deleteBtn",
        },
      ],
    }
  );
  
  const handleOnSubmit = async ()=>{

    const isValidRowData = rowsValidation();
    const isValidCustomerData = customerDataValidation();
    const isValidAgreementDate = agreementDate !== "";
    const isValidExpiringDate = expiringDate !== "";

    if(isValidRowData && isValidCustomerData && isValidAgreementDate && isValidExpiringDate){
        console.log("hell yeah")
        const method = pathname ==="/pawns/add" ? "POST" : "PUT";
        const url = pathname === "/pawns/add" ? "http://localhost:3000/api/pawns/" : `http://localhost:3000/api/pawns/${pawn._id}`;

        const data = {
            agreementDate,
            expiringDate,

            customer,
            goods: rows,

            createdAt: new Date()
        }

        const res = await axios({
            method,
            url,
            data
        });

        res.status === 200 ? console.log("exito pawn") : console.warn("error pawn")
    }

  }

  return (
    <>
      <div className="pawnForm is-flex is-flex-direction-column has-background-white p-4">
        <section className=" mb-3">
          <h1 className="title is-size-5">Datos de fecha:</h1>
          <section className="is-flex">
            <div className="field mr-5">
              <label className="label">Fecha de acuerdo:</label>
              <input
                type="date"
                name="agreementDate"
                className="input"
                value={agreementDate}
                style={{ width: "150px" }}
                onChange={(e)=>setAgreementDate(e.target.value)}
              />
            </div>

            <div className="field">
              <label className="label">Fecha de vencimiento:</label>
              <input
                type="date"
                name="expiringDate"
                className="input"
                value={expiringDate}
                style={{ width: "150px" }}
                onChange={(e)=>setExpiringDate(e.target.value)}
              />
            </div>
          </section>
        </section>
        <hr className="mt-1" />

        <section className="is-flex is-flex-direction-column">
          <section>
            <h1 className="title is-size-5">Datos de cliente</h1>
            <CustomerDataForm
              customer={customer}
              customerDataOnChange={customerDataOnChange}
            />
          </section>
          <hr className="mb-2" />

          <section className="mt-4">
            <h1 className="title is-size-5">Datos de Bien/es</h1>
            <EditableTable
              columns={columns}
              rows={rows}
              addRow={addRow}
              deleteRow={deleteRow}
              rowCellInputValueOnChange={rowCellInputValueOnChange}
            />
          </section>

          {pathname === "/pawns/add" || pathname === "/pawns/edit/[id]" ? (
            <button onClick={handleOnSubmit} className="button is-success mt-4">
              {pathname === "/pawns/add" ? (
                <i className="bi bi-plus" />
              ) : (
                <i className="bi bi-arrow-up" />
              )}

              {pathname === "/pawns/add"
                ? "Registrar empeño"
                : "Actualizar empeño"}
            </button>
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
}
