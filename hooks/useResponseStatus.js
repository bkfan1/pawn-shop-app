import { useEffect, useState } from "react";
export const useResponseStatus = (
  initialStatus = null,
  initialStatusMessage = "",
) => {
  const [status, setStatus] = useState(initialStatus);
  const [statusMessage, setStatusMessage] = useState(initialStatusMessage);

  const handleStatusMessage = (status)=>{
    setStatus(status);

    if(status >= 200 && status < 300){
        
        setStatusMessage(`Transacción realizada con éxito.`)
    }

    if(status >= 400){
        setStatusMessage(`Ha ocurrido un error.`)
    }


  }

  return {status, setStatus, statusMessage, setStatusMessage, handleStatusMessage};

};
