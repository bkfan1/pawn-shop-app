import { useState, useEffect } from "react";
export default function JewelryPaymentDataForm({paymentMethod, paymentMethodOnChange ,paymentData, paymentDataOnChange}) {
  

  return (
    <form className="jewelryPaymentDataForm is-flex is-flex-direction-column">
      <label className="label">Método de pago:</label>
      <div className="select mb-3" style={{width:"fit-content"}} >
        
        <select
          value={paymentMethod}
          onChange={paymentMethodOnChange}
        >
          <option value="">Sin seleccionar</option>
          <option value="Pago móvil">Pago móvil</option>
          <option value="Transferencia bancaria">Transferencia bancaria</option>
          <option value="Dinero fisico">Dinero fisico</option>
        </select>
      </div>

      {paymentMethod === "Pago móvil" ? (
        <section>
          <div className="field">
            <label className="label">Banco</label>
            <input
              type="text"
              name="bankName"
              value={paymentData.bankName}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>

          <div className="field">
            <label className="label">Cédula de Pago móvil</label>
            <input
              type="text"
              name="bankDni"
              value={paymentData.bankDni}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>

          <div className="field">
            <label className="label">Número tlf. de Pago móvil</label>
            <input
              type="text"
              name="bankTel"
              value={paymentData.bankTel}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>

          <div className="field">
            <label className="label">Monto total</label>
            <input
              type="text"
              name="totalAmount"
              value={paymentData.totalAmount}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>
        </section>
      ) : paymentMethod === "Transferencia bancaria" ? (
        <section>
          <div className="field">
            <label className="label">Banco</label>
            <input
              type="text"
              name="bankName"
              value={paymentData.bankName}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>

          <div className="field">
            <label className="label">Cédula de cuenta bancaria</label>
            <input
              type="text"
              name="bankDni"
              value={paymentData.bankDni}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>

          <div className="field">
            <label className="label">Número de cuenta bancaria</label>
            <input
              type="text"
              name="bankAccountNum"
              value={paymentData.bankAccountNum}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>

          <div className="field">
            <label className="label">Monto total</label>
            <input
              type="text"
              name="totalAmount"
              value={paymentData.totalAmount}
              className="input"
              onChange={paymentDataOnChange}
            />
          </div>
        </section>
      ) : paymentMethod === "Dinero fisico" ? (
        <div className="field">
          <label className="label">Monto total</label>
          <input
            type="text"
            name="totalAmount"
            value={paymentData.totalAmount}
            className="input"
            onChange={paymentDataOnChange}
          />
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
