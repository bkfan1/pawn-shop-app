import { useRouter } from "next/router";
import ViewOnlyRow from "./rows/ViewOnlyRow";
import { useLocalPagination } from "../../hooks/useLocalPagination";

export default function ViewOnlyTable({ data }) {
  const router = useRouter();
  const { pathname } = router;

  const {
    currentPage,
    setCurrentPage,
    filteredData,
    setFilteredData,
    prevPage,
    nextPage,
  } = useLocalPagination(data);
  return (
    <>
      <div
        className="has-background-white is-flex is-flex-direction-column p-4"
        style={{maxWidth:"700px" ,borderRadius: "5px" }}
      >
        <h1 className="title is-size-4">
          {pathname === "/loans"
            ? "Préstamos"
            : pathname === "/pawns"
            ? "Empeños"
            : pathname === "/jewelry"
            ? "Compras de prendas"
            : ""}
        </h1>
        <section className="mb-3">
          <div className="field">
            <label className="label">Buscar por:</label>
            <input
              type="text"
              className="input"
              placeholder="Buscar por fecha ó ID..."
            />
          </div>
          <button onClick={()=>
        router.push(`${pathname}/add`)
        } className="button is-success mt-3 ">
            <i className="bi bi-plus" /> <span className="mr-1">Añadir</span>
            {pathname === "/loans"
              ? "nuevo préstamo"
              : pathname === "/pawns"
              ? "nuevo empeño"
              : pathname === "/jewelry"
              ? " nueva compra de joyas"
              : ""}
          </button>
          <hr className="mt-4 mb-1" />
        </section>
        <div className="tableHolder">
          <table className="table is-striped is-hoverable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Detalles</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data) => (
                <ViewOnlyRow rowData={data} key={data._id} />
              ))}
            </tbody>
          </table>
        </div>
        <menu className="is-flex is-justify-content-space-between is-fullwidth m-0 p-0">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 ? true : false}
            className="button is-link"
          >
            Anterior página
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage >= filteredData.length ? true : false}
            className="button is-link"
          >
            Siguiente página
          </button>
        </menu>
      </div>
    </>
  );
}
