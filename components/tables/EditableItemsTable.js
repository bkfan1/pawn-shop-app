import { nanoid } from "nanoid";
import { useState } from "react";
import EditableItemRow from "./rows/EditableItemRow";

export default function EditableItemsTable({
  items,
  addItemRow,
  deleteItemRow,
  itemRowValueOnChange,
}) {
  return (
    <>
      <div className="tableHolder is-flex is-flex-direction-column  ">
        <h1 className="title is-size-4">Datos de prenda</h1>
        <button
          onClick={addItemRow}
          style={{ width: "160px" }}
          className="button is-info is-light"
        >
          <i className="bi bi-plus is-size-5" /> Añadir prenda
        </button>
        <div className="tableWrapper mt-4">
          <table className="table is-bordered">
            <thead>
              <tr>
                <th>Material</th>
                <th>Gramos</th>
                <th>Monto</th>
                <th>Pagado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <EditableItemRow
                  item={item}
                  itemRowValueOnChange={itemRowValueOnChange}
                  deleteItemRow={deleteItemRow}
                  key={item.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
