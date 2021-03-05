/* tslint:disable */
/* eslint-disable */
/* @relayHash 394e70ab043650f60470142a2b4d8367 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type createCourseInput = {
    name?: string | null;
    description?: string | null;
    suggestedLevel?: GradeLevel | null;
};
export type CreateOneCourseMutationVariables = {
    input: createCourseInput;
};
export type CreateOneCourseMutationResponse = {
    readonly createOneCourse: {
        readonly course: {
            readonly " $fragmentRefs": FragmentRefs<"CourseCard_course">;
        };
    } | null;
};
export type CreateOneCourseMutation = {
    readonly response: CreateOneCourseMutationResponse;
    readonly variables: CreateOneCourseMutationVariables;
};



/*
mutation CreateOneCourseMutation(
  $input: createCourseInput!
) {
  createOneCourse(input: $input) {
    course {
      ...CourseCard_course
    }
  }
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createCourseInput!",
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
    "name": "CreateOneCourseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCoursePayload",
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
                "name": "CourseCard_course",
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
    "name": "CreateOneCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCoursePayload",
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
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOneCourseMutation",
    "id": null,
    "text": "mutation CreateOneCourseMutation(\n  $input: createCourseInput!\n) {\n  createOneCourse(input: $input) {\n    course {\n      ...CourseCard_course\n    }\n  }\n}\n\nfragment CourseCard_course on Course {\n  id\n  name\n  suggestedLevel\n  instructors {\n    id\n    firstName\n    lastName\n    username\n  }\n  lessonPlan {\n    lessons {\n      title\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '668410f53c4dbc4b79f5e0c052f6fb17';
export default node;
