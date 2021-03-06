/* tslint:disable */
/* eslint-disable */
/* @relayHash 2b1dc15b90c76707c3b5ce2f633bf8a7 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesPageQueryVariables = {};
export type CoursesPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Courses_query">;
};
export type CoursesPageQuery = {
    readonly response: CoursesPageQueryResponse;
    readonly variables: CoursesPageQueryVariables;
};



/*
query CoursesPageQuery {
  ...Courses_query
}

fragment CourseCard_course on Course {
  id
  name
  suggestedLevel
  instructors {
    id
    firstName
    lastName
    username
  }
  lessonPlan {
    lessons {
      title
    }
  }
}

fragment CoursesList_courses on Query {
  courses {
    id
    ...CourseCard_course
  }
}

fragment Courses_query on Query {
  ...CoursesList_courses
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
    "name": "CoursesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Courses_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CoursesPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "courses",
        "storageKey": null,
        "args": null,
        "concreteType": "Course",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "instructors",
            "storageKey": null,
            "args": null,
            "concreteType": "Instructor",
            "plural": true,
            "selections": [
              (v0/*: any*/),
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
                "name": "username",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lessonPlan",
            "storageKey": null,
            "args": null,
            "concreteType": "LessonPlan",
            "plural": false,
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CoursesPageQuery",
    "id": null,
    "text": "query CoursesPageQuery {\n  ...Courses_query\n}\n\nfragment CourseCard_course on Course {\n  id\n  name\n  suggestedLevel\n  instructors {\n    id\n    firstName\n    lastName\n    username\n  }\n  lessonPlan {\n    lessons {\n      title\n    }\n  }\n}\n\nfragment CoursesList_courses on Query {\n  courses {\n    id\n    ...CourseCard_course\n  }\n}\n\nfragment Courses_query on Query {\n  ...CoursesList_courses\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'cd964d2016d3622a6981d3b4f3e70d27';
export default node;
