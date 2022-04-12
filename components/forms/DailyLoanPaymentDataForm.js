import { useRouter } from "next/router";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function DailyLoanPaymentDataForm({
  capital,
  emuloments,
  dailyLoanPaymentDataOnChange

}) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <form className="has-background-white">

      <section className="is-flex is-flex-direction-column">
        <div className="field">
          <label className="label">Capital</label>
          <input
            type="text"
            name="capital"
            value={capital ? capital : ""}
            className="input is-hovered"
            required
            onChange={dailyLoanPaymentDataOnChange}
            disabled={pathname === "/loans" ? true : false}
          />
        </div>

        <div className="field">
          <label className="label">Emulomentos</label>
          <input
            type="text"
            name="emuloments"
            value={emuloments ? emuloments : ""}
            className="input is-hovered"
            required
            onChange={dailyLoanPaymentDataOnChange}
            disabled={pathname === "/loans" ? true : false}
          />
        </div>
      </section>
    </form>
  );
}
