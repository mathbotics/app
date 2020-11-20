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
  lessonIdsInLessonPlan: String[];
};

const LessonPlanCatalogue = ({
  lessonPlan,
  query,
  courseToDelete,
  lessonIdsInLessonPlan,
}: Props) => {
  const { lessons } = query;
  // Lessons array that were added to the lessons plan
  const [selectedLessons, setSelectedLessons] = useState<String[]>([]);
  const [searchValue, setSearchValue] = useState<String>();

  // const LessonCatalogueSearch = () => (
  //   <Search
  //     placeholder="Search lesson by title"
  //     size="large"
  //     onSearch={(value: String) => {
  //       console.log(value);
  //       setSearchValue(value);
  //     }}
  //     style={{ width: 400 }}
  //   />
  // );

  useEffect(() => {
    setSelectedLessons((arr) => [...arr, ...lessonIdsInLessonPlan]);
    const filteredLessons = selectedLessons.filter(
      (lessonId) => lessonId !== courseToDelete,
    );
    setSelectedLessons(filteredLessons);
    console.log(
      `LessonPlanCatalogue - useEffect: caught the change in array`,
      lessonIdsInLessonPlan,
    );
    console.log(
      `LessonPlanCatalogue - useEffect: Comparing our new array to current`,
      selectedLessons,
    );
  }, [lessonIdsInLessonPlan, courseToDelete]);

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
        {/* <LessonCatalogueSearch /> */}
        <input
          placeholder="Search lesson by title"
          onChange={(e) => {
              console.log(e.target.value);
              setSearchValue(e.target.value);
            }}
          style={{ width: 400 }}
        />
      </Header>

      {/* Lessons filtered */}
      {searchValue && (
        <LessonsPreviewWrapper>
          {lessons.length === 0 && <p> No lessons available</p>}
          {lessons
            .filter((lesson) => lesson.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map(({ id, title, slides }) => (
              <LessonCardWrapper>
                <LessonCard
                  id={id}
                  key={id}
                  title={title}
                  slideCount={slides.length}
                />
                <ButtonWrapper>
                  <Button
                    disabled={selectedLessons.includes(id) ?? false}
                    type="primary"
                    icon={<PlusOutlined />}
                    size="middle"
                    htmlType="submit"
                    onClick={() => {
                      //  Both selectedLessons and LessonPlan.lessons on first add showing empty
                      connectLessonToLessonPlan(id);
                      setSelectedLessons((arr) => [...arr, id]);
                      console.log(
                          'LessonPlanCatalogue: Selected CourseId to add',
                          id,
                      );
                      console.log(
                          'LessonPlanCatalogue: Adding to selected lessons',
                          selectedLessons,
                      );
                      // console.log("LessonPlan Lesson", lessonPlan.lessons);
                  }}
                  >
                    Add Lesson
                  </Button>
                </ButtonWrapper>
              </LessonCardWrapper>
            ))}
        </LessonsPreviewWrapper>
      )}

      {/* Lessons */}
      {!searchValue && (
        <LessonsPreviewWrapper>
          {lessons.map(({ id, title, slides }) => (
            <LessonCardWrapper>
              <LessonCard
                id={id}
                key={id}
                title={title}
                slideCount={slides.length}
              />
              <ButtonWrapper>
                <Button
                  disabled={selectedLessons.includes(id) ?? false}
                  type="primary"
                  icon={<PlusOutlined />}
                  size="middle"
                  htmlType="submit"
                  onClick={() => {
                    //  Both selectedLessons and LessonPlan.lessons on first add showing empty
                    connectLessonToLessonPlan(id);
                    setSelectedLessons((arr) => [...arr, id]);
                    console.log(
                        'LessonPlanCatalogue: Selected CourseId to add',
                        id,
                    );
                    console.log(
                        'LessonPlanCatalogue: Adding to selected lessons',
                        selectedLessons,
                    );
                    // console.log("LessonPlan Lesson", lessonPlan.lessons);
                }}
                >
                  Add Lesson
                </Button>
              </ButtonWrapper>
            </LessonCardWrapper>
          ))}
        </LessonsPreviewWrapper>
      )}
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

const ButtonWrapper = styled.div`
  float: right;
`;
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
