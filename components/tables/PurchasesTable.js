import PurchasesTableRow from "./rows/PurchasesTableRow";

export default function PurchasesTable({ purchases }) {
  return (
    <>
      <div className="tableHolder p-3 " style={{maxWidth:"600px", borderRadius:"5px"}}>
        <h1 className="title is-size-4">Compras registradas</h1>
        <input
          type="text"
          className="input mb-5"
          placeholder="Buscar por fecha..."
          style={{ width: "180px" }}
        />
        <menu
          className="mx-0 px-0"
        >
          <button className="button is-info mr-5">
            <i className="bi bi-caret-left-fill" />
            <span className="button-text">Anterior página</span>
          </button>
          <button className="button is-info">
            <span className="button-text">Siguiente página</span>
            <i className="bi bi-caret-right-fill" />
          </button>
        </menu>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
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
    </>
  );
}
