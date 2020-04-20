import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";

const mutation = graphql`
  mutation UpdateOneCourseMutation(
    $data: CourseUpdateInput!
    $where: CourseWhereUniqueInput!
  ) {
    updateOneCourse(data: $data, where: $where) {
      id
    }
  }
`;

export const commit = (
  //   input: CourseUpdateInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void
) => {
  //   const variables = { data: input, where: { id } };
  //   commitMutation(environment, {
  //     mutation,
  //     variables,
  //     onCompleted: onSuccess,
  //     onError: onFailure,
  //   });
};
