import { useSelector, useDispatch } from "react-redux";
import { add, sub, mul, div } from "./CalculatorSlice";

function Calculator() {
  const res = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(add({ value1: 100, value2: 200 }))}>
          Add
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(sub({ value1: 100, value2: 200 }))}>
          Subtract
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(mul({ value1: 100, value2: 200 }))}>
          Multiply
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(div({ value1: 100, value2: 200 }))}>
          Divide
        </button>
      </div>
      <p>Result: {res}</p>
    </div>
  );
}

export default Calculator;
