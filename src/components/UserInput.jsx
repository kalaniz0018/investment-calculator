import React, { useState } from "react";

const UserInput = ({ onChange, userInput }) => {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              //value es valor actual del campo especifico, controla el input desde react y no desde el DOM directamente
              /*controlar el estado desde React: El valor del input es gestionado por React y se actualiza a través de las 
              actualizaciones de estado (setState o useState).Cualquier cambio en el valor del input provoca una actualización 
              en el estado de React*/
              /* Desde el Dom: El valor del input es manipulado directamente a través de JavaScript del lado del cliente 
              sin involucrar el estado de React. No hay ninguna vinculación directa entre el valor del input y el estado de React y viceversa
              Este enfoque puede ser útil en situaciones simples donde no se necesite un seguimiento del estado de los inputs */
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
};

export default UserInput;
