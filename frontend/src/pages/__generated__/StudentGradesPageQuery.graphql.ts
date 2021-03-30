/* tslint:disable */
/* eslint-disable */
/* @relayHash 5fc4baf09e0390ac60283df5201721cd */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGradesPageQueryVariables = {};
export type StudentGradesPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"StudentGrades_lessons" | "StudentGrades_grades">;
};
export type StudentGradesPageQuery = {
    readonly response: StudentGradesPageQueryResponse;
    readonly variables: StudentGradesPageQueryVariables;
};



/*
query StudentGradesPageQuery {
  ...StudentGrades_lessons
  ...StudentGrades_grades
}

fragment StudentGradesTable_grades on Query {
  grades {
    courseId
    lessonId
    studentId
    grade
  }
}

fragment StudentGradesTable_lessons on Query {
  lessons {
    id
    title
    slides {
      __typename
      id
    }
  }
}

fragment StudentGrades_grades on Query {
  ...StudentGradesTable_grades
}

fragment StudentGrades_lessons on Query {
  ...StudentGradesTable_lessons
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StudentGradesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "StudentGrades_lessons",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "StudentGrades_grades",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StudentGradesPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
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
              (v0/*: any*/)
            ]
          }
        ]
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
            "name": "courseId",
            "args": null,
            "storageKey": null
          },
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
            "name": "studentId",
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
  },
  "params": {
    "operationKind": "query",
    "name": "StudentGradesPageQuery",
    "id": null,
    "text": "query StudentGradesPageQuery {\n  ...StudentGrades_lessons\n  ...StudentGrades_grades\n}\n\nfragment StudentGradesTable_grades on Query {\n  grades {\n    courseId\n    lessonId\n    studentId\n    grade\n  }\n}\n\nfragment StudentGradesTable_lessons on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment StudentGrades_grades on Query {\n  ...StudentGradesTable_grades\n}\n\nfragment StudentGrades_lessons on Query {\n  ...StudentGradesTable_lessons\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ec4e2eda13b7456c8abf99b70882eab3';
export default node;
