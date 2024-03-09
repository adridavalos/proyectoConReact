import { useState } from "react";
import Swal from "sweetalert2";

export const useCount = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const increment = (stock) => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Maximo",
        text: "No hay mas unidades en stock",
        showConfirmButton: false,
      });
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(initial);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
