import React, { useEffect, useState } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { DeleteOutlined } from '@ant-design/icons';
// import { commit as commitUpdateOneLessonPlanMutation } from '../../graphql/mutations/UpdateOneLessonPlanMutation';
// import { LessonPlanSidebar_lessonPlan } from './__generated__/LessonPlanSidebar_lessonPlan.graphql';

import { LessonCard } from '../lessons/LessonCard';
import { LessonPlanSidebar_courseLessons } from './__generated__/LessonPlanSidebar_courseLessons.graphql';

const MenuItem = styled(Menu.Item)`
  width: 100% !important;
  height: 128px !important;
  transition: all 0.15s ease-in-out;
  border-radius: 5px;
  padding: 0px !important;
  margin: 10px 0px;
`;

const RemoveLessonButton = styled.div`
  color: #ff4d4e;
`;

export type SlideMenuItem = { id: string; component: JSX.Element };
/*
TODO
while Content appears to not be used
I believe it will be used in the future
 */
// eslint-disable-next-line
const { Sider, Content } = Layout;
type Props = {
  courseLessons: LessonPlanSidebar_courseLessons;
  setCourseToBeDeleted: (id) => void;
  setCourseToBeDeletedArray: (lessons) => void;
};
const LessonPlanSidebar = ({
  courseLessons,
  setCourseToBeDeleted,
  setCourseToBeDeletedArray,
}: Props) => {
  const [selected, setSelected] = useState<string | undefined>(
    courseLessons.courses[0].lesson.id,
  );

  const removeLessonFromLessonPlan = (id: string) => {
        // TODO: Comment out when update lesson plan mutation is completed. Need to test frontend first

    // commitUpdateOneLessonPlanMutation(
    //   {
    //     data: { lessons: { disconnect: [{ id }] } },
    //     where: { id: lessonPlan.id },
    //   },
    //   () => console.log('Successfully removed item from lesson plan - GRAPHQL'),
    //   (e) =>
    //     console.log(
    //       `Error could not remove item from lesson plan - GRAPHQL: ${e}`,
    //     ),
    // );
  };

  const { courses } = courseLessons;

  useEffect(() => {
    const lessonIds: string[] = [];
    console.log(`LessonPlanSidebar - useEffect: current lessons `, courses);
    courses.map((lesson:any, index) => lessonIds.push(lesson.id));
    console.log(`LessonPlanSidebar - useEffect: current lessonIds `, lessonIds);
    setCourseToBeDeletedArray(lessonIds);
  }, [courses]);

  return (
    <Sider width={350} theme="light">
      {courseLessons.courses.length > 0 && (
        <Menu defaultSelectedKeys={[selected?.toString() ?? '']} mode="inline">
          {courses.map((lesson:any, index) => (
            <MenuItem key={lesson.id} style={{ display: 'flex' }}>
              <h1
                style={{
                  margin: 'auto',
                  paddingRight: '15px',
                  fontWeight: 800,
                  backgroundColor: 'white',
                  height: '100%',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {index + 1}
              </h1>
              <LessonCard
                id={lesson.id}
                title={lesson.title}
                slideCount={lesson.slides.length}
              />
              <Tooltip title="Remove Lesson">
                <RemoveLessonButton>
                  <DeleteOutlined
                    style={{ fontSize: '18px', margin: '55px 0px 0px 1px' }}
                    onClick={() => {
                      // sends to parent the course id
                      setCourseToBeDeleted(lesson.id);
                      console.log(
                        `LessonPlanSidebar: set the current course to be deleted `,
                        lesson.id,
                      );
                      // setCourseToBeDeletedArray(lesson.id);
                      // console.log("Remove from lesson plan");
                      removeLessonFromLessonPlan(lesson.id);
                    }}
                  />
                </RemoveLessonButton>
              </Tooltip>
            </MenuItem>
          ))}
        </Menu>
      )}
    </Sider>
  );
};

export default createFragmentContainer(LessonPlanSidebar, {
  courseLessons: graphql`
  fragment LessonPlanSidebar_courseLessons on Course {
    id
    courses{
      lesson{
        id
        title
        slides{
          id
          title
        }
      }
    }
  }
`,
});
