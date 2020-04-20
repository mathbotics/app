/* tslint:disable */
/* eslint-disable */
/* @relayHash 64f4ba44d423b1eaec947ed109636b1d */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesPageQueryVariables = {};
export type CoursesPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Courses_courses">;
};
export type CoursesPageQuery = {
    readonly response: CoursesPageQueryResponse;
    readonly variables: CoursesPageQueryVariables;
};



/*
query CoursesPageQuery {
  ...Courses_courses
}

fragment CoursesList_courses on Query {
  courses {
    id
    name
    suggestedLevel
    instructors {
      id
    }
    lessonPlan {
      lessons {
        title
      }
    }
  }
}

fragment Courses_courses on Query {
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
        "name": "Courses_courses",
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
              (v0/*: any*/)
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
    "text": "query CoursesPageQuery {\n  ...Courses_courses\n}\n\nfragment CoursesList_courses on Query {\n  courses {\n    id\n    name\n    suggestedLevel\n    instructors {\n      id\n    }\n    lessonPlan {\n      lessons {\n        title\n      }\n    }\n  }\n}\n\nfragment Courses_courses on Query {\n  ...CoursesList_courses\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '70b543208a0c175a505548b2cf1b5ef2';
export default node;
