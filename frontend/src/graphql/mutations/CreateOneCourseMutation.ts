import { commitMutation, DataID } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { createCourseInput } from './__generated__/CreateOneCourseMutation.graphql';

const mutation = graphql`
  mutation CreateOneCourseMutation($input: createCourseInput!) {
    createOneCourse(input: $input) {
      ...CourseCard_course
    }
  }
`;

function commit(
  input: createCourseInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
  rootDataID?: DataID,
) {
  const variables = {
    input: input,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
    updater(store) {
      console.log(rootDataID)
      if (rootDataID) {
        const course = store.getRootField('createOneCourse');
        console.log(course)
        const query = store.get(rootDataID);
        const courses = query?.getLinkedRecords('courses') ?? [];
        console.log(courses)
        query?.setLinkedRecords([...courses, course], 'courses');
      }
    },
  });
}

export { commit };
