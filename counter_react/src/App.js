import React, {
  Component
} from 'react';
import Counter from './counter.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {
      showFlag,
      value,
      onIn,
      onDe,
      onViewChange
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎进入React的世界</h2>
        </div>
        <p className="App-intro" onClick={onViewChange}>
          开启旅程, 编辑 <code>src/App.js</code> 并且保存它以实现自动重新加载.
        </p>
        <div style={{display: (showFlag ? 'block' : 'none')}}>
          <Counter value={value} onDe={onDe} onIn={onIn} />
        </div>
      </div>
    );
  }
}

export default App;