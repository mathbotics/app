import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
  FetchFunction,
  GraphQLResponse,
  GraphQLTaggedNode,
  createOperationDescriptor,
  getRequest,
  Variables,
  DataID
} from "relay-runtime";

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

const fetchQuery: FetchFunction = async (operation, variables) => {
  const queryID: string = operation.text ?? "";
  const isMutation = operation.operationKind === "mutation";
  const isQuery = operation.operationKind === "query";
  const fromCache = cache.get(queryID, variables);
  if (isQuery && fromCache !== null) {
    return fromCache;
  }
  const apiURI: RequestInfo = "http://localhost:5000/graphql";
  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": apiURI ?? "*"
  });

  const request: RequestInit = {
    credentials: "include",
    method: "POST",
    headers,
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  };

  const response: Response = await fetch(apiURI, request);
  const json: GraphQLResponse = await response.json();

  if (isQuery && json != null) {
    cache.set(queryID, variables, json);
  } else if (isMutation) {
    cache.clear();
  }

  return json;
};

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export const getRootQueryDataID = (
  query: GraphQLTaggedNode,
  variables: Variables
) =>
  environment.lookup(
    createOperationDescriptor(getRequest(query), variables).fragment
  ).selector.dataID;
