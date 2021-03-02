/* tslint:disable */
/* eslint-disable */
/* @relayHash f1623f671034a4edf6669e018c5a2bfb */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseUpdateInput = {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    suggestedLevel?: GradeLevel | null;
    lessonPlanId?: string | null;
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

fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
  id
  lessons {
    id
  }
  ...LessonPlanSidebar_lessonPlan
  ...LessonPlanCatalogue_lessonPlan
}

fragment EditCourseStudents_course on Course {
  id
  students {
    username
    firstName
    lastName
    gradeLevel
    id
  }
  ...StudentsTable_course
}

fragment EditCourse_course on Course {
  ...EditCourseStudents_course
  ...EditCourseDetails_course
  id
  name
  lessonPlan {
    ...EditCourseLessonPlan_lessonPlan
    ...LessonPlanCatalogue_lessonPlan
  }
}

fragment LessonPlanCatalogue_lessonPlan on LessonPlan {
  id
  lessons {
    id
  }
}

fragment LessonPlanSidebar_lessonPlan on LessonPlan {
  id
  lessons {
    id
    title
    slides {
      __typename
      id
    }
  }
}

fragment StudentsTable_course on Course {
  students {
    username
    firstName
    lastName
    gradeLevel
    id
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
                  (v2/*: any*/)
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
                "name": "lessonPlan",
                "storageKey": null,
                "args": null,
                "concreteType": "LessonPlan",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
                          (v2/*: any*/)
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
    "text": "mutation UpdateOneCourseMutation(\n  $input: CourseUpdateInput!\n) {\n  updateOneCourse(input: $input) {\n    course {\n      ...EditCourse_course\n    }\n  }\n}\n\nfragment EditCourseDetails_course on Course {\n  id\n}\n\nfragment EditCourseLessonPlan_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n  ...LessonPlanSidebar_lessonPlan\n  ...LessonPlanCatalogue_lessonPlan\n}\n\nfragment EditCourseStudents_course on Course {\n  id\n  students {\n    username\n    firstName\n    lastName\n    gradeLevel\n    id\n  }\n  ...StudentsTable_course\n}\n\nfragment EditCourse_course on Course {\n  ...EditCourseStudents_course\n  ...EditCourseDetails_course\n  id\n  name\n  lessonPlan {\n    ...EditCourseLessonPlan_lessonPlan\n    ...LessonPlanCatalogue_lessonPlan\n  }\n}\n\nfragment LessonPlanCatalogue_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n}\n\nfragment LessonPlanSidebar_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment StudentsTable_course on Course {\n  students {\n    username\n    firstName\n    lastName\n    gradeLevel\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c1af9c738508cdadc364fb6bf25fb31b';
export default node;
