/* tslint:disable */
/* eslint-disable */
/* @relayHash 69ac52603425bba340d8cf64524572d1 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CourseWhereUniqueInput = {
    id?: string | null;
};
export type EditCoursePageQueryVariables = {
    where: CourseWhereUniqueInput;
};
export type EditCoursePageQueryResponse = {
    readonly course: {
        readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"EditCourse_query">;
};
export type EditCoursePageQuery = {
    readonly response: EditCoursePageQueryResponse;
    readonly variables: EditCoursePageQueryVariables;
};



/*
query EditCoursePageQuery(
  $where: CourseWhereUniqueInput!
) {
  course(where: $where) {
    ...EditCourse_course
  }
  ...EditCourse_query
}

fragment EditCourseDetails_course on Course {
  id
}

fragment EditCourseLessonPlan_courseLessons on CourseToLesson {
  courseId
  ...LessonPlanSidebar_courseLessons
  ...LessonPlanCatalogue_courseLessons
}

fragment EditCourseLessonPlan_query on Query {
  ...LessonPlanCatalogue_query
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
    ...EditCourseLessonPlan_courseLessons
  }
}

fragment EditCourse_query on Query {
  ...EditCourseLessonPlan_query
}

fragment LessonPlanCatalogue_courseLessons on CourseToLesson {
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

fragment LessonPlanCatalogue_query on Query {
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

fragment LessonPlanSidebar_courseLessons on CourseToLesson {
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
    "name": "where",
    "type": "CourseWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
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
},
v4 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditCoursePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "course",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditCourse_course",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "EditCourse_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditCoursePageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "course",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                "kind": "ScalarField",
                "alias": null,
                "name": "courseId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lesson",
                "storageKey": null,
                "args": null,
                "concreteType": "Lesson",
                "plural": false,
                "selections": (v4/*: any*/)
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
        "selections": (v4/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditCoursePageQuery",
    "id": null,
    "text": "query EditCoursePageQuery(\n  $where: CourseWhereUniqueInput!\n) {\n  course(where: $where) {\n    ...EditCourse_course\n  }\n  ...EditCourse_query\n}\n\nfragment EditCourseDetails_course on Course {\n  id\n}\n\nfragment EditCourseLessonPlan_courseLessons on CourseToLesson {\n  courseId\n  ...LessonPlanSidebar_courseLessons\n  ...LessonPlanCatalogue_courseLessons\n}\n\nfragment EditCourseLessonPlan_query on Query {\n  ...LessonPlanCatalogue_query\n}\n\nfragment EditCourseStudents_course on Course {\n  id\n  courseTo {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n      id\n    }\n  }\n  ...StudentsTable_course\n}\n\nfragment EditCourse_course on Course {\n  ...EditCourseStudents_course\n  ...EditCourseDetails_course\n  id\n  name\n  courses {\n    ...EditCourseLessonPlan_courseLessons\n  }\n}\n\nfragment EditCourse_query on Query {\n  ...EditCourseLessonPlan_query\n}\n\nfragment LessonPlanCatalogue_courseLessons on CourseToLesson {\n  lesson {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment LessonPlanCatalogue_query on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment LessonPlanSidebar_courseLessons on CourseToLesson {\n  lesson {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment StudentsTable_course on Course {\n  courseTo {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1e1d29eb34f7e9b458375123afb62ce7';
export default node;
