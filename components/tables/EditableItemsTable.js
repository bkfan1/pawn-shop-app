import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useState } from "react";
import { useItems } from "../../hooks/useItems";
import EditableItemRow from "./rows/EditableItemRow";

export default function EditableItemsTable({
  items,
  addItemRow,
  deleteItemRow,
  itemRowValueOnChange,
}) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <div className="tableHolder is-flex is-flex-direction-column  ">
        <h1 className={`title is-size-4 ${pathname === "/purchases" ? "my-0" : ""}`}>Datos de prenda</h1>
        {pathname === "/purchases" ? (
          ""
        ) : (
          <button
            onClick={addItemRow}
            style={{ width: "160px" }}
            className="button is-info is-light"
          >
            <i className="bi bi-plus is-size-5" /> Añadir prenda
          </button>
        )}
        <div className="tableWrapper mt-4">
          <table className="table is-fullwidth is-bordered">
            <thead>
              <tr>
                <th>Material</th>
                <th>Gramos</th>
                <th>Monto</th>
                <th>Pagado</th>
                {pathname === "/purchases" ? "" : <th>Acciones</th>}
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
