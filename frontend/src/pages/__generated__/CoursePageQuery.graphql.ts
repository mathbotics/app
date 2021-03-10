/* tslint:disable */
/* eslint-disable */
/* @relayHash 7750fb7280f6fe7b20ffecda978318c5 */

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
];
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CoursePageQuery",
    "id": null,
    "text": "query CoursePageQuery(\n  $where: CourseWhereUniqueInput!\n) {\n  course(where: $where) {\n    ...Course_course\n  }\n}\n\nfragment Course_course on Course {\n  id\n  name\n  description\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9e316199bacbaf9d5e0dad3585797d10';
export default node;
