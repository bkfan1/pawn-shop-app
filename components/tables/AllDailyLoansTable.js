import { useLocalPagination } from "../../hooks/useLocalPagination";
import AllDailyLoansTableRow from "./rows/AllDailyLoansTableRow";
import { useRouter } from "next/router";

export default function AllDailyLoansTable({ dailyLoans }) {
  const { filteredData, currentPage, prevPage, nextPage } =
    useLocalPagination(dailyLoans);
  const router = useRouter();
  return (
    <>
      <div className="AllDailyLoansTable_Holder p-4 has-background-white" style={{ borderRadius: "5px" }}>
        <h1 className="title is-size-4">Empeños diarios</h1>

        <button
          onClick={() => router.push("/loans/add")}
          className="button is-success mb-4"
        >
          <i className="bi bi-plus" />
          Añadir préstamo
        </button>

        <div style={{minHeight:"330px", maxHeight:"330px", overflowY:"scroll"}}>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Detalles</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((dailyLoan) => (
                <AllDailyLoansTableRow
                  dailyLoan={dailyLoan}
                  key={dailyLoan._id}
                />
              ))}
            </tbody>
          </table>
        </div>

        <section className="is-flex is-flex-direction-column  is-fullwidth mt-2">
          <menu className="is-flex is-justify-content-space-between m-0 px-0 is-fullwidth">
            <button
              onClick={prevPage}
              title={
                currentPage === 0 ? "No hay pagina anterior" : "Página anterior"
              }
              className={`button is-info`}
              disabled={currentPage === 0 ? true : false}
            >
              <i className="bi bi-caret-left" />

              <span className="button-text">Anterior página</span>
            </button>

            <button
              onClick={nextPage}
              title={
                currentPage >= filteredData.length
                  ? "No hay pagina siguiente"
                  : "Página anterior"
              }
              className="button is-info"
              disabled={currentPage >= filteredData.length ? true : false}
            >
              <span className="button-text">Siguiente página</span>
              <i className="bi bi-caret-right" />
            </button>
          </menu>
        </section>
      </div>
    </>
  );
}
