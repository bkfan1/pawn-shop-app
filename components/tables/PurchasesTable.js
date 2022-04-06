import { useRouter } from "next/router";
import { useItems } from "../../hooks/useItems";
import PurchasesTableRow from "./rows/PurchasesTableRow";

export default function PurchasesTable({ purchases }) {
  const router = useRouter();

  return (
    <>
      <div
        className="tableHolder is-flex is-flex-direction-column p-4"
        style={{ width: "800px", height: "580px", borderRadius: "5px" }}
      >
        <header>
          <h1 className="title is-size-4 m-0">
            Listado de compras registradas
          </h1>
          <input
            type="text"
            className="input my-5"
            placeholder="Buscar compra por ID, fecha de registro..."
          />
        </header>

        <section style={{minHeight:"360px"}} className="is-flex is-flex-direction-column is-fullwidth">
          <button
            onClick={() => router.push("purchases/add")}
            style={{ width: "160px" }}
            className="button is-success mb-4 "
          >
            <i className="bi bi-plus" /> Añadir compra
          </button>

          <div className="tableWrapper">
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
                {purchases.map((purchase, index) => (
                  <PurchasesTableRow purchase={purchase} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <menu className="is-flex is-justify-content-space-between mt-4 p-0">
          <button className="button is-info is-light mr-5">
            <i className="bi bi-caret-left-fill button-icon" />
            <span className="button-text"><i className="bi bi-caret-left-fill button-icon"/> Anterior página</span>
          </button>
          <button className="button is-info">
            <span className="button-text">Siguiente página</span>
            <i className="bi bi-caret-right-fill button-icon" />
          </button>
        </menu>
      </div>
    </>
  );
}
