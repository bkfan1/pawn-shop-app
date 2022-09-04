import { useRouter } from "next/router";
import { useState } from "react";

import Modal from "../../misc/Modal";
import JewelryForm from "../../forms/JewelryForm";
import PawnForm from "../../forms/PawnForm";

import LoanForm from "../../forms/LoanForm";
import convertDate from "../../../utils/formatDate";

import axios from "axios";

export default function ViewOnlyRow({ rowData }) {
  const router = useRouter();
  const { pathname } = router;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    const op = confirm("¿Realmente deseas eliminar este registro?:");

    if (op) {
      const url = `/api/${pathname}/${rowData._id}`;

      console.log(url);

      const res = await axios.delete(url);

      res.status === 200
        ? console.log("El recurso ha sido eliminado con éxito")
        : console.warn("Ha ocurrido un error al intentar eliminar el recurso.");

      router.reload();
    }
  };

  return (
    <>
      <tr>
        <td className="idTableData">
          <span>{rowData._id}</span>
        </td>
        <td title="dd/mm/aaaa">
          {rowData.date
            ? convertDate(rowData.date)
            : rowData.agreementDate
            ? convertDate(rowData.agreementDate)
            : ""}
        </td>
        <td>
          <a
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="button is-info is-light is-size-7"
          >
            Ver
          </a>
          {showModal ? (
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              {pathname === "/jewelry" ? (
                <JewelryForm jewelryPurchase={rowData} />
              ) : pathname === "/loans" ? (
                <LoanForm loan={rowData} />
              ) : pathname === "/pawns" ? (
                <PawnForm pawn={rowData} />
              ) : (
                ""
              )}
            </Modal>
          ) : (
            ""
          )}
        </td>
        <td>
          <button
            onClick={() => router.push(`${pathname}/edit/${rowData._id}`)}
            title="Editar"
            className="button is-info is-size-7 mr-3 rowButton"
          >
            <i className="bi bi-pencil" />
          </button>

          {process.env.NODE_ENV === "production" ? (
            ""
          ) : (
            <button
              onClick={handleDelete}
              title="Eliminar"
              className="button is-danger is-size-7"
            >
              <i className="bi bi-trash" />
            </button>
          )}
        </td>
      </tr>
    </>
  );
}
