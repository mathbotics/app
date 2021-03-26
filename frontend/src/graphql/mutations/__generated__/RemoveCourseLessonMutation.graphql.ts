/* tslint:disable */
/* eslint-disable */
/* @relayHash fdd21c671ec49a13f50061a27e5ab3c3 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type removeCourseLessonInput = {
    courseId?: string | null;
    lessonId?: string | null;
};
export type RemoveCourseLessonMutationVariables = {
    input: removeCourseLessonInput;
};
export type RemoveCourseLessonMutationResponse = {
    readonly removeCourseLesson: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_course">;
    };
};
export type RemoveCourseLessonMutation = {
    readonly response: RemoveCourseLessonMutationResponse;
    readonly variables: RemoveCourseLessonMutationVariables;
};



/*
mutation RemoveCourseLessonMutation(
  $input: removeCourseLessonInput!
) {
  removeCourseLesson(input: $input) {
    id
    ...EditCourseLessonPlan_course
  }
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "removeCourseLessonInput!",
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
    "name": "RemoveCourseLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeCourseLesson",
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
    "name": "RemoveCourseLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeCourseLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveCourseLessonMutation",
    "id": null,
    "text": "mutation RemoveCourseLessonMutation(\n  $input: removeCourseLessonInput!\n) {\n  removeCourseLesson(input: $input) {\n    id\n    ...EditCourseLessonPlan_course\n  }\n}\n\nfragment EditCourseLessonPlan_course on Course {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n  ...LessonPlanSidebar_course\n  ...LessonPlanCatalogue_course\n}\n\nfragment LessonPlanCatalogue_course on Course {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n\nfragment LessonPlanSidebar_course on Course {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n      title\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c9258b9f73a4d2767e154e1ec3eeaffe';
export default node;
