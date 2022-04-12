import { useDailyLoanRows } from "../../hooks/useDailyLoanRows";
import { useDailyLoanPaymentData } from "../../hooks/useDailyLoanPaymentData";
import { useDailyLoanDate } from "../../hooks/useDailyLoanDate";
import { useCustomer } from "../../hooks/useCustomer";
import DailyLoanPaymentDataForm from "./DailyLoanPaymentDataForm";
import DailyLoanTable from "../tables/DailyLoanTable";
import { useRouter } from "next/router";
import CustomerForm from "./CustomerForm";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DailyLoanForm({ dailyLoan }) {
  const router = useRouter();
  const { pathname } = router;
  //console.log(router.pathname);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const { loanDate, setLoanDate } = useDailyLoanDate(dailyLoan.date);

  const { customer, customerDataOnChange, customerDataValidation } =
    useCustomer(dailyLoan.customer);

  const {
    dailyLoanRows,
    dailyLoanRowOnChange,
    addDailyLoanRow,
    deleteDailyLoanRow,
    dailiyRowsValidation,
  } = useDailyLoanRows(dailyLoan.payments);

  const { capital, emuloments, totalAmount, dailyLoanPaymentDataOnChange } =
    useDailyLoanPaymentData(
      dailyLoan.capital,
      dailyLoan.emuloments,
      dailyLoan.totalAmount
    );

  const handleSubmitLoan =  async() => {
    event.preventDefault();
    const actionType = pathname === "/loans/add" ? "POST" : "PUT";
    const url = pathname === "/loans/add" ? "http://localhost:3000/api/loans/" : `http://localhost:3000/api/loans/${dailyLoan._id}`;

    const isValidCustomerData = customerDataValidation();
    const isValidPaymentData = [capital, emuloments].every(
      (field) => field !== ""
    );
    const tableHasValidData = dailiyRowsValidation();
    const isValidDate = loanDate !== "" && loanDate !== "31/12/1969";

    if (isValidDate && isValidCustomerData && isValidPaymentData && tableHasValidData) {

      const loanData = {
        date: loanDate,
        customer,
        capital,
        emuloments,
        payments: dailyLoanRows,
        totalAmount,
        createdAt: new Date()
      }
      console.log(loanData)

      if(actionType === "POST"){
        const res = await axios.post(url, loanData);
        res.status === 200 ? console.log("prestamo registrado con exito") : console.warn("ha ocurrido un error al registrar el prestamo")
      }

      else if(actionType === "PUT"){
        const res = await axios.put(url,loanData);
        res.status === 200 ? console.log("prestamo actualizado con exito") : console.warn("ha ocurrido un error al actualizar el prestamo")
      }
      
    }
    else{console.log("no")}
  };

  useEffect(()=>{
    setLoanDate(selectedDate.toLocaleDateString('es-VE'))

  },[])


  return (
    <>
      <div className="dailyLoanForm is-flex is-flex-direction-column has-background-white p-4">
        <header className="mb-4">

          {
            pathname === "/loans/add" ?
            <h1 className="title is-size-4">Añadir préstamo</h1>
            : pathname === "/loans/edit/[id]" ?
            (
              <>
              <h1 className="title is-size-4 mb-2">Editando préstamo</h1>
              <p className="has-text-grey"><i className="bi bi-calendar"/> Fecha de creación: {`${dailyLoan.createdAt}`}</p>
              </>
            )
             : <h1 className="title is-size-4">Información de préstamo</h1>
          }


        </header>
        <section>
          <div style={{width:"120px"}}>
          <ReactDatePicker
            selected={selectedDate}
            dateFormat="dd/MM/yyyy"
            onChange={(d) => {
              setSelectedDate(d);
              setLoanDate(`${new Date(d).toLocaleDateString("es-VE")}`);
            }}
            className="input"
            placeholderText="Has click aqui para seleccionar una fecha"
            disabled={pathname === "/loans/add" || pathname === `/loans/edit/[id]` ? false : true}
          />

          </div>
        </section>

        <section className="is-flex dailyLoanForm_formsHolder mt-3">
          <section className="is-flex is-flex-direction-column mr-6">
            <CustomerForm
              customer={customer}
              customerDataOnChange={customerDataOnChange}
            />

            <section className="mt-2">
              <DailyLoanPaymentDataForm
                capital={capital}
                emuloments={emuloments}
                totalAmount={totalAmount}
                dailyLoanPaymentDataOnChange={dailyLoanPaymentDataOnChange}
              />
            </section>
          </section>

          <section className="dailyLoanForm__tableSection">
            <DailyLoanTable
              totalAmount={totalAmount}
              dailyLoanPaymentDataOnChange={dailyLoanPaymentDataOnChange}
              rows={dailyLoanRows}
              dailyLoanRowOnChange={dailyLoanRowOnChange}
              addDailyLoanRow={addDailyLoanRow}
              deleteDailyLoanRow={deleteDailyLoanRow}
            />
          </section>
        </section>

        {pathname === "/loans/add" || pathname === "/loans/edit/[id]" ? (
          <button onClick={handleSubmitLoan} className="button is-success mt-4">
            {pathname === "/loans/add" ? (
              <i className="bi bi-check" />
            ) : (
              <i className="bi bi-arrow-up" />
            )}
            {pathname === "/loans/add"
              ? "Añadir préstamo"
              : "Actualizar préstamo"}
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
