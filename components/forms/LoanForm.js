import { nanoid } from "nanoid";
import EditableTable from "../tables/EditableTable";
import CustomerDataForm from "./CustomerDataForm";
import { useTableRows } from "../../hooks/useTableRows";
import { useResponseStatus } from "../../hooks/useResponseStatus";
import { useCustomer } from "../../hooks/useCustomer";
import { useDate } from "../../hooks/useDate";
import ResponseStatusModal from "../misc/ResponseStatusModal";

import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function LoanForm({ loan }) {
  const router = useRouter();
  const { pathname } = router;
  const paths = ["/loans", "/jewelry", "/pawns"];

  const { date, dateOnChange } = useDate(loan.date);
  const [capital, setCapital] = useState(loan.capital);
  const [emuloments, setEmuloments] = useState(loan.emuloments);
  const [totalAmount, setTotalAmount] = useState(loan.totalAmount);

  const columns = [
    { id: nanoid(), headerName: "Fecha" },
    { id: nanoid(), headerName: "Monto" },
    { id: nanoid(), headerName: "Pagado" },
  ];

  const { rows, addRow, deleteRow, rowCellInputValueOnChange, rowsValidation } =
    useTableRows(loan.payments, {
      id: nanoid(),
      cells: [
        {
          cellName: "Fecha",
          inputType: "date",
          inputValue: "",
          inputName: "paymentDate",
        },

        {
          cellName: "Monto",
          inputType: "text",
          inputValue: "",
          inputName: "paymentAmount",
        },

        {
          cellName: "Pagado",
          inputType: "checkbox",
          inputValue: false,
          inputName: "paymentPaid",
        },
      ],
    });

  const { customer, customerDataOnChange, customerDataValidation } =
    useCustomer(loan.customer);

  const { status, statusMessage, handleStatusMessage } = useResponseStatus();

  const handleOnSubmit = async () => {
    const isValidCustomerData = customerDataValidation();
    const isValidRowData = rowsValidation();
    const isValidTotalAmount = totalAmount !== "";
    const isValidDate = date !== "";

    if (
      isValidCustomerData &&
      isValidRowData &&
      isValidTotalAmount &&
      isValidDate
    ) {
      const method = pathname === "/loans/add" ? "POST" : "PUT";
      const url =
        pathname === "/loans/add"
          ? "http://localhost:3000/api/loans"
          : `http://localhost:3000/api/loans/${loan._id}`;

      const data =
        pathname === "/loans/add"
          ? {
              date,

              customer,

              payments: rows,

              capital,
              emuloments,
              totalAmount,

              createdAt: new Date(),
            }
          : {
              date,

              customer,

              payments: rows,

              capital,
              emuloments,
              totalAmount,
            };

      //console.log(data)

      const res = await axios({
        method,
        url,
        data,
      });

      handleStatusMessage(res.status);

      res.status === 200
        ? console.log("compra registrada con exito")
        : console.warn("ocurrión un error al actualizar la compra");
    }
  };

  return (
    <>
      <div className="loanForm is-flex is-flex-direction-column has-background-white p-4">
        {status !== null ? (
          <>
            <ResponseStatusModal
              status={status}
              statusMessage={statusMessage}
              pathToAddNew={"/loans/add"}
            />
          </>
        ) : (
          <>
            <h1 className="title is-size-4">
              {pathname === "/loans/add"
                ? "Añadir préstamo"
                : pathname === "/loans/edit/[id]"
                ? "Editando préstamo"
                : ""}
            </h1>
            <section className="">
              <div className="field">
                <label className="label">Fecha</label>
                <input
                  type="date"
                  value={date}
                  onChange={dateOnChange}
                  className="input"
                  style={{ width: "150px" }}
                  disabled={paths.includes(pathname) ? true : false}
                />
              </div>
            </section>
            <hr className="mt-3" />
            <section className="is-flex is-flex-direction-column loanForm_formsHolder">
              <section className="mr-5">
                <h1 className="title is-size-5">Datos de cliente</h1>
                <CustomerDataForm
                  customer={customer}
                  customerDataOnChange={customerDataOnChange}
                  disabled={paths.includes(pathname) ? true : false}
                />
              </section>
              <hr />
              <section>
                <h1 className="title is-size-5">Datos de préstamo</h1>
                <section className="my-3 is-flex">
                  <div className="field mr-3">
                    <label className="label">Capital</label>
                    <input
                      type="text"
                      name="capital"
                      value={capital}
                      onChange={(e) => setCapital(e.target.value)}
                      className="input"
                      style={{ width: "200px" }}
                      disabled={paths.includes(pathname) ? true : false}
                    />
                  </div>

                  <div className="field mr-3">
                    <label className="label">Emulomentos</label>
                    <input
                      type="text"
                      name="emuloments"
                      value={emuloments}
                      onChange={(e) => setEmuloments(e.target.value)}
                      className="input"
                      style={{ width: "200px" }}
                      disabled={paths.includes(pathname) ? true : false}
                    />
                  </div>
                </section>
                <EditableTable
                  columns={columns}
                  rows={rows}
                  addRow={addRow}
                  deleteRow={deleteRow}
                  rowCellInputValueOnChange={rowCellInputValueOnChange}
                  disabled={paths.includes(pathname) ? true : false}
                />
                <div className="field">
                  <label className="label">Monto total</label>
                  <input
                    type="text"
                    name="totalAmount"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    className="input"
                    disabled={paths.includes(pathname) ? true : false}
                  />
                </div>
              </section>
              {pathname === "/loans/add" || pathname === "/loans/edit/[id]" ? (
                <button
                  onClick={handleOnSubmit}
                  className="button is-success mt-3"
                >
                  {pathname === "/loans/add" ? (
                    <>
                      <i className="bi bi-plus" />
                      <span>Registrar préstamo</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-arrow-up" />
                      <span>Actualizar préstamo</span>
                    </>
                  )}
                </button>
              ) : (
                ""
              )}
            </section>
          </>
        )}
      </div>
    </>
  );
}
