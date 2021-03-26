/* tslint:disable */
/* eslint-disable */
/* @relayHash 4d6a8a780d4a0c33c1b1be0baa8fc77b */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebookPageQueryVariables = {};
export type InstructorGradebookPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_course" | "InstructorGradebook_lessons">;
};
export type InstructorGradebookPageQuery = {
    readonly response: InstructorGradebookPageQueryResponse;
    readonly variables: InstructorGradebookPageQueryVariables;
};



/*
query InstructorGradebookPageQuery {
  ...InstructorGradebook_course
  ...InstructorGradebook_lessons
}

fragment InstructorGradebookTable_course on Query {
  students {
    username
    firstName
    lastName
    gradeLevel
    id
    grades {
      lessonId
      grade
    }
  }
}

fragment InstructorGradebookTable_lessons on Query {
  lessons {
    id
    title
    slides {
      __typename
      id
    }
  }
}

fragment InstructorGradebook_course on Query {
  ...InstructorGradebookTable_course
}

fragment InstructorGradebook_lessons on Query {
  ...InstructorGradebookTable_lessons
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
    "name": "InstructorGradebookPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "InstructorGradebook_course",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "InstructorGradebook_lessons",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InstructorGradebookPageQuery",
    "argumentDefinitions": [],
    "selections": [
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
            "name": "username",
            "args": null,
            "storageKey": null
          },
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
            "kind": "ScalarField",
            "alias": null,
            "name": "gradeLevel",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "InstructorGradebookPageQuery",
    "id": null,
    "text": "query InstructorGradebookPageQuery {\n  ...InstructorGradebook_course\n  ...InstructorGradebook_lessons\n}\n\nfragment InstructorGradebookTable_course on Query {\n  students {\n    username\n    firstName\n    lastName\n    gradeLevel\n    id\n    grades {\n      lessonId\n      grade\n    }\n  }\n}\n\nfragment InstructorGradebookTable_lessons on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment InstructorGradebook_course on Query {\n  ...InstructorGradebookTable_course\n}\n\nfragment InstructorGradebook_lessons on Query {\n  ...InstructorGradebookTable_lessons\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '44f244e6a374e0993bd36226f49e549a';
export default node;
