import {useEffect, useRef} from "react"

export const usePrevious = (value) => {
  const ref = useRef();
  //console.log("usePrevious", ref)
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const useCompare = (val) => {
  // console.log("useCompare ", val)
  const prevVal = usePrevious(val)
  // console.log("prevVal ", prevVal)
  return prevVal !== val
}

