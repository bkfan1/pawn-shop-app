import axios from "axios";
import { useRouter } from "next/router";

export default function CustomerDataForm({ customer, customerDataOnChange }) {
  const router = useRouter();
  const { pathname } = router;
  const paths = ["/loans", "/jewelry", "/pawns"];

  return (
    <form className="customerDataForm is-flex">
      <section className="mr-3">
        <div className="field">
          <label className="label">Nombre</label>
          <input
            type="text"
            name="name"
            className="input"
            value={customer.name}
            onChange={customerDataOnChange}
            required
            disabled={paths.includes(pathname) ? true : false}
          />
        </div>

        <div className="field">
          <label className="label">Número tlf.</label>
          <input
            type="text"
            name="tel"
            className="input"
            value={customer.tel}
            onChange={customerDataOnChange}
            required
            disabled={paths.includes(pathname) ? true : false}
          />
        </div>
      </section>

      <section className="mr-3">
        <div className="field">
          <label className="label">Apellido</label>
          <input
            type="text"
            name="surname"
            className="input"
            value={customer.surname}
            onChange={customerDataOnChange}
            required
            disabled={paths.includes(pathname) ? true : false}
          />
        </div>

        <div className="field">
          <label className="label">Dirección</label>
          <input
            type="text"
            name="address"
            className="input"
            value={customer.address}
            onChange={customerDataOnChange}
            required
            disabled={paths.includes(pathname) ? true : false}
          />
        </div>
      </section>

      <div className="field">
        <label className="label">Cédula de identidad</label>
        <input
          type="text"
          name="dni"
          className="input"
          value={customer.dni}
          onChange={customerDataOnChange}
          required
          disabled={paths.includes(pathname) ? true : false}
        />
      </div>
    </form>
  );
}
