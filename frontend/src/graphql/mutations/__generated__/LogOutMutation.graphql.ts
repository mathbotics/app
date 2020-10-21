/* tslint:disable */
/* eslint-disable */
/* @relayHash 19eeaeb3d15ba81610f0d2462b516e3e */

import { ConcreteRequest } from "relay-runtime";
export type LogOutMutationVariables = {};
export type LogOutMutationResponse = {
    readonly logOut: boolean;
};
export type LogOutMutation = {
    readonly response: LogOutMutationResponse;
    readonly variables: LogOutMutationVariables;
};



/*
mutation LogOutMutation {
  logOut
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "logOut",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LogOutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LogOutMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LogOutMutation",
    "id": null,
    "text": "mutation LogOutMutation {\n  logOut\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a96290a6ef0b070a80f46fffdafb39f4';
export default node;
