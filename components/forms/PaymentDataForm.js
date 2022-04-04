import { useEffect, useState } from "react";

export default function PaymentDataForm({paymentMethod, paymentMethodOnChange,paymentData, paymentDataOnChange}) {

  return (
    <form className="paymentDataForm mr-6">
      <h1 className="title is-size-4">Datos de pago</h1>

      <div className="select mb-3">
        <select
          value={paymentMethod}
          onChange={paymentMethodOnChange}
        >
          <option value="">Sin seleccionar</option>
          <option value="pagoMovil">Pago móvil</option>
          <option value="transferenciaBancaria">Transferencia bancaria</option>
          <option value="dineroFisico">Dinero fisico</option>
        </select>
      </div>

      {paymentMethod === "pagoMovil" ? (
        <>
          <div className="field">
            <label className="label">Banco</label>
            <input
              type="text"
              name="bankName"
              value={paymentData.bankName}
              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>

          <div className="field">
            <label className="label">Cédula de pago móvil</label>
            <input
              type="text"
              name="bankDni"
              value={paymentData.bankDni}
              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>

          <div className="field">
            <label className="label">Teléfono de pago móvil</label>
            <input
              type="text"
              name="bankTel"
              value={paymentData.bankTel}
              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>

          <div className="field">
            <label className="label">Monto a pagar</label>
            <input
              type="text"
              name="totalAmount"
              value={paymentData.totalAmount}

              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>
        </>
      ) : paymentMethod === "dineroFisico" ? (
        <>
          <div className="field">
            <label className="label">Monto a pagar</label>
            <input
              type="text"
              name="totalAmount"
              value={paymentData.totalAmount}

              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>
        </>
      ) : paymentMethod === "transferenciaBancaria" ? (
        <>
          <div className="field">
            <label className="label">Banco</label>
            <input
              type="text"
              name="bankName"
              value={paymentData.bankName}

              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>

          <div className="field">
            <label className="label">Cédula de cuenta bancaria</label>
            <input
              type="text"
              name="bankDni"
              value={paymentData.bankDni}

              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>

          <div className="field">
            <label className="label">Número de cuenta bancaria</label>
            <input
              type="text"
              name="bankAccountNum"
              value={paymentData.bankAccountNum}
              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>

          <div className="field">
            <label className="label">Monto a pagar</label>
            <input
              type="text"
              name="totalAmount"
              value={paymentData.totalAmount}

              onChange={paymentDataOnChange}
              className="input is-hovered"
            />
          </div>
        </>
      ) : (
        <h1 className="title is-size-4">
          Selecciona un método de pago para continuar.
        </h1>
      )}
    </form>
  );
}
