/* tslint:disable */
/* eslint-disable */
/* @relayHash dc53c555accc6fcebdb3791be81289cf */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type createCourseInput = {
    name?: string | null;
    description?: string | null;
    suggestedLevel?: GradeLevel | null;
    instructorId?: string | null;
};
export type CreateOneCourseMutationVariables = {
    input: createCourseInput;
};
export type CreateOneCourseMutationResponse = {
    readonly createOneCourse: {
        readonly " $fragmentRefs": FragmentRefs<"CourseCard_course">;
    };
};
export type CreateOneCourseMutation = {
    readonly response: CreateOneCourseMutationResponse;
    readonly variables: CreateOneCourseMutationVariables;
};



/*
mutation CreateOneCourseMutation(
  $input: createCourseInput!
) {
  createOneCourse(input: $input) {
    ...CourseCard_course
  }
}

fragment CourseCard_course on Course {
  id
  name
  suggestedLevel
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createCourseInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOneCourseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CourseCard_course",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOneCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "suggestedLevel",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOneCourseMutation",
    "id": null,
    "text": "mutation CreateOneCourseMutation(\n  $input: createCourseInput!\n) {\n  createOneCourse(input: $input) {\n    ...CourseCard_course\n  }\n}\n\nfragment CourseCard_course on Course {\n  id\n  name\n  suggestedLevel\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3fcabce3c8de3fc2db275ae055d7d93a';
export default node;
