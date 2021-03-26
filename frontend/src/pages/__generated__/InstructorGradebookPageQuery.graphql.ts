/* tslint:disable */
/* eslint-disable */
/* @relayHash 389dfe6ad469b6034a3dc9b800a77abe */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebookPageQueryVariables = {};
export type InstructorGradebookPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_course" | "InstructorGradebook_lessons" | "InstructorGradebook_grades">;
};
export type InstructorGradebookPageQuery = {
    readonly response: InstructorGradebookPageQueryResponse;
    readonly variables: InstructorGradebookPageQueryVariables;
};



/*
query InstructorGradebookPageQuery {
  ...InstructorGradebook_course
  ...InstructorGradebook_lessons
  ...InstructorGradebook_grades
}

fragment InstructorGradebookTable_course on Query {
  students {
    username
    firstName
    lastName
    gradeLevel
    id
  }
}

fragment InstructorGradebookTable_grades on Query {
  grades {
    courseId
    lessonId
    grade
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

fragment InstructorGradebook_grades on Query {
  ...InstructorGradebookTable_grades
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
      },
      {
        "kind": "FragmentSpread",
        "name": "InstructorGradebook_grades",
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
          (v0/*: any*/)
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
    "name": "InstructorGradebookPageQuery",
    "id": null,
    "text": "query InstructorGradebookPageQuery {\n  ...InstructorGradebook_course\n  ...InstructorGradebook_lessons\n  ...InstructorGradebook_grades\n}\n\nfragment InstructorGradebookTable_course on Query {\n  students {\n    username\n    firstName\n    lastName\n    gradeLevel\n    id\n  }\n}\n\nfragment InstructorGradebookTable_grades on Query {\n  grades {\n    courseId\n    lessonId\n    grade\n  }\n}\n\nfragment InstructorGradebookTable_lessons on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment InstructorGradebook_course on Query {\n  ...InstructorGradebookTable_course\n}\n\nfragment InstructorGradebook_grades on Query {\n  ...InstructorGradebookTable_grades\n}\n\nfragment InstructorGradebook_lessons on Query {\n  ...InstructorGradebookTable_lessons\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2b3fe012daa89b2aad509c58d1b5a9d3';
export default node;
