import React from 'react';

function Modal(props) {
  return (
      <div className="modal">
        <input type="text" id="newValue" />
        <input type="text" id="newValueTitle" />
        <input type="text" id="newValueDescription" />
        <input type="date" id="newDate" />
        <button onClick={() => props.onSend(document.querySelector("#newValue").value, props.typeButton)} type="button" id="sendValue" > Enviar </button>
      </div>
  );
}

export default Modal;
