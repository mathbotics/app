import { commitMutation, DataID } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { CreateSlideMutationVariables } from './__generated__/CreateSlideMutation.graphql';

const mutation = graphql`
  mutation CreateSlideMutation($input: CreateSlideInput!) {
    createSlide(input: $input) {
      ...Slide_slide
    }
  }
`;

export const commit = (
  variables: CreateSlideMutationVariables,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
  lessonDataID?: DataID,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
    updater(store) {
      if (lessonDataID) {
        const slide = store.getRootField('createSlide');
        const lesson = store.get(lessonDataID);
        const slides = lesson?.getLinkedRecords('slides') ?? [];
        lesson?.setLinkedRecords([...slides, slide], 'slides');
      }
    },
  });
