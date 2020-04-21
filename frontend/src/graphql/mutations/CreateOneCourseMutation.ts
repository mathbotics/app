import { commitMutation, DataID } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { CourseCreateInput } from "./__generated__/CreateOneCourseMutation.graphql";

const mutation = graphql`
  mutation CreateOneCourseMutation($data: CourseCreateInput!) {
    createOneCourse(data: $data) {
      ...CourseCard_course
    }
  }
`;

function commit(
  input: CourseCreateInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
  rootDataID?: DataID
) {
  const variables = {
    data: input,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
    updater(store) {
      if (rootDataID) {
        const course = store.getRootField("createOneCourse");
        const query = store.get(rootDataID);
        const courses = query?.getLinkedRecords("courses") ?? [];
        query?.setLinkedRecords([...courses, course], "courses");
      }
    },
  });
}

export { commit };
