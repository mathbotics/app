/* tslint:disable */
/* eslint-disable */
/* @relayHash 4387e5b41937134fa6bb174b6b6bfdd0 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DashboardPageQueryVariables = {};
export type DashboardPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Dashboard_dashboard">;
};
export type DashboardPageQuery = {
    readonly response: DashboardPageQueryResponse;
    readonly variables: DashboardPageQueryVariables;
};



/*
query DashboardPageQuery {
  ...Dashboard_dashboard
}

fragment Dashboard_dashboard on Query {
  viewer {
    __typename
    firstName
    lastName
    ... on Instructor {
      email
    }
    ... on Admin {
      email
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Dashboard_dashboard",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Instructor",
            "selections": (v0/*: any*/)
          },
          {
            "kind": "InlineFragment",
            "type": "Admin",
            "selections": (v0/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DashboardPageQuery",
    "id": null,
    "text": "query DashboardPageQuery {\n  ...Dashboard_dashboard\n}\n\nfragment Dashboard_dashboard on Query {\n  viewer {\n    __typename\n    firstName\n    lastName\n    ... on Instructor {\n      email\n    }\n    ... on Admin {\n      email\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '50e990b74c671be8218e6107a6993b83';
export default node;
