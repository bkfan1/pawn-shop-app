import { useRouter } from "next/router";

export default function DailyLoanRow({
  rowData,
  dailyLoanRowOnChange,
  deleteDailyLoanRow,
}) {
  const router = useRouter();
  const {pathname} = router;
  return (
    <tr>
      <td>
        <input
          type="text"
          name="date"
          className="input"
          value={rowData ? rowData.date : ""}
          onChange={(e) => dailyLoanRowOnChange(rowData.id)}
          disabled={pathname === "/loans" ? true : false}
        />
      </td>
      <td>
        <input
          type="text"
          name="amount"
          value={rowData ? rowData.amount : ""}
          className="rowInput"
          onChange={(e) => dailyLoanRowOnChange(rowData.id)}
          disabled={pathname === "/loans" ? true : false}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="paid"
          defaultChecked={rowData ? rowData.paid : false}
          onChange={(e) => dailyLoanRowOnChange(rowData.id)}
          disabled={pathname === "/loans" ? true : false}
        />
      </td>
      {pathname !== "/loans" ? <td>
        <button
          onClick={(e) => deleteDailyLoanRow(rowData.id)}
          className="button is-danger is-size-7"
          title="Eliminar fila"
        >
          <i className="bi bi-trash" />
        </button>
      </td> : ""}
    </tr>
  );
}
