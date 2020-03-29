import React from "react";
import {graphql} from 'babel-plugin-relay/macro';
import { QueryRenderer } from "react-relay";
import { environment } from "../graphql/relay";
import Slides from "../components/slides/Slides";
import { SlidesPageQueryResponse } from "./__generated__/SlidesPageQuery.graphql";
import { useParams } from "react-router-dom";


const Query = graphql`
  query SlidesPageQuery($where: LessonWhereUniqueInput!) {
    lesson(where: $where) {
      ...Slides_lesson
    } 
  }
`

export const SlidesPage = (): JSX.Element => {
  const { lessonId } = useParams();

  return (
    <QueryRenderer 
      environment={environment}
      variables={{where: {id: lessonId}}}
      query={Query}
      render={({ props, error }) => !error && props && <Slides lesson={(props as SlidesPageQueryResponse).lesson} />}
    /> );
};
