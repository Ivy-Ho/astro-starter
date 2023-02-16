import { useState } from "react";

const Button = () => {
  const [num, setNum] = useState(0);
  return <button className="bg-orange-400 w-16 rounded ml-2 text-white" onClick={() => setNum((prev) => prev + 1)}>{num}</button>;
};
export default Button;