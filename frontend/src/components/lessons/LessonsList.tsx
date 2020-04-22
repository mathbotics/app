import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

type Props = {};
const LessonsList = (props: Props) => {
  return <>Lessons List</>;
};
// export default createFragmentContainer(LessonsList, {
//   lessons: graphql`
//         fragment LessonsList_lessons on Lessons {

//         }
//     `,
// });
