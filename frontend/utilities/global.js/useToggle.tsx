import { useState } from "react";

interface ReturnValue {
  isShowing: boolean,
  toggle: Function
}

export const useToggle = (initial?:boolean): ReturnValue => {
  const [isShowing, setIsShowing] = useState(initial || false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return { isShowing, toggle };
};
