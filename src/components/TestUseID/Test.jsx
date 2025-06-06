import { useState } from "react";
import CustomInput from "./CustomInput";

const Test = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      {Array(counter)
        .fill("")
        .map((item, idx) => (
          <CustomInput key={idx} />
        ))}
      {/* <ul>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <CustomInput key={item} />
        ))}
      </ul> */}
    </div>
  );
};

export default Test;
