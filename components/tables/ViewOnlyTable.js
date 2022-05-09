import { useState } from "react";
import { useRouter } from "next/router";

import { useLocalPagination } from "../../hooks/useLocalPagination";

import ViewOnlyRow from "./rows/ViewOnlyRow";

export default function ViewOnlyTable({ data }) {
  const router = useRouter();
  const { pathname } = router;
  const [filteredData, setFilteredData] = useState([]);
  const [dateFilterValue, setDateFilterValue] = useState("");

  const handleFilterByDate = () => {
    const { target } = event;
    const { value } = target;

    setDateFilterValue(value);

    const newFilteredData = data.filter(
      (d) => d.date === value || d.agreementDate === value
    );
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <div
        className={`viewOnlyTableHolder has-background-white is-flex is-flex-direction-column p-4`}
      >
        <h1 className="title is-size-4 mb-3">
          {pathname === "/loans"
            ? "Préstamos"
            : pathname === "/pawns"
            ? "Empeños"
            : pathname === "/jewelry"
            ? "Compras de prendas"
            : ""}
        </h1>
        <section className="is-flex is-align-items-center  is-justify-content-space-between my-2">
          <div className="field">
            <label className="label">Filtrar por fecha:</label>
            <input
              type="date"
              onChange={handleFilterByDate}
              className="input"
              style={{ width: "160px" }}
            />
          </div>
          <button
            onClick={() => router.push(`${pathname}/add`)}
            className="button is-success mt-4 ml-3 "
          >
            <i className="bi bi-plus" /> <span className="mr-1">Añadir</span>
            {pathname === "/loans"
              ? "nuevo préstamo"
              : pathname === "/pawns"
              ? "nuevo empeño"
              : pathname === "/jewelry"
              ? " nueva compra"
              : ""}
          </button>
        </section>

        <div className="tableHolder">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th className="idTableHeader">ID</th>
                <th>Fecha</th>
                <th>Detalles</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dateFilterValue === "" ? (
                data.map((row) => <ViewOnlyRow rowData={row} key={row.id} />)
              ) : filteredData.length === 0 ? (
                <h1 className="mt-2 has-text-weight-bold">
                  No se han encontrado resultados.
                </h1>
              ) : (
                filteredData.map((row) => (
                  <ViewOnlyRow rowData={row} key={row._id} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
