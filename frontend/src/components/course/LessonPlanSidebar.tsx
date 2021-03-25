import React, { useEffect, useState } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { DeleteOutlined } from '@ant-design/icons';
import { commit as commitRemoveCourseLessonMutation } from '../../graphql/mutations/RemoveCourseLessonMutation';
// import { LessonPlanSidebar_lessonPlan } from './__generated__/LessonPlanSidebar_lessonPlan.graphql';

import { LessonCard } from '../lessons/LessonCard';
import { LessonPlanSidebar_course } from './__generated__/LessonPlanSidebar_course.graphql';

const MenuItem = styled(Menu.Item)`
  width: 95% !important;
  height: 128px !important;
  transition: all 0.15s ease-in-out;
  border-radius: 5px;
  padding: 0px !important;
  margin: 10px 0px;
`;

const RemoveLessonButton = styled.div`
  color: #ff4d4e;
  width: 30px;
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
  course: LessonPlanSidebar_course;
  setCourseToBeDeleted: (id) => void;
  setCourseToBeDeletedArray: (lessons) => void;
};
const LessonPlanSidebar = ({
  course,
  setCourseToBeDeleted,
  setCourseToBeDeletedArray,
}: Props) => {
  const [selected, setSelected] = useState<string | undefined>(
    course.courses[0].lesson.id,
  );

  const removeLessonFromLessonPlan = (id: string) => {

    commitRemoveCourseLessonMutation(
      {
        input:{courseId: course.id, lessonId: id}
      },
      () => console.log('Successfully removed item from lesson plan - GRAPHQL'),
      (e) =>
        console.log(
          `Error could not remove item from lesson plan - GRAPHQL: ${e}`,
        ),
    );
  };

  const { courses } = course;

  useEffect(() => {
    const lessonIds: string[] = [];
    console.log(`LessonPlanSidebar - useEffect: current lessons `, courses);
    courses.map((lesson:any, index) => lessonIds.push(lesson.id));
    console.log(`LessonPlanSidebar - useEffect: current lessonIds `, lessonIds);
    setCourseToBeDeletedArray(lessonIds);
  }, [courses]);

  console.log("courses in sidebar", courses)
  console.log("courses slides in sidebar", courses[0].lesson.slides)
  return (
    <Sider width={350} theme="light">
      {course.courses.length > 0 && (
        <Menu defaultSelectedKeys={[selected?.toString() ?? '']} mode="inline">
          {courses.map((obj:any, index) => (
            <MenuItem key={obj.lesson.id} style={{ display: 'flex' }}>
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
                id={obj.lesson.id}
                title={obj.lesson.title}
                slideCount={obj.lesson.slides.length}
              />
              <Tooltip title="Remove Lesson">
                <RemoveLessonButton>
                  <DeleteOutlined
                    style={{ fontSize: '18px', margin: '55px 0px 0px 3px' }}
                    onClick={() => {
                      // sends to parent the course id
                      setCourseToBeDeleted(obj.lesson.id);
                      console.log(
                        `LessonPlanSidebar: set the current course to be deleted `,
                        obj.lesson.id,
                      );
                      // setCourseToBeDeletedArray(lesson.id);
                      // console.log("Remove from lesson plan");
                      removeLessonFromLessonPlan(obj.lesson.id);
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
  course: graphql`
  fragment LessonPlanSidebar_course on Course {
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
