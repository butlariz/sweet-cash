import React from 'react';

function Expenses(props) {
  return <button onClick={() => props.onPress("remove")}> Adicionar Despesa</button>;
}

export default Expenses;
