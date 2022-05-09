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
  console.log(pathname);
  console.log(rowData);

  const handleDelete = async () => {
    
    const op = confirm("¿Realmente deseas eliminar este registro?:");

    if (op) {
      const url = `http://localhost:3000/api/${pathname}/${rowData._id}`;

      console.log(url);

      const res = await axios.delete(url);

      res.status === 200
        ? console.log("se ha eliminado con exito")
        : console.warn("ha ocurrido un error al intentar eliminar");

      router.reload();
    }
  };

  return (
    <>
      <tr>
        {/*<td>{rowData._id}</td>*/}
        <td title="dd/mm/aaaa">{rowData.date ? convertDate(rowData.date) : rowData.agreementDate ? convertDate(rowData.agreementDate) : ""}</td>
        <td>
          <a
            onClick={() => {
              setShowModal(!showModal)
            }}
            className="button is-info is-light is-size-7"
          >
            Ver
          </a>
          {showModal ? <Modal show={showModal} onClose={() => setShowModal(false)}>
            {pathname === "/jewelry" ? (
              <JewelryForm jewelryPurchase={rowData} />
            ) : pathname === "/loans" ? (
              <LoanForm loan={rowData} />
            ) : pathname === "/pawns" ? (
              <PawnForm pawn={rowData} />
            ) : (
              ""
            )}
          </Modal> : ""}
        </td>
        <td>
          <button
            onClick={() => router.push(`${pathname}/edit/${rowData._id}`)}
            title="Editar"
            className="button is-info is-size-7 mr-3 rowButton"
          >
            <i className="bi bi-pencil" />
          </button>

          <button
            onClick={handleDelete}
            title="Eliminar"
            className="button is-danger is-size-7"
          >
            <i className="bi bi-trash" />
          </button>


        </td>
      </tr>
    </>
  );
}
