import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import DailyLoanForm from "../../forms/DailyLoanForm";
import Modal from "../../modal";


export default function AllDailyLoansTableRow({ dailyLoan }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const deleteDailyLoan = async(dailyLoanId)=>{
      const op = confirm("¿Estás seguro de querer eliminar este préstamo?");

      if(op){
          const res = await axios.delete(`http://localhost:3000/api/loans/${dailyLoanId}`);

          res.status === 200 ? console.log("préstamo eliminado con exito") : console.warn("ha ocurrido un error al intentar eliminar el préstamo deseado")
      }
  }

  return (
    <tr>
      <td>{dailyLoan._id}</td>
      <td>{dailyLoan.date}</td>
      <td>
        <a
          title="Ver detalles de compra"
          className="button is-info is-light rounded is-size-7"
          onClick={() => setShowModal(true)}
        >
          <i className="bi bi-eye button-icon is-size-6" />
          <span className="button-text">Ver</span>
        </a>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
            <DailyLoanForm dailyLoan={dailyLoan} />
        </Modal>
      </td>
      <td>
        <button onClick={()=> router.push(`/loans/edit/${dailyLoan._id}`)} className="button is-size-7 is-info rowButton mr-3" title="Editar préstamo">
          <i className="bi bi-pencil"  />
        </button>
        <button onClick={()=>deleteDailyLoan(dailyLoan._id)} className="button is-size-7 is-danger " title="Eliminar préstamo">
          <i className="bi bi-trash" />
        </button>
      </td>
    </tr>
  );
}
