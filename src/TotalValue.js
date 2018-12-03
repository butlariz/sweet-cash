import React from 'react';

function TotalValue(props) {
  return <button onClick={() => props.onPress("add")}>{props.children}</button>;
}

export default TotalValue;
