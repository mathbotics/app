import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { UpdateOneLessonPlanMutationVariables } from './__generated__/UpdateOneLessonPlanMutation.graphql';
    // TODO: Comment out when update lesson plan mutation is completed. Need to test frontend first

// const mutation = graphql`
//   mutation UpdateOneLessonPlanMutation(
//     $data: UpdateLessonInput!
//     $where: LessonPlanWhereUniqueInput!
//   ) {
//     updateOneLessonPlan(data: $data, where: $where) {
//       id
//       ...EditCourseLessonPlan_lessonPlan
//     }
//   }
// `;

// export const commit = (
//   variables: UpdateOneLessonPlanMutationVariables,
//   onCompleted: (response: any) => void,
//   onError: (error: Error) => void,
// ) =>
//   commitMutation(environment, {
//     mutation,
//     variables,
//     onCompleted,
//     onError,
//   });
