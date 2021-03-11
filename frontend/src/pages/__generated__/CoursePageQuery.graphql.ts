/* tslint:disable */
/* eslint-disable */
/* @relayHash dbc63e34c70508ab293b533b373fc11c */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CourseWhereUniqueInput = {
    id?: string | null;
};
export type CoursePageQueryVariables = {
    where: CourseWhereUniqueInput;
};
export type CoursePageQueryResponse = {
    readonly course: {
        readonly " $fragmentRefs": FragmentRefs<"Course_course">;
    } | null;
};
export type CoursePageQuery = {
    readonly response: CoursePageQueryResponse;
    readonly variables: CoursePageQueryVariables;
};



/*
query CoursePageQuery(
  $where: CourseWhereUniqueInput!
) {
  course(where: $where) {
    ...Course_course
  }
}

fragment Course_course on Course {
  id
  name
  description
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CoursePageQuery",
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
            "name": "Course_course",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CoursePageQuery",
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
            "name": "description",
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
  },
  "params": {
    "operationKind": "query",
    "name": "CoursePageQuery",
    "id": null,
    "text": "query CoursePageQuery(\n  $where: CourseWhereUniqueInput!\n) {\n  course(where: $where) {\n    ...Course_course\n  }\n}\n\nfragment Course_course on Course {\n  id\n  name\n  description\n  courses {\n    lesson {\n      id\n      title\n      slides {\n        __typename\n        id\n        title\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9e316199bacbaf9d5e0dad3585797d10';
export default node;
