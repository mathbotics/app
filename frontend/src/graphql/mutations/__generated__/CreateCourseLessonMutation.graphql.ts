/* tslint:disable */
/* eslint-disable */
/* @relayHash 520695f52cc73ae4b05d383738c1737f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type createCourseLessonInput = {
    courseId?: string | null;
    lessonId?: string | null;
};
export type CreateCourseLessonMutationVariables = {
    input: createCourseLessonInput;
};
export type CreateCourseLessonMutationResponse = {
    readonly createCourseLesson: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_course">;
    };
};
export type CreateCourseLessonMutation = {
    readonly response: CreateCourseLessonMutationResponse;
    readonly variables: CreateCourseLessonMutationVariables;
};



/*
mutation CreateCourseLessonMutation(
  $input: createCourseLessonInput!
) {
  createCourseLesson(input: $input) {
    id
    ...EditCourseLessonPlan_course
  }
}

fragment EditCourseLessonPlan_course on Course {
  id
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
  ...LessonPlanSidebar_course
  ...LessonPlanCatalogue_course
}

fragment LessonPlanCatalogue_course on Course {
  id
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

fragment LessonPlanSidebar_course on Course {
  id
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createCourseLessonInput!",
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
    "name": "CreateCourseLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCourseLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "EditCourseLessonPlan_course",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCourseLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCourseLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCourseLessonMutation",
    "id": null,
    "text": "mutation CreateCourseLessonMutation(\n  $input: createCourseLessonInput!\n) {\n  createCourseLesson(input: $input) {\n    id\n    ...EditCourseLessonPlan_course\n  }\n}\n\nfragment EditCourseLessonPlan_course on Course {\n  id\n  courses {\n    lesson {\n      id\n      title\n      slides {\n        __typename\n        id\n        title\n      }\n    }\n  }\n  ...LessonPlanSidebar_course\n  ...LessonPlanCatalogue_course\n}\n\nfragment LessonPlanCatalogue_course on Course {\n  id\n  courses {\n    lesson {\n      id\n      title\n      slides {\n        __typename\n        id\n        title\n      }\n    }\n  }\n}\n\nfragment LessonPlanSidebar_course on Course {\n  id\n  courses {\n    lesson {\n      id\n      title\n      slides {\n        __typename\n        id\n        title\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '048b889b469e8e19e27abaec7caa1d5f';
export default node;
