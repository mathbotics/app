import React from "react";
import { Input, Typography } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { LessonPlanCatalogue_query } from "./__generated__/LessonPlanCatalogue_query.graphql";
import styled from "styled-components";
import { LessonCard } from "../lessons/LessonCard";
import { commit as commitUpdateOneLessonPlanMutation } from "../../graphql/mutations/UpdateOneLessonPlanMutation";
import { LessonPlanCatalogue_lessonPlan } from "./__generated__/LessonPlanCatalogue_lessonPlan.graphql";

const { Search } = Input;
const { Title } = Typography;

type Props = {
  query: LessonPlanCatalogue_query;
  lessonPlan: LessonPlanCatalogue_lessonPlan;
};
const LessonPlanCatalogue = ({ lessonPlan, query }: Props) => {
  const { lessons } = query;

  const connectLessonToLessonPlan = (id: string) => {
    const lessonIds = lessonPlan.lessons.map((lesson) => ({ id: lesson.id }));
    commitUpdateOneLessonPlanMutation(
      {
        data: { lessons: { connect: [{ id }, ...lessonIds] } },
        where: { id: lessonPlan.id },
      },
      () => console.log("Success"),
      (e) => console.log("Error " + e)
    );
  };

  return (
    <LessonsCatalogueWrapper>
      <Header>
        {/* Title */}
        <Title level={3}>Lesson Catalogue</Title>
        <p>Select a lesson or search by title to add it to your course</p>

        {/* Search */}
        <LessonCatalogueSearch />
      </Header>

      {/* Lessons */}
      <LessonsPreviewWrapper>
        {lessons.length == 0 && <p> No lessons available</p>}
        {lessons.map(({ id, title, slides }) => (
          <LessonCardWrapper
            key={id}
            onClick={() => connectLessonToLessonPlan(id)}
          >
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
  lessonPlan: graphql`
    fragment LessonPlanCatalogue_lessonPlan on LessonPlan {
      id
      lessons {
        id
      }
    }
  `,
});

const LessonsCatalogueWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  padding-bottom: 10px;
`;

const LessonsPreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const LessonCardWrapper = styled.div`
  width: 100%;
  margin: 5px 0px;
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