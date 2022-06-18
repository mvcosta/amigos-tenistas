import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(props.children, document.querySelector("#overlays"))
    : null;
};

export default Portal;
