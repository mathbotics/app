/* tslint:disable */
/* eslint-disable */
/* @relayHash fa08a08c6aef35e307f122167c0e2306 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseUpdateInput = {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    suggestedLevel?: GradeLevel | null;
};
export type UpdateOneCourseMutationVariables = {
    input: CourseUpdateInput;
};
export type UpdateOneCourseMutationResponse = {
    readonly updateOneCourse: {
        readonly course: {
            readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
        };
    } | null;
};
export type UpdateOneCourseMutation = {
    readonly response: UpdateOneCourseMutationResponse;
    readonly variables: UpdateOneCourseMutationVariables;
};



/*
mutation UpdateOneCourseMutation(
  $input: CourseUpdateInput!
) {
  updateOneCourse(input: $input) {
    course {
      ...EditCourse_course
    }
  }
}

fragment EditCourseDetails_course on Course {
  id
}

fragment EditCourseStudents_course on Course {
  id
  courseTo {
    student {
      username
      firstName
      lastName
      gradeLevel
      id
    }
  }
  ...StudentsTable_course
}

fragment EditCourse_course on Course {
  ...EditCourseStudents_course
  ...EditCourseDetails_course
  id
  name
  courses {
    lesson {
      id
      title
      slides {
        __typename
        id
        title
      }
    }
  }
}

fragment StudentsTable_course on Course {
  courseTo {
    student {
      username
      firstName
      lastName
      gradeLevel
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CourseUpdateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateOneCourseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCoursePayload",
        "plural": false,
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
                "kind": "FragmentSpread",
                "name": "EditCourse_course",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateOneCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCoursePayload",
        "plural": false,
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
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "courseTo",
                "storageKey": null,
                "args": null,
                "concreteType": "CourseToStudent",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "student",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Student",
                    "plural": false,
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
                      (v2/*: any*/)
                    ]
                  }
                ]
              },
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
                "name": "courses",
                "storageKey": null,
                "args": null,
                "concreteType": "CourseToLesson",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lesson",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Lesson",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
                      }
                    ]
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
    "operationKind": "mutation",
    "name": "UpdateOneCourseMutation",
    "id": null,
    "text": "mutation UpdateOneCourseMutation(\n  $input: CourseUpdateInput!\n) {\n  updateOneCourse(input: $input) {\n    course {\n      ...EditCourse_course\n    }\n  }\n}\n\nfragment EditCourseDetails_course on Course {\n  id\n}\n\nfragment EditCourseStudents_course on Course {\n  id\n  courseTo {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n      id\n    }\n  }\n  ...StudentsTable_course\n}\n\nfragment EditCourse_course on Course {\n  ...EditCourseStudents_course\n  ...EditCourseDetails_course\n  id\n  name\n  courses {\n    lesson {\n      id\n      title\n      slides {\n        __typename\n        id\n        title\n      }\n    }\n  }\n}\n\nfragment StudentsTable_course on Course {\n  courseTo {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c1af9c738508cdadc364fb6bf25fb31b';
export default node;
