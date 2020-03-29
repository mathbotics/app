/* tslint:disable */
/* eslint-disable */
/* @relayHash 50c6193f0c1106bddc1e4a06d22888d4 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateSlideInput = {
    lessonId: string;
    slideType: string;
    title: string;
};
export type CreateSlideMutationVariables = {
    input: CreateSlideInput;
};
export type CreateSlideMutationResponse = {
    readonly createSlide: {
        readonly " $fragmentRefs": FragmentRefs<"Slide_slide">;
    };
};
export type CreateSlideMutation = {
    readonly response: CreateSlideMutationResponse;
    readonly variables: CreateSlideMutationVariables;
};



/*
mutation CreateSlideMutation(
  $input: CreateSlideInput!
) {
  createSlide(input: $input) {
    __typename
    ...Slide_slide
  }
}

fragment HalfSlide_halfSlide on HalfSlide {
  id
}

fragment SingleSlide_singleSlide on SingleSlide {
  id
}

fragment Slide_slide on Slide {
  __typename
  title
  ... on SingleSlide {
    ...SingleSlide_singleSlide
  }
  ... on HalfSlide {
    ...HalfSlide_halfSlide
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSlideInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSlideMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSlide",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Slide_slide",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSlideMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSlide",
        "storageKey": null,
        "args": (v1/*: any*/),
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
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "SingleSlide",
            "selections": (v2/*: any*/)
          },
          {
            "kind": "InlineFragment",
            "type": "HalfSlide",
            "selections": (v2/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateSlideMutation",
    "id": null,
    "text": "mutation CreateSlideMutation(\n  $input: CreateSlideInput!\n) {\n  createSlide(input: $input) {\n    __typename\n    ...Slide_slide\n  }\n}\n\nfragment HalfSlide_halfSlide on HalfSlide {\n  id\n}\n\nfragment SingleSlide_singleSlide on SingleSlide {\n  id\n}\n\nfragment Slide_slide on Slide {\n  __typename\n  title\n  ... on SingleSlide {\n    ...SingleSlide_singleSlide\n  }\n  ... on HalfSlide {\n    ...HalfSlide_halfSlide\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3d1574b7d063c6744290c2d87c03ada0';
export default node;
