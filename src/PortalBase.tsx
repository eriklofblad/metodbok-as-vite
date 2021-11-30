import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface PortalBaseProps {}

const compareContainer = document.createElement("div");
compareContainer.id = "compare-container";
compareContainer.classList.add(
  "as-preflight",
  "flex-grow",
  "flex-shrink",
  "mr-4"
);
compareContainer.style.flexBasis = "50%";

const PortalBase: React.FC<PortalBaseProps> = ({ children }) => {
  useEffect(() => {
    const middleColumn = document.querySelector(".humany-middle-column");
    if (middleColumn && !document.getElementById("compare-container")) {
      middleColumn.insertAdjacentElement("afterend", compareContainer);
    }
    return () => {
      compareContainer.remove();
    };
  }, []);
  return ReactDOM.createPortal(children, compareContainer);
};

export default PortalBase;
