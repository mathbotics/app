/* tslint:disable */
/* eslint-disable */
/* @relayHash 6e0d958e293ff469576fbb53e5a6bd47 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonWhereUniqueInput = {
    id?: string | null;
};
export type LessonPageQueryVariables = {
    where: LessonWhereUniqueInput;
};
export type LessonPageQueryResponse = {
    readonly lesson: {
        readonly " $fragmentRefs": FragmentRefs<"Lesson_lesson">;
    } | null;
};
export type LessonPageQuery = {
    readonly response: LessonPageQueryResponse;
    readonly variables: LessonPageQueryVariables;
};



/*
query LessonPageQuery(
  $where: LessonWhereUniqueInput!
) {
  lesson(where: $where) {
    ...Lesson_lesson
  }
}

fragment Block_block on Block {
  __typename
  ... on MultipleChoiceQuestionBlock {
    id
    ...MultipleChoiceQuestionBlock_block
  }
  ... on TextBlock {
    id
    ...TextBlock_block
  }
  ... on EmptyBlock {
    id
  }
}

fragment EditBlockSidebar_block on Block {
  __typename
  ... on MultipleChoiceQuestionBlock {
    id
    ...EditMultipleChoiceQuestionBlockForm_block
  }
  ... on TextBlock {
    id
    ...EditTextBlockForm_block
  }
  ... on EmptyBlock {
    id
  }
}

fragment EditMultipleChoiceQuestionBlockForm_block on MultipleChoiceQuestionBlock {
  text
  choices {
    id
    text
    correct
  }
}

fragment EditTextBlockForm_block on TextBlock {
  title
  body
}

fragment EditorSlidePreview_slide on Slide {
  ...Slide_slide
}

fragment Lesson_lesson on Lesson {
  id
  title
  ...SlidesSidebar_lesson
  slides {
    __typename
    id
    ...EditorSlidePreview_slide
  }
}

fragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {
  choices {
    id
    text
    correct
  }
}

fragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {
  __typename
  text
  ...MultipleChoiceGroup_block
}

fragment SingleSlide_singleSlide on SingleSlide {
  id
  block {
    __typename
    ...EditBlockSidebar_block
    ...Block_block
  }
}

fragment Slide_slide on Slide {
  __typename
  title
  ... on SingleSlide {
    ...SingleSlide_singleSlide
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

fragment TextBlock_block on TextBlock {
  id
  title
  body
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
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LessonPageQuery",
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
            "name": "Lesson_lesson",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LessonPageQuery",
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
              (v4/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "SingleSlide",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "block",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "type": "MultipleChoiceQuestionBlock",
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "choices",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "MultipleChoiceQuestionChoice",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "correct",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "InlineFragment",
                        "type": "TextBlock",
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "body",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "InlineFragment",
                        "type": "EmptyBlock",
                        "selections": [
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
    "operationKind": "query",
    "name": "LessonPageQuery",
    "id": null,
    "text": "query LessonPageQuery(\n  $where: LessonWhereUniqueInput!\n) {\n  lesson(where: $where) {\n    ...Lesson_lesson\n  }\n}\n\nfragment Block_block on Block {\n  __typename\n  ... on MultipleChoiceQuestionBlock {\n    id\n    ...MultipleChoiceQuestionBlock_block\n  }\n  ... on TextBlock {\n    id\n    ...TextBlock_block\n  }\n  ... on EmptyBlock {\n    id\n  }\n}\n\nfragment EditBlockSidebar_block on Block {\n  __typename\n  ... on MultipleChoiceQuestionBlock {\n    id\n    ...EditMultipleChoiceQuestionBlockForm_block\n  }\n  ... on TextBlock {\n    id\n    ...EditTextBlockForm_block\n  }\n  ... on EmptyBlock {\n    id\n  }\n}\n\nfragment EditMultipleChoiceQuestionBlockForm_block on MultipleChoiceQuestionBlock {\n  text\n  choices {\n    id\n    text\n    correct\n  }\n}\n\nfragment EditTextBlockForm_block on TextBlock {\n  title\n  body\n}\n\nfragment EditorSlidePreview_slide on Slide {\n  ...Slide_slide\n}\n\nfragment Lesson_lesson on Lesson {\n  id\n  title\n  ...SlidesSidebar_lesson\n  slides {\n    __typename\n    id\n    ...EditorSlidePreview_slide\n  }\n}\n\nfragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {\n  choices {\n    id\n    text\n    correct\n  }\n}\n\nfragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {\n  __typename\n  text\n  ...MultipleChoiceGroup_block\n}\n\nfragment SingleSlide_singleSlide on SingleSlide {\n  id\n  block {\n    __typename\n    ...EditBlockSidebar_block\n    ...Block_block\n  }\n}\n\nfragment Slide_slide on Slide {\n  __typename\n  title\n  ... on SingleSlide {\n    ...SingleSlide_singleSlide\n  }\n}\n\nfragment SlidesSidebar_lesson on Lesson {\n  title\n  slides {\n    __typename\n    id\n    ...Slide_slide\n  }\n}\n\nfragment TextBlock_block on TextBlock {\n  id\n  title\n  body\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'eea2b9e79ebd6252379b1e968db931c8';
export default node;
