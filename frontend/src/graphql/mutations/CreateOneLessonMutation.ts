import { commitMutation, DataID } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { CreateOneLessonMutationVariables } from "./__generated__/CreateOneLessonMutation.graphql";

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
  onFailure: (error: Error) => void,
  rootDataID?: DataID
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
    updater(store) {
      if (rootDataID) {
        const lesson = store.getRootField("createOneLesson");
        const query = store.get(rootDataID);
        const lessons = query?.getLinkedRecords("lessons") ?? [];
        query?.setLinkedRecords([...lessons, lesson], "lessons");
      }
    }
  });
