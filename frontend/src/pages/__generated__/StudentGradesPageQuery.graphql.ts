/* tslint:disable */
/* eslint-disable */
/* @relayHash e107b35ad7c702cfb509cf2ca2b1132a */

import { ConcreteRequest } from "relay-runtime";
export type StudentGradesPageQueryVariables = {
    id: string;
};
export type StudentGradesPageQueryResponse = {
    readonly studentGradesQuery: ReadonlyArray<{
        readonly course: {
            readonly name: string;
            readonly lessons: ReadonlyArray<{
                readonly id: string;
                readonly title: string;
            }>;
        } | null;
        readonly student: {
            readonly id: string;
            readonly grades: ReadonlyArray<{
                readonly lessonId: string;
                readonly grade: number;
            }>;
        } | null;
    } | null> | null;
};
export type StudentGradesPageQuery = {
    readonly response: StudentGradesPageQueryResponse;
    readonly variables: StudentGradesPageQueryVariables;
};



/*
query StudentGradesPageQuery(
  $id: ID!
) {
  studentGradesQuery(id: $id) {
    course {
      name
      lessons {
        id
        title
      }
    }
    student {
      id
      grades {
        lessonId
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
    "name": "studentGradesQuery",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "CourseToStudent",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "course",
        "storageKey": null,
        "args": null,
        "concreteType": "Course",
        "plural": false,
        "selections": [
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
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "student",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
    "name": "StudentGradesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "StudentGradesPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "StudentGradesPageQuery",
    "id": null,
    "text": "query StudentGradesPageQuery(\n  $id: ID!\n) {\n  studentGradesQuery(id: $id) {\n    course {\n      name\n      lessons {\n        id\n        title\n      }\n    }\n    student {\n      id\n      grades {\n        lessonId\n        grade\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'abd3742835c899906c03251f12d0b91a';
export default node;
