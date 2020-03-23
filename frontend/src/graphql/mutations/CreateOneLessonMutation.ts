import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import {
  LessonCreateInput,
  CreateOneLessonMutationVariables
} from "./__generated__/CreateOneLessonMutation.graphql";

const mutation = graphql`
  mutation CreateOneLessonMutation($data: LessonCreateInput!) {
    createOneLesson(data: $data) {
      id
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
