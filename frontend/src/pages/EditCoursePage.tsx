import React from "react";
import { useParams } from "react-router-dom";
import { environment } from "../graphql/relay";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import nullthrows from "nullthrows";

// import EditCourse from "../components/course/EditCourse";

// const Query = graphql`
//   query EditCoursePageQuery($where: CourseWhereUniqueInput!) {
//     course(where: $where) {
//       ...EditCourse_course
//     }
//   }
// `;

// type Props = {};
// export const EditCoursePage = (props: Props): JSX.Element => {
//   const { courseId } = useParams();

//   return (
//     <QueryRenderer
//       environment={environment}
//       variables={{ where: { id: courseId } }}
//       query={Query}
//       render={({ props, error }) =>
//         !error &&
//         (props as EditCoursePageQueryResponse | null)?.course && (
//           <EditCourse
//             course={nullthrows(
//               (props as EditCoursePageQueryResponse).course,
//               "Course not found"
//             )}
//           />
//         )
//       }
//     />
//   );
// };

export const EditCoursePage = () => {
  const { courseId } = useParams();
  return <>Editing {courseId}</>;
};
