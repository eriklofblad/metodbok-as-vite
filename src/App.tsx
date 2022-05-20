import React, { useEffect, useState } from "react";
import Compare from "./Compare";
import PortalBase from "./PortalBase";

interface AppProps {}
const App: React.FC<AppProps> = ({}) => {
  const [showButton, setShowButton] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowCompare((prevState) => !prevState);
  };

  useEffect(() => {
    const checkUrl = () => {
      const pathname = location.pathname;
      const regEx = new RegExp(/\/metodbok-as-test\/[^\/]+\/\d{2,6}/);
      const isProtocol = regEx.test(pathname);
      setShowButton(isProtocol);
    };
    document.addEventListener("animationstart", checkUrl, false);
    checkUrl();
    return () =>
      document.removeEventListener("animationstart", checkUrl, false);
  }, [setShowButton]);
  if (showButton) {
    return (
      <div className="fixed bottom-5 right-10">
        <button
          className="bg-metodbok text-white rounded-lg shadow px-3 py-1 hover:bg-blue-500 text-lg font-semibold"
          onClick={handleClick}
        >
          {showCompare ? "Stäng" : "Jämför"}
        </button>
        {showCompare && (
          <PortalBase>
            <Compare />
          </PortalBase>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default App;
