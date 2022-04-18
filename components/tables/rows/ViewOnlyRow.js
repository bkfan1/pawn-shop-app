import axios from "axios";
import { useRouter } from "next/router";

export default function ViewOnlyRow({ rowData }) {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  const handleDelete = async () => {
    const op = confirm("Realmente deseas eliminarlo?:");
    if (op) {
      const url = `http://localhost:3000/api/${pathname}/${rowData._id}`;
      console.log(url);
      const res = await axios.delete(url);

      res.status === 200
        ? console.log("se ha eliminado con exito")
        : console.warn("ha ocurrido un error al intentar eliminar");
    }
  };

  return (
    <>
      <tr>
        <td>{rowData._id}</td>
        <td>{rowData.createdAt}</td>
        <td>
          <a className="button is-info is-light is-size-7">Ver</a>
        </td>
        <td>
          <button
            onClick={() => router.push(`${pathname}/edit/${rowData._id}`)}
            title="Editar"
            className="button is-info is-size-7 mr-3"
          >
            <i className="bi bi-pencil" />
          </button>
          <button
            onClick={handleDelete}
            title="Eliminar"
            className="button is-danger is-size-7"
          >
            {" "}
            <i className="bi bi-trash" />
          </button>
        </td>
      </tr>
    </>
  );
}
