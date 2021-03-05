/* tslint:disable */
/* eslint-disable */
/* @relayHash 46cee594937125f44eae97e5d6a30bda */

import { ConcreteRequest } from "relay-runtime";
export type DeleteLessonInput = {
    id?: string | null;
};
export type DeleteOneLessonMutationVariables = {
    input: DeleteLessonInput;
};
export type DeleteOneLessonMutationResponse = {
    readonly deleteLesson: {
        readonly lesson: {
            readonly id: string;
        };
    } | null;
};
export type DeleteOneLessonMutation = {
    readonly response: DeleteOneLessonMutationResponse;
    readonly variables: DeleteOneLessonMutationVariables;
};



/*
mutation DeleteOneLessonMutation(
  $input: DeleteLessonInput!
) {
  deleteLesson(input: $input) {
    lesson {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteLessonInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteLesson",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteLessonPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lesson",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteOneLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteOneLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteOneLessonMutation",
    "id": null,
    "text": "mutation DeleteOneLessonMutation(\n  $input: DeleteLessonInput!\n) {\n  deleteLesson(input: $input) {\n    lesson {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f279ece77eb7673ea477c091222c24cf';
export default node;
