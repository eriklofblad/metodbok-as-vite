import React, { useEffect, useReducer, useState } from "react";
import ProtocolList, { Tag } from "./ProtocolList";

const initialState: CompareState = {
  comparing: false,
  protocolId: null,
  protocol: null,
  loadingProtocol: false,
};

const reducer = (state: CompareState, action: CompareActions): CompareState => {
  switch (action.type) {
    case "startComparing":
      return {
        ...state,
        comparing: true,
        loadingProtocol: true,
        protocolId: action.payload,
      };
    case "endComparing":
      return initialState;
    case "setProtocol":
      return { ...state, protocol: action.payload, loadingProtocol: false };
    default:
      return state;
  }
};

interface CompareState {
  comparing: boolean;
  protocolId: number | null;
  protocol: ProtocolData | null;
  loadingProtocol: boolean;
}

export type CompareActions =
  | EndComparingAction
  | StartCompareingAction
  | ProtocolAction;

interface EndComparingAction {
  type: "endComparing";
  payload: undefined;
}

interface StartCompareingAction {
  type: "startComparing";
  payload: number;
}

interface ProtocolAction {
  type: "setProtocol";
  payload: ProtocolData;
}

interface ProtocolData {
  Attributes: {};
  Body: string; //HTML
  Breadcrumb: [];
  Categories: number[];
  ConnectionId: string; //"21ef3c48-fae8-487f-9c9b-32c319a3326d"
  Created: string; //"2021-11-01T08:59:19.3254459Z"
  EnableFeedback: boolean;
  FirstPublishedByDate: string; //"2021-11-01T08:59:56.5434059Z"
  FirstPublishedByDisplayName: string; //"Erik Löfblad"
  FirstPublishedDate: string; //"2021-11-01T08:59:56.5441323Z"
  HandoverExists: boolean;
  Id: number; //2530
  Modified: string; //"2021-11-22T15:33:50.7197945Z"
  ModifiedByDisplayName: string; //"Monica Segelsjö"
  PerspectiveKey: null;
  Perspectives: { [key: string]: string };
  Read: null;
  Related: Pick<
    ProtocolData,
    | "Attributes"
    | "Categories"
    | "Created"
    | "FirstPublishedByDisplayName"
    | "FirstPublishedDate"
    | "Id"
    | "Modified"
    | "ModifiedByDisplayName"
    | "Read"
    | "RelativeUrl"
    | "Tags"
    | "Title"
    | "Type"
  >[];
  RelativeUrl: string; //"2530/erik-dt-mall/"
  SeoAllowIndex: null;
  SeoMetaDescription: null;
  Tags: Tag[];
  Title: string; //"Erik DT-mall"
  Translations: { [key: string]: number /*2530*/ };
  Type: string; //"Solution"
}

interface CompareProps {}
const Compare: React.FC<CompareProps> = ({}) => {
  const [compState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (compState.protocolId) {
      fetch(
        "https://region-uppsala.humany.net/metodbok-as/guides/" +
          compState.protocolId
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch({ type: "setProtocol", payload: json });
        })
        .catch((err) => console.log(err));
    }
  }, [compState.protocolId]);

  return (
    <div className="bg-white rounded-md h-full border border-gray-300">
      <h2 className="text-center mt-3">Jämför med</h2>
      {!compState.comparing && <ProtocolList dispatch={dispatch} />}
      {compState.loadingProtocol && <h3>Laddar...</h3>}
      {compState.comparing && !compState.loadingProtocol && compState.protocol && (
        <div className="mx-4 mb-4">
          <h2>{compState.protocol.Title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: compState.protocol.Body }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Compare;
