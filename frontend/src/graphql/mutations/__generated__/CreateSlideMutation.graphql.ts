/* tslint:disable */
/* eslint-disable */
/* @relayHash afa8c42372b293678c027dd4cd7e2ab0 */

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

fragment Block_block on Block {
  __typename
  ... on MultipleChoiceQuestionBlock {
    id
    ...MultipleChoiceQuestionBlock_block
  }
  ... on TextBlock {
    id
    ...TextBlock_block
  }
  ... on EmptyBlock {
    id
  }
}

fragment EditBlockSidebar_block on Block {
  ... on MultipleChoiceQuestionBlock {
    id
  }
  ... on TextBlock {
    id
  }
}

fragment HalfSlide_halfSlide on HalfSlide {
  id
  firstHalfBlock {
    __typename
    ...EditBlockSidebar_block
    ...Block_block
  }
  secondHalfBlock {
    __typename
    ...EditBlockSidebar_block
    ...Block_block
  }
}

fragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {
  choices {
    id
    text
    correct
  }
}

fragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {
  __typename
  text
  ...MultipleChoiceGroup_block
}

fragment SingleSlide_singleSlide on SingleSlide {
  id
  block {
    __typename
    ...EditBlockSidebar_block
    ...Block_block
  }
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

fragment TextBlock_block on TextBlock {
  id
  title
  body
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  {
    "kind": "InlineFragment",
    "type": "MultipleChoiceQuestionBlock",
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "choices",
        "storageKey": null,
        "args": null,
        "concreteType": "MultipleChoiceQuestionChoice",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "correct",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  {
    "kind": "InlineFragment",
    "type": "TextBlock",
    "selections": [
      (v4/*: any*/),
      (v3/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "body",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "InlineFragment",
    "type": "EmptyBlock",
    "selections": [
      (v4/*: any*/)
    ]
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "SingleSlide",
            "selections": [
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "block",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": (v6/*: any*/)
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "HalfSlide",
            "selections": [
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "firstHalfBlock",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": (v6/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "secondHalfBlock",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": (v6/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateSlideMutation",
    "id": null,
    "text": "mutation CreateSlideMutation(\n  $input: CreateSlideInput!\n) {\n  createSlide(input: $input) {\n    __typename\n    ...Slide_slide\n  }\n}\n\nfragment Block_block on Block {\n  __typename\n  ... on MultipleChoiceQuestionBlock {\n    id\n    ...MultipleChoiceQuestionBlock_block\n  }\n  ... on TextBlock {\n    id\n    ...TextBlock_block\n  }\n  ... on EmptyBlock {\n    id\n  }\n}\n\nfragment EditBlockSidebar_block on Block {\n  ... on MultipleChoiceQuestionBlock {\n    id\n  }\n  ... on TextBlock {\n    id\n  }\n}\n\nfragment HalfSlide_halfSlide on HalfSlide {\n  id\n  firstHalfBlock {\n    __typename\n    ...EditBlockSidebar_block\n    ...Block_block\n  }\n  secondHalfBlock {\n    __typename\n    ...EditBlockSidebar_block\n    ...Block_block\n  }\n}\n\nfragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {\n  choices {\n    id\n    text\n    correct\n  }\n}\n\nfragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {\n  __typename\n  text\n  ...MultipleChoiceGroup_block\n}\n\nfragment SingleSlide_singleSlide on SingleSlide {\n  id\n  block {\n    __typename\n    ...EditBlockSidebar_block\n    ...Block_block\n  }\n}\n\nfragment Slide_slide on Slide {\n  __typename\n  title\n  ... on SingleSlide {\n    ...SingleSlide_singleSlide\n  }\n  ... on HalfSlide {\n    ...HalfSlide_halfSlide\n  }\n}\n\nfragment TextBlock_block on TextBlock {\n  id\n  title\n  body\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3d1574b7d063c6744290c2d87c03ada0';
export default node;
