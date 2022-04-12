import { useRouter } from "next/router";

export default function CustomerForm({ customer, customerDataOnChange }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <form>
      <section className="is-flex">
        <div className="field mr-5">
          <label className="label">Nombre</label>
          <input
            type="text"
            name="name"
            value={customer ? customer.name : ""}
            className="input is-hovered"
            required
            onChange={customerDataOnChange}
            disabled={pathname === "/loans" ? true : false}
          />
        </div>

        <div className="field">
          <label className="label">Apellido</label>
          <input
            type="text"
            name="surname"
            value={customer ? customer.surname : ""}
            className="input is-hovered"
            required
            onChange={customerDataOnChange}
            disabled={pathname === "/loans" ? true : false}
          />
        </div>
      </section>

      <section className="is-flex">
        <div className="field mr-5">
          <label className="label">Cédula</label>
          <input
            type="text"
            name="dni"
            value={customer ? customer.dni : ""}
            className="input is-hovered"
            required
            onChange={customerDataOnChange}
            disabled={pathname === "/loans" ? true : false}
          />
        </div>

        <div className="field">
          <label className="label">Dirección</label>
          <input
            type="text"
            name="address"
            value={customer ? customer.address : ""}
            className="input is-hovered"
            required
            onChange={customerDataOnChange}
            disabled={pathname === "/loans" ? true : false}
          />
        </div>
      </section>

      <div className="field">
        <label className="label">Núm. telefónico</label>
        <input
          type="text"
          name="tel"
          value={customer ? customer.tel : ""}
          className="input is-hovered"
          required
          onChange={customerDataOnChange}
          disabled={pathname === "/loans" ? true : false}
        />
      </div>
    </form>
  );
}
