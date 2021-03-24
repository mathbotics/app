/* tslint:disable */
/* eslint-disable */
/* @relayHash a4ca208426d7645d1b468974d7db751b */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateLessonInput = {
    title?: string | null;
};
export type CreateOneLessonMutationVariables = {
    input: CreateLessonInput;
};
export type CreateOneLessonMutationResponse = {
    readonly createOneLesson: {
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
        }>;
        readonly " $fragmentRefs": FragmentRefs<"LessonPreview_lesson">;
    };
};
export type CreateOneLessonMutation = {
    readonly response: CreateOneLessonMutationResponse;
    readonly variables: CreateOneLessonMutationVariables;
};



/*
mutation CreateOneLessonMutation(
  $input: CreateLessonInput!
) {
  createOneLesson(input: $input) {
    id
    title
    slides {
      __typename
      id
    }
    ...LessonPreview_lesson
  }
}

fragment LessonPreview_lesson on Lesson {
  id
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateLessonInput!",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOneLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "slides",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "LessonPreview_lesson",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOneLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "slides",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOneLessonMutation",
    "id": null,
    "text": "mutation CreateOneLessonMutation(\n  $input: CreateLessonInput!\n) {\n  createOneLesson(input: $input) {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n    ...LessonPreview_lesson\n  }\n}\n\nfragment LessonPreview_lesson on Lesson {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e4991885bb6d06ba20fd0790da1ceb20';
export default node;
