import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import {
  LessonCreateInput,
  CreateOneLessonMutationVariables
} from "./__generated__/CreateOneLessonMutation.graphql";
import { update } from "relay-runtime/lib/handlers/connection/ConnectionHandler";

const mutation = graphql`
  mutation CreateOneLessonMutation($data: LessonCreateInput!) {
    createOneLesson(data: $data) {
      id
      ...LessonPreview_lesson
    }
  }
`;

export const commit = (
  variables: CreateOneLessonMutationVariables,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void
) => {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure
  });
};
