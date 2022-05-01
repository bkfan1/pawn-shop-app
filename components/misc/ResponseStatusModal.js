import { useRouter } from "next/router";

export default function ResponseStatusModal({
  status,
  statusMessage,
  pathToAddNew,
}) {
  const router = useRouter();
  const { pathname } = router;
  const editPaths = [
    "/jewelry/edit/[id]",
    "/loans/edit/[id]",
    "/pawns/edit/[id]",
  ];
  return (
    <>
      <figure className="statusFigure is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <i
          className={`bi ${
            status === 200
              ? "bi-check-circle-fill has-text-success"
              : "bi-x-circle-fill has-text-danger"
          } is-size-1 `}
        />
        <h1 className="title is-size-5">{statusMessage}</h1>

        <menu className="has-background-white-ter m-0 p-0 is-flex is-flex-direction-column p-2">
          <p className="mb-2">Más opciones:</p>
          {status === 200 ? (
            <>
              {editPaths.includes(pathname) ? <button className="button is-warning" onClick={()=>router.reload()} ><i className="bi bi-pencil-fill mr-1"/> Volver a editar</button> : ""}
              <button
                onClick={() => router.push(pathToAddNew)}
                className="button is-success mt-2"
              >
                <i className="bi bi-plus" /> Añadir nuevo registro
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.reload()}
                className="button is-warning"
              >
                <i className="bi bi-arrow-counterclockwise mr-2" /> Volver a
                intentarlo
              </button>
            </>
          )}
        </menu>
      </figure>
    </>
  );
}
