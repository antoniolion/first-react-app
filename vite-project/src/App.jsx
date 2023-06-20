import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(100);
  console.log('rendering with counter value', counter);

  const increaseByOne = () =>{
    console.log('increasing, value before', counter)
     setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter);

    setCounter(0);
  }
  const Display = (props) => {
    return <div>{props.counter}</div>;
  };
  const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
  };
  /**What if we tried to define the event handlers in a simpler form?

<button onClick={setCounter(counter + 1)}> 
  plus
</button>copy
This would completely break our application: */
  /**What's going on? An event handler is supposed to be either a function or a function reference, and when we write:

<button onClick={setCounter(counter + 1)}>copy
the event handler is actually a function call. In many situations this is ok, but not in this particular situation.
In the beginning, the value of the counter variable is 0. When React renders the component for the first time, 
it executes the function call setCounter(0+1), and changes the value of the component's state to 1. 
This will cause the component to be re-rendered, React will execute the setCounter function call again, 
and the state will change leading to another rerender... */

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />{" "}
    </div>
  );
};

export default App;
