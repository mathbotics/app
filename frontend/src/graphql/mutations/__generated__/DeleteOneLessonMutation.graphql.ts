/* tslint:disable */
/* eslint-disable */
/* @relayHash 7ae3f2c5dd435ae1ba35088b536608cd */

import { ConcreteRequest } from "relay-runtime";
export type DeleteLessonInput = {
    lessonId: string;
};
export type DeleteOneLessonMutationVariables = {
    input: DeleteLessonInput;
};
export type DeleteOneLessonMutationResponse = {
    readonly deleteLesson: {
        readonly id: string;
    };
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
    id
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
    "text": "mutation DeleteOneLessonMutation(\n  $input: DeleteLessonInput!\n) {\n  deleteLesson(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b3ecec8c7c586ba3f965605c8041a1a5';
export default node;
