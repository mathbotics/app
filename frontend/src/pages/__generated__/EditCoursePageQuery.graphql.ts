/* tslint:disable */
/* eslint-disable */
/* @relayHash bf2669dbfb2913eebbc865b5657fa2a6 */

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
    readonly student: {
        readonly " $fragmentRefs": FragmentRefs<"EditCourse_student">;
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
  student(where: {id: "ckgljwsjw00044jqp7t4g7q4l"}) {
    ...EditCourse_student
  }
  ...EditCourse_query
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

fragment EditCourseLessonPlan_query on Query {
  ...LessonPlanCatalogue_query
}

fragment EditCourseStudents_course on Course {
  id
  ...StudentsTable_course
}

fragment EditCourseStudents_student on Student {
  id
  ...StudentsTable_student
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

fragment EditCourse_query on Query {
  ...EditCourseLessonPlan_query
}

fragment EditCourse_student on Student {
  ...EditCourseStudents_student
  id
  username
  firstName
  lastName
  gradeLevel
}

fragment LessonPlanCatalogue_lessonPlan on LessonPlan {
  id
  lessons {
    id
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

fragment StudentsTable_student on Student {
  username
  firstName
  lastName
  gradeLevel
  id
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
v2 = [
  {
    "kind": "Literal",
    "name": "where",
    "value": {
      "id": "ckgljwsjw00044jqp7t4g7q4l"
    }
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gradeLevel",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
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
        "kind": "LinkedField",
        "alias": null,
        "name": "student",
        "storageKey": "student(where:{\"id\":\"ckgljwsjw00044jqp7t4g7q4l\"})",
        "args": (v2/*: any*/),
        "concreteType": "Student",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditCourse_student",
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
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "students",
            "storageKey": null,
            "args": null,
            "concreteType": "Student",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v3/*: any*/)
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
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lessons",
                "storageKey": null,
                "args": null,
                "concreteType": "Lesson",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "slides",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": true,
                    "selections": [
                      (v9/*: any*/),
                      (v3/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "student",
        "storageKey": "student(where:{\"id\":\"ckgljwsjw00044jqp7t4g7q4l\"})",
        "args": (v2/*: any*/),
        "concreteType": "Student",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
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
          (v3/*: any*/),
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "slides",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v9/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditCoursePageQuery",
    "id": null,
    "text": "query EditCoursePageQuery(\n  $where: CourseWhereUniqueInput!\n) {\n  course(where: $where) {\n    ...EditCourse_course\n  }\n  student(where: {id: \"ckgljwsjw00044jqp7t4g7q4l\"}) {\n    ...EditCourse_student\n  }\n  ...EditCourse_query\n}\n\nfragment EditCourseDetails_course on Course {\n  id\n}\n\nfragment EditCourseLessonPlan_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n  ...LessonPlanSidebar_lessonPlan\n  ...LessonPlanCatalogue_lessonPlan\n}\n\nfragment EditCourseLessonPlan_query on Query {\n  ...LessonPlanCatalogue_query\n}\n\nfragment EditCourseStudents_course on Course {\n  id\n  ...StudentsTable_course\n}\n\nfragment EditCourseStudents_student on Student {\n  id\n  ...StudentsTable_student\n}\n\nfragment EditCourse_course on Course {\n  ...EditCourseStudents_course\n  ...EditCourseDetails_course\n  id\n  name\n  lessonPlan {\n    ...EditCourseLessonPlan_lessonPlan\n    ...LessonPlanCatalogue_lessonPlan\n  }\n}\n\nfragment EditCourse_query on Query {\n  ...EditCourseLessonPlan_query\n}\n\nfragment EditCourse_student on Student {\n  ...EditCourseStudents_student\n  id\n  username\n  firstName\n  lastName\n  gradeLevel\n}\n\nfragment LessonPlanCatalogue_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n}\n\nfragment LessonPlanCatalogue_query on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment LessonPlanSidebar_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment StudentsTable_course on Course {\n  students {\n    username\n    firstName\n    lastName\n    gradeLevel\n    id\n  }\n}\n\nfragment StudentsTable_student on Student {\n  username\n  firstName\n  lastName\n  gradeLevel\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c59102b22b4107f0cca756c3ed46af88';
export default node;
