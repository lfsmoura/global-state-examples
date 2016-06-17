import React from 'react';

const symbols = ['O', '_', 'X'];

export default function Cell(props) {
  return (<div
    onClick={props.onClick}
    className={`cell cell${props.value}`}
  >
  {symbols[props.value + 1]}
  </div>);
}

Cell.propTypes = {
  onClick: React.PropTypes.function,
  value: React.PropTypes.number,
};
