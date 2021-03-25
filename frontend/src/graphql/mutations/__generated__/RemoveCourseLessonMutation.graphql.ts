/* tslint:disable */
/* eslint-disable */
/* @relayHash 2ce9a013d2887806bf20b08845a45791 */

import { ConcreteRequest } from "relay-runtime";
export type removeCourseLessonInput = {
    courseId?: string | null;
    lessonId?: string | null;
};
export type RemoveCourseLessonMutationVariables = {
    input: removeCourseLessonInput;
};
export type RemoveCourseLessonMutationResponse = {
    readonly removeCourseLesson: {
        readonly id: string;
    };
};
export type RemoveCourseLessonMutation = {
    readonly response: RemoveCourseLessonMutationResponse;
    readonly variables: RemoveCourseLessonMutationVariables;
};



/*
mutation RemoveCourseLessonMutation(
  $input: removeCourseLessonInput!
) {
  removeCourseLesson(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "removeCourseLessonInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeCourseLesson",
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
    "name": "RemoveCourseLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveCourseLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveCourseLessonMutation",
    "id": null,
    "text": "mutation RemoveCourseLessonMutation(\n  $input: removeCourseLessonInput!\n) {\n  removeCourseLesson(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '319a86fcc76bdb792cc20de8b70c1d37';
export default node;
