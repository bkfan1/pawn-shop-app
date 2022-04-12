import { useState } from "react";
import { regex } from "../utils/regex";


export const useCustomer = (initialCustomer = undefined) => {
  const [customer, setCustomer] = useState(
    initialCustomer === undefined
      ? { name: "", surname: "", dni: "", tel: "", address: "" }
      : initialCustomer
  );

  const customerDataOnChange = ()=>{
      const {target} = event;
      const {name, value}=target;

      setCustomer({...customer, [name]:value});
  }

  const customerDataValidation = ()=>{
    const fields = [regex.name.test(customer.name), regex.name.test(customer.surname), regex.dni.test(customer.dni), regex.tel.test(customer.tel), customer.address !== ""]

    return fields.every((field)=> field === true);

  }

  return {customer, setCustomer, customerDataOnChange, customerDataValidation};
};
