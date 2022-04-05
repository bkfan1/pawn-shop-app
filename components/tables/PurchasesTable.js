import { useRouter } from "next/router";
import PurchasesTableRow from "./rows/PurchasesTableRow";

export default function PurchasesTable({ purchases }) {
  const router = useRouter();
  return (
    <>
      <div
        className="tableHolder is-flex is-flex-direction-column p-4 "
        style={{width:"800px",maxHeight:"580px", borderRadius:"5px"}}
        
      >
        <h1 className="title is-size-4 m-0">Listado de compras registradas</h1>

        <input type="text" className="input my-5" placeholder="Buscar compra por ID, fecha de registro..." />

        <button onClick={()=>router.push("purchases/add")} style={{ width: "160px" }} className="button is-success mb-4 ">
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
              {purchases.map((purchase) => (
                <PurchasesTableRow purchase={purchase} key={purchase._id} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="is-flex is-justify-content-space-between mt-4">
            <button className="button is-info is-light mr-5">
              <i className="bi bi-caret-left-fill button-icon" />
              <span className="button-text">Anterior página</span>
            </button>
            <button className="button is-info">
              <span className="button-text">Siguiente página</span>
              <i className="bi bi-caret-right-fill button-icon" />
            </button>
          </div>
        
      </div>
    </>
  );
}
