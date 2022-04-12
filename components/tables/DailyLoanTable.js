import { useRouter } from "next/router";
import DailyLoanRow from "./rows/DailyLoanRow";
import PawnDailyPaymentRow from "./rows/DailyLoanRow";

export default function DailyLoanTable({totalAmount, dailyLoanPaymentDataOnChange, rows, dailyLoanRowOnChange, addDailyLoanRow, deleteDailyLoanRow }) {
  const router = useRouter();
  const {pathname} = router;
  return (
    <div className="tableWrapper">
      {pathname === "/loans/add" || pathname === "/loans/edit" ? <button onClick={addDailyLoanRow} className="button is-dark mb-4">
        <i className="bi bi-plus" /> Añadir fila
      </button> : "" }
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Pagado</th>
            {pathname !== "/loans" ? <th>Acciones</th> : ""}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <DailyLoanRow rowData={row} key={index} dailyLoanRowOnChange={dailyLoanRowOnChange}  deleteDailyLoanRow={deleteDailyLoanRow}  />
          ))}

          <tr>
            <td
              style={{ backgroundColor: "#181818" }}
              className="has-text-white has-text-weight-bold"
            >
              Total a pagar:
            </td>
            <td>
              <input
                type="text"
                className="rowInput is-fullWidth py-3"
                name="totalAmount"
                placeholder="Monto total"
                value={totalAmount}
                onChange={dailyLoanPaymentDataOnChange}
                disabled={pathname === "/loans" ? true : false}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
