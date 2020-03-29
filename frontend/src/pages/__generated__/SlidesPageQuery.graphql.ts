/* tslint:disable */
/* eslint-disable */
/* @relayHash ca0caa50bd5a0ee4383c306c4c704a4b */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonWhereUniqueInput = {
    id?: string | null;
};
export type SlidesPageQueryVariables = {
    where: LessonWhereUniqueInput;
};
export type SlidesPageQueryResponse = {
    readonly lesson: {
        readonly " $fragmentRefs": FragmentRefs<"Slides_lesson">;
    } | null;
};
export type SlidesPageQuery = {
    readonly response: SlidesPageQueryResponse;
    readonly variables: SlidesPageQueryVariables;
};



/*
query SlidesPageQuery(
  $where: LessonWhereUniqueInput!
) {
  lesson(where: $where) {
    ...Slides_lesson
  }
}

fragment HalfSlide_halfSlide on HalfSlide {
  id
}

fragment SingleSlide_singleSlide on SingleSlide {
  id
}

fragment Slide_slide on Slide {
  __typename
  title
  ... on SingleSlide {
    ...SingleSlide_singleSlide
  }
  ... on HalfSlide {
    ...HalfSlide_halfSlide
  }
}

fragment SlidesSidebar_lesson on Lesson {
  title
  slides {
    __typename
    id
    ...Slide_slide
  }
}

fragment Slides_lesson on Lesson {
  id
  title
  ...SlidesSidebar_lesson
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "LessonWhereUniqueInput!",
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
    "name": "SlidesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Slides_lesson",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SlidesPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lesson",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SlidesPageQuery",
    "id": null,
    "text": "query SlidesPageQuery(\n  $where: LessonWhereUniqueInput!\n) {\n  lesson(where: $where) {\n    ...Slides_lesson\n  }\n}\n\nfragment HalfSlide_halfSlide on HalfSlide {\n  id\n}\n\nfragment SingleSlide_singleSlide on SingleSlide {\n  id\n}\n\nfragment Slide_slide on Slide {\n  __typename\n  title\n  ... on SingleSlide {\n    ...SingleSlide_singleSlide\n  }\n  ... on HalfSlide {\n    ...HalfSlide_halfSlide\n  }\n}\n\nfragment SlidesSidebar_lesson on Lesson {\n  title\n  slides {\n    __typename\n    id\n    ...Slide_slide\n  }\n}\n\nfragment Slides_lesson on Lesson {\n  id\n  title\n  ...SlidesSidebar_lesson\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd582e3aa5e1a1c65cba9a4bc0d1eba53';
export default node;
