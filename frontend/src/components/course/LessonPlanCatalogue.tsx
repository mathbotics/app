import React, { useEffect, useState } from 'react';
import { Input, Typography, Tooltip, Button } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { LessonPlanCatalogue_query } from './__generated__/LessonPlanCatalogue_query.graphql';
import { LessonCard } from '../lessons/LessonCard';
import { commit as commitUpdateOneLessonPlanMutation } from '../../graphql/mutations/UpdateOneLessonPlanMutation';
import { LessonPlanCatalogue_lessonPlan } from './__generated__/LessonPlanCatalogue_lessonPlan.graphql';

const { Search } = Input;
const { Title } = Typography;

type Props = {
  query: LessonPlanCatalogue_query;
  lessonPlan: LessonPlanCatalogue_lessonPlan;
  courseToDelete: String;
  courseToDeleteArray: String[];
};

const LessonPlanCatalogue = ({ lessonPlan, query, courseToDelete, courseToDeleteArray }: Props) => {
  const { lessons } = query;
  // Lessons array that were added to the lessons plan
  const [selectedLessons, setSelectedLessons] = useState<String[]>([]);

  useEffect(() => {
    setSelectedLessons(courseToDeleteArray);
    console.log(`LessonPlanCatalogue cought the change in array`, courseToDeleteArray)
  }, [courseToDeleteArray])

  /*
    Graphql logic to add lessons to LessonPlan
 */
  const connectLessonToLessonPlan = (id: string) => {
    const lessonIds = lessonPlan.lessons.map((lesson) => ({ id: lesson.id }));
    commitUpdateOneLessonPlanMutation(
      {
        data: { lessons: { connect: [{ id }, ...lessonIds] } },
        where: { id: lessonPlan.id },
      },
      () => console.log('GRAPHQL Success'),
      (e) => console.log(`GRAPHQL Error ${e}`),
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
        {lessons.length === 0 && <p> No lessons available</p>}
        {lessons.map(({ id, title, slides }) => (
          <LessonCardWrapper>
            <LessonCard
              id={id}
              key={id}
              title={title}
              slideCount={slides.length}
            />
            <Tooltip title="Add Lesson">
              <Button
                disabled={selectedLessons?.includes(id) ?? false}
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                htmlType="submit"
                size="large"
                onClick={() => {
                //  Both selectedLessons and LessonPlan.lessons on first add showing empty
                connectLessonToLessonPlan(id);
                setSelectedLessons((arr) => [...arr, id]);
                console.log("selected lessons", selectedLessons);
                console.log("LessonPlan Lesson", lessonPlan.lessons);
              }}
              />
            </Tooltip>
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
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
`;

const Header = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  background-color: white;
  padding-bottom: 10px;
`;

const LessonsPreviewWrapper = styled.div`
  width: 100%;
  height: 550px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const LessonCardWrapper = styled.div`
  width: 100%;
  margin: 5px 0px;
`;
const LessonCatalogueSearch = () => (
  <Search
    placeholder="Search lesson by title"
    size="large"
    onSearch={(value: String) => console.log(value)}
    style={{ width: 400 }}
  />
  );
