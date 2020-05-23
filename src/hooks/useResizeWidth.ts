import { useEffect, useState } from "react";
import { debounce } from "utils";

const getWidth = (): number => window.innerWidth;

export default function useResizeWidth() {
  const [width, setWidth] = useState(getWidth());

  const handleSetWidth = () => setWidth(getWidth());
  
  const handler = debounce(handleSetWidth, 200);

  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [handler]);
  return { width };
}
