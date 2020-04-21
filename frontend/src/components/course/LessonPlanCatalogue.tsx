import React from "react";
import { Input, Typography } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { LessonPlanCatalogue_query } from "./__generated__/LessonPlanCatalogue_query.graphql";
import styled from "styled-components";
import { LessonCard } from "../lessons/LessonCard";

const { Search } = Input;
const { Title } = Typography;

const LessonsPreviewWrapper = styled.div`
  width: 100%;

  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LessonCardWrapper = styled.div`
  margin: 15px 0px;
  padding: 0px 10px 0px 0px;
  max-width: 80%;
  height: 100px;
`;

type Props = { query: LessonPlanCatalogue_query };
const LessonPlanCatalogue = ({ query }: Props) => {
  const { lessons } = query;

  return (
    <LessonsCatalogueWrapper>
      <div style={{ margin: "0px 0px 15px 0px" }}>
        <Title level={3}>Lesson Catalogue</Title>
        <p>Select a lesson or search by title to add it to your course</p>
      </div>
      <LessonCatalogueSearch />
      <LessonsPreviewWrapper>
        {lessons.map(({ id, title, slides }) => (
          <LessonCardWrapper key={id} onClick={() => console.log({ id })}>
            <LessonCard id={id} title={title} slideCount={slides.length} />
          </LessonCardWrapper>
        ))}
      </LessonsPreviewWrapper>
    </LessonsCatalogueWrapper>
  );
};

export default createFragmentContainer(LessonPlanCatalogue, {
  query: graphql`
    fragment LessonPlanCatalogue_query on Query {
      lessons {
        id
        title
        slides {
          id
          title
        }
      }
    }
  `,
});

const LessonsCatalogueWrapper = styled.div`
  padding: 0px 30px 30px 30px;
`;

const LessonCatalogueSearch = () => {
  return (
    <Search
      placeholder="Search lesson by title"
      size="large"
      onSearch={(value: String) => console.log(value)}
      style={{ width: 400 }}
    />
  );
};
