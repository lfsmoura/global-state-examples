import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const symbols = ['O', '_', 'X']
    return <div
        onClick={this.props.onClick}
        className={`cell cell${this.props.value}`}>
        {symbols[this.props.value+1]}
      </div>;
  }
}
