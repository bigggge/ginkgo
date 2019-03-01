import React from '../ginkgo-core';
import store, { incrementAsync } from './store';

class App extends React.Component {
  render() {
    const store = this.props.store;
    const num = store.getState();

    return (
      <div className={'App'}>
        <p>ginkgo example</p>
        <p>初始值 {num}</p>
        <button onClick={() => {
          store.dispatch({ type: 'INCREMENT' });
        }}>
          increment
        </button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>decrement</button>
        <button onClick={() => store.dispatch(incrementAsync())}>increment async</button>
      </div>
    );
  }

}

function render() {
  React.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);