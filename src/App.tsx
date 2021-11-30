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
    const interval = setInterval(() => {
      const pathname = location.pathname;
      const regEx = new RegExp(/\/metodbok-as\/[^\/]+\/\d{2,6}/);
      const isProtocol = regEx.test(pathname);
      setShowButton(isProtocol);
    }, 1000);
    return () => clearInterval(interval);
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
