import EditableRow from "./rows/EditableRow";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EditableTable({columns, rows, addRow, deleteRow,rowCellInputValueOnChange, pathToDisableButton }) {
  const router = useRouter();
  const {pathname} = router;

  return (
    <>
      <div className="tableHolder is-flex is-flex-direction-column">
        {pathToDisableButton === pathname ? "" : <button
          className="button is-dark mb-3"
          style={{ width: "140px" }}
          onClick={addRow}
        >
          <i className="bi bi-plus " />
          Añadir fila
        </button> }
        <table className="table is-striped is-hoverable">
          <thead>
            <tr className="has-background-black-ter">
              {columns.map((column) => (
                <th className="has-text-white" key={column.id}>
                  {column.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <EditableRow
                cells={row.cells}
                rowId={row.id}
                key={row.id}
                deleteRow={deleteRow}
                rowCellInputValueOnChange={rowCellInputValueOnChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
