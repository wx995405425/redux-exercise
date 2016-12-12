import React, {
  Component,
  PropTypes
} from 'react';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIn: PropTypes.func.isRequired,
    onDe: PropTypes.func.isRequired
  }

  odd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIn()
    }
  }

  async = () => {
    setTimeout(this.props.onIn, 1000)
  }
  render() {
    const {
      value,
      onIn,
      onDe
    } = this.props;

    return (
      <p>
        数值：<span>{value}</span>
        <button onClick={onIn}>+</button>
        <button onClick={onDe}>-</button>
        <button onClick={this.odd}>奇数加1</button>
        <button onClick={this.async}>异步</button>
      </p>
    );
  }
}
export default Counter