/* tslint:disable */
/* eslint-disable */
/* @relayHash 97f3d594e28750a48ae072c8a41e626c */

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
}

fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
  id
  lessons {
    id
  }
}

fragment EditCourse_course on Course {
  id
  name
  suggestedLevel
  lessonPlan {
    ...EditCourseLessonPlan_lessonPlan
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
                  (v2/*: any*/)
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
    "name": "EditCoursePageQuery",
    "id": null,
    "text": "query EditCoursePageQuery(\n  $where: CourseWhereUniqueInput!\n) {\n  course(where: $where) {\n    ...EditCourse_course\n  }\n}\n\nfragment EditCourseLessonPlan_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n}\n\nfragment EditCourse_course on Course {\n  id\n  name\n  suggestedLevel\n  lessonPlan {\n    ...EditCourseLessonPlan_lessonPlan\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b62dc3fc9b8121337aa30bbb847ef873';
export default node;
