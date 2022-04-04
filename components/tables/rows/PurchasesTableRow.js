import axios from "axios";
import { useRouter } from "next/router";

export default function PurchasesTableRow({ purchase }) {
  const router = useRouter();
  const deletePurchase = async (purchaseId) => {
    const op = confirm("Deseas realmente eliminar esta compra?");

    if (op) {
      const res = await axios.delete(
        `http://localhost:3000/api/purchases/${purchaseId}`
      );

      res.status === 200
        ? console.log("compra eliminada con exito")
        : console.warn("ocurrió un error al intentar eliminar la compra");
    }
  };

  return (
    <tr>
      <td><span>{purchase._id}</span></td>
      <td><span>{new Date(purchase.createdAt).toLocaleString('es-VE')}</span></td>
      <td>
        <button
          onClick={() => router.push(`purchases/${purchase._id}`)}
          className="button rowButton is-link is-size-7 mr-3"
          title="Editar compra"
        >
          <i className="bi bi-pencil" />
        </button>
        <button onClick={()=>deletePurchase(purchase._id)} className="button  is-danger is-size-7" title="Eliminar compra">
          <i className="bi bi-trash" />
        </button>
      </td>
    </tr>
  );
}
