import { useState } from "react";

export const useTableRows = (initialRows = [], initialRowSchema = {}) => {
  const [rows, setRows] = useState(initialRows);

  const addRow = () => {
    const newRows = [...rows, initialRowSchema];
    setRows(newRows);
  };

  const deleteRow = (rowId) => {
    const findIndex = rows.findIndex((row) => row.id === rowId);
    const newRows = [...rows];
    newRows.splice(findIndex, 1);

    setRows(newRows);
  };

  const rowCellInputValueOnChange = (rowId) => {
    const { target } = event;
    const { name, value } = target;

    const rowIndex = rows.findIndex((row) => row.id === rowId);
    //console.log(rowIndex);

    let selectedRow = Object.assign({}, rows[rowIndex]);
    //console.log(selectedRow)
    let selectedRowCells = selectedRow["cells"];

    const cellIndex = selectedRowCells.findIndex(
      (cell) => cell.inputName === name
    );
    //console.log(cellIndex);

    let currentCell = selectedRowCells[cellIndex];

    currentCell["inputValue"] =
      target.type === "checkbox" ? target.checked : value;
    //console.log(selectedRow);

    const newRows = [...rows];

    newRows.splice(rowIndex, 1, selectedRow);

    setRows(newRows);
  };

  const rowsValidation = () => {
    let fields = [];
    rows.forEach((row) => {
      row.cells.forEach((cell) => {
        cell.inputType !== "button" ? fields.push(cell.inputValue) : "";
      });
    });

    //console.log(fields);

    //console.log(fields.every((field)=> field !== ""))

    return fields.every((field) => field !== "");
  };

  return {
    rows,
    setRows,
    addRow,
    deleteRow,
    rowCellInputValueOnChange,
    rowsValidation,
  };
};
