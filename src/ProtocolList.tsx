import React, { useEffect, useState } from "react";
import { CompareActions } from "./Compare";

interface ProtocolListProps {
  dispatch: React.Dispatch<CompareActions>;
}

interface ProtocolListItem {
  Attributes: {};
  Categories: number[];
  Created: string; //"2021-11-22T15:10:07.1722054Z"
  FirstPublishedByDisplayName: string | null;
  FirstPublishedDate: string; //"2021-11-22T15:17:39.2567993Z"
  Id: number; //2635
  Modified: string; //"2021-11-22T15:31:11.1085895Z"
  ModifiedByDisplayName: string | null;
  Read: string | null;
  RelativeUrl: string; //"2635/ct-buk-venfas/"
  Tags: Tag[];
  Title: string; //"CT-Buk, venfas"
  Type: string; //"Guide"
}

export interface Tag {
  Id: number; //711
  TotalMatches: number; //20
  Title: string; //"DT"
  Symbol: {
    Type: string;
    Content: string;
  };
  DefaultIcon: string | null;
  ActiveIcon: string | null;
}
const ProtocolList: React.FC<ProtocolListProps> = ({ dispatch }) => {
  const [protocolListData, setProtocolListData] = useState<ProtocolListItem[]>(
    []
  );
  useEffect(() => {
    // const urlParams = new URLSearchParams(location.search)
    // const tag = urlParams.get("tag")
    // const category = urlParams.get("category")
    let url =
      "https://region-uppsala.humany.net/metodbok-as/guides" +
      location.search.replace("category", "categories").replace("tag", "tags");
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProtocolListData(json.Matches));
  }, [setProtocolListData]);

  // const handleClick = (e:React.MouseEvent<HTMLElement> ,id: number) => {
  //   dispatch({type: "startComparing", payload:id})
  // }
  return (
    <div>
      <ul className="list-none">
        {protocolListData.map((protocol) => (
          <li
            className="px-4 py-1 cursor-pointer hover:bg-blue-200"
            key={protocol.Id}
            onClick={() =>
              dispatch({ type: "startComparing", payload: protocol.Id })
            }
          >
            {protocol.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProtocolList;
