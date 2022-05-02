import { useState } from "react";
const customerSchema = {
  name: "",
  surname: "",
  dni: "",
  tel: "",
  address: "",
};
import { regex } from "../utils/regex";

export const useCustomer = (initialCustomer = customerSchema) => {
  const [customer, setCustomer] = useState(initialCustomer);

  const customerDataOnChange = () => {
    const { target } = event;
    const { name, value } = target;

    setCustomer({ ...customer, [name]: value });
  };

  const customerDataValidation = () => {
    const fields = [
      regex.name.test(customer["name"]),
      regex.name.test(
        customer["surname"],
        regex.dni.test(
          customer["dni"],
          regex.tel.test(customer["tel"]),
          regex.name.test(customer["address"])
        )
      ),
    ];

    return fields.every((field) => field === true);
  };

  return { customer, customerDataOnChange, customerDataValidation };
};
