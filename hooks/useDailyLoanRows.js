import { nanoid } from "nanoid";
import { useState } from "react";

export const useDailyLoanRows = (rows = []) => {
  const [dailyLoanRows, setDailyLoanRows] = useState(rows);

  const dailyLoanRowOnChange = (rowId) => {
    const { target } = event;
    const { name, value } = target;

    const rowIndex = dailyLoanRows.findIndex((row) => row.id === rowId); //console.log(rowIndex) - rowIndex should be other than -1;

    const copiedRow = Object.assign({}, dailyLoanRows[rowIndex]);
    copiedRow[name] = target.type === "checkbox" ? target.checked : value;

    //console.log(copiedItem)

    setDailyLoanRows([
      ...dailyLoanRows.map((row) => (row.id === rowId ? copiedRow : row)),
    ]);
  };

  const addDailyLoanRow = () => {
    const newDailyLoanRow = {
      id: nanoid(),
      date: new Date().toLocaleString("es-VE"),
      amount: "",
      paid: false,
    };
    const newDailyLoanRows = [...dailyLoanRows, newDailyLoanRow];

    setDailyLoanRows(newDailyLoanRows);
  };

  const deleteDailyLoanRow = (rowId) => {
    const rowIndex = dailyLoanRows.findIndex((row) => row.id === rowId);
    const newDailyLoanRows = [...dailyLoanRows];
    newDailyLoanRows.splice(rowIndex, 1);

    setDailyLoanRows(newDailyLoanRows);
  };

  const dailiyRowsValidation = ()=>{
    if (dailyLoanRows.length >= 1) {
      const isEveryRowValid = dailyLoanRows.every(
        (row) =>
          row.date !== "" && row.amount !== ""
      );
      if (isEveryRowValid) {
        return true;
      } else {

        return false;
      }
    } else {
      return false;
    }



  }

  return {
    dailyLoanRows,
    setDailyLoanRows,
    dailyLoanRowOnChange,
    addDailyLoanRow,
    deleteDailyLoanRow,
    dailiyRowsValidation
  };
};
