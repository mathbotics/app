/* tslint:disable */
/* eslint-disable */
/* @relayHash 5fc4bb0ad32d7bbdac1fb5e7bc0ccc20 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCourseInput = {
    courseId?: string | null;
};
export type DeleteCourseMutationVariables = {
    input: DeleteCourseInput;
};
export type DeleteCourseMutationResponse = {
    readonly deleteCourse: {
        readonly course: {
            readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
        };
    } | null;
};
export type DeleteCourseMutation = {
    readonly response: DeleteCourseMutationResponse;
    readonly variables: DeleteCourseMutationVariables;
};



/*
mutation DeleteCourseMutation(
  $input: DeleteCourseInput!
) {
  deleteCourse(input: $input) {
    course {
      ...EditCourse_course
    }
  }
}

fragment EditCourseDetails_course on Course {
  id
}

fragment EditCourseLessonPlan_course on Course {
  id
  lessons {
    id
    title
    slides {
      __typename
      id
      title
    }
  }
  ...LessonPlanSidebar_course
  ...LessonPlanCatalogue_course
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
  ...EditCourseLessonPlan_course
  ...LessonPlanCatalogue_course
}

fragment LessonPlanCatalogue_course on Course {
  id
  lessons {
    id
    title
    slides {
      __typename
      id
      title
    }
  }
}

fragment LessonPlanSidebar_course on Course {
  id
  lessons {
    id
    title
    slides {
      __typename
      id
      title
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
    "type": "DeleteCourseInput!",
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
    "name": "DeleteCourseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCoursePayload",
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
    "name": "DeleteCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCoursePayload",
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
                "name": "lessons",
                "storageKey": null,
                "args": null,
                "concreteType": "Lesson",
                "plural": true,
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCourseMutation",
    "id": null,
    "text": "mutation DeleteCourseMutation(\n  $input: DeleteCourseInput!\n) {\n  deleteCourse(input: $input) {\n    course {\n      ...EditCourse_course\n    }\n  }\n}\n\nfragment EditCourseDetails_course on Course {\n  id\n}\n\nfragment EditCourseLessonPlan_course on Course {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n  ...LessonPlanSidebar_course\n  ...LessonPlanCatalogue_course\n}\n\nfragment EditCourseStudents_course on Course {\n  id\n  courseTo {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n      id\n    }\n  }\n  ...StudentsTable_course\n}\n\nfragment EditCourse_course on Course {\n  ...EditCourseStudents_course\n  ...EditCourseDetails_course\n  id\n  name\n  ...EditCourseLessonPlan_course\n  ...LessonPlanCatalogue_course\n}\n\nfragment LessonPlanCatalogue_course on Course {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment LessonPlanSidebar_course on Course {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment StudentsTable_course on Course {\n  courseTo {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b682b32d597d6cc4d40478e1955b1977';
export default node;
