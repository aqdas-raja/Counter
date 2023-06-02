// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/action';
import '../style/Style.css'


const Counter = ({ count, increment, decrement }) => {
  return (
    <div className='counter-container'>
      <h1 className='font-size'>Counter: {count}</h1>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


