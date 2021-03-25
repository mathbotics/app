/* tslint:disable */
/* eslint-disable */
/* @relayHash 2b7d5c1d04010a278438e66809869d3b */

import { ConcreteRequest } from "relay-runtime";
export type createCourseLessonInput = {
    courseId?: string | null;
    lessonId?: string | null;
};
export type CreateCourseLessonMutationVariables = {
    input: createCourseLessonInput;
};
export type CreateCourseLessonMutationResponse = {
    readonly createCourseLesson: {
        readonly id: string;
    };
};
export type CreateCourseLessonMutation = {
    readonly response: CreateCourseLessonMutationResponse;
    readonly variables: CreateCourseLessonMutationVariables;
};



/*
mutation CreateCourseLessonMutation(
  $input: createCourseLessonInput!
) {
  createCourseLesson(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createCourseLessonInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCourseLesson",
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
    "name": "CreateCourseLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCourseLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCourseLessonMutation",
    "id": null,
    "text": "mutation CreateCourseLessonMutation(\n  $input: createCourseLessonInput!\n) {\n  createCourseLesson(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '272abdd243fa488f6be47f9556e4b978';
export default node;
