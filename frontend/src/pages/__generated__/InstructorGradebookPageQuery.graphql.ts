/* tslint:disable */
/* eslint-disable */
/* @relayHash edebc07ed16eb6f5f799d3b5e86ece79 */

import { ConcreteRequest } from "relay-runtime";
export type InstructorGradebookPageQueryVariables = {
    id: string;
};
export type InstructorGradebookPageQueryResponse = {
    readonly instructorGradeBookQuery: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly lessons: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
        readonly students: ReadonlyArray<{
            readonly firstName: string;
            readonly lastName: string;
            readonly grades: ReadonlyArray<{
                readonly lessonId: string;
                readonly courseId: string;
                readonly grade: number;
            }>;
        }>;
    }>;
};
export type InstructorGradebookPageQuery = {
    readonly response: InstructorGradebookPageQueryResponse;
    readonly variables: InstructorGradebookPageQueryVariables;
};



/*
query InstructorGradebookPageQuery(
  $id: ID!
) {
  instructorGradeBookQuery(id: $id) {
    id
    name
    lessons {
      id
      title
    }
    students {
      firstName
      lastName
      grades {
        lessonId
        courseId
        grade
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "instructorGradeBookQuery",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Course",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "students",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
        "plural": true,
        "selections": [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "grades",
            "storageKey": null,
            "args": null,
            "concreteType": "Grade",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lessonId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "courseId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "grade",
                "args": null,
                "storageKey": null
              }
            ]
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
    "name": "InstructorGradebookPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "InstructorGradebookPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "InstructorGradebookPageQuery",
    "id": null,
    "text": "query InstructorGradebookPageQuery(\n  $id: ID!\n) {\n  instructorGradeBookQuery(id: $id) {\n    id\n    name\n    lessons {\n      id\n      title\n    }\n    students {\n      firstName\n      lastName\n      grades {\n        lessonId\n        courseId\n        grade\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b24549e00cef4d1c7e54e9799ec4fcac';
export default node;
