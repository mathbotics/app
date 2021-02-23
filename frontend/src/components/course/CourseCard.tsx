import React, { useState } from 'react';
import styled from 'styled-components';
import { ExportOutlined, EditOutlined, PropertySafetyFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { CourseCard_user } from './__generated__/CourseCard_user.graphql';

import { CourseCard_course } from './__generated__/CourseCard_course.graphql';

/*Special note:
If I try doing another props by using the same file but different prop approach (user)
then I will be forced to create the user prop for EVERY class before this.
This means CourseList.tsx and Courses.tsx and beyond will need to include the props user
and pass it down to others in front of them 

NEED TO FIND A WAY TO CALL THIS INFO ONLY FOR THIS FILE
OR
create a new file that handles the User but returning no other react js output?
or maybe pass down the things to the new file and CourseCard just calls down
this new file just to hide the content?
*/

const Card = styled.div`
  border-radius: 5px;
  padding: 35px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease-in-out;
  border: 0.5px solid #e0e9f3;
  :hover {
    box-shadow: 0 10px 15px -3px rgba(57, 129, 181, 0.31),
      0 4px 6px -2px rgba(120, 157, 195, 0.08);
    cursor: pointer;
  }
`;

const CardTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const CardDescription = styled.div`
  font-size: 20px;
  color: #676767;
  font-weight: 600;
  margin-top: 25px;
`;

const CourseLevel = styled.div`
  border-radius: 50px;
  padding: 5px 15px;
  background-color: #198fff14;
  color: #0a7ce8;
  font-weight: bold;
  font-size: 13px;
  width: fit-content;
`;

const CardFooter = styled.div`
  margin: 16px 0px 0px 0px;
`;

const CardSlideCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

const EditButton = styled.div`
  :hover {
    color: #1890ff;
  }
`;

//new
/*
const UserRole = graphql`
  query User_Role {
    user {
      ...User_role
    }
  }
`;
*/
type Props = { course: CourseCard_course;
 user: CourseCard_user; //new line
 };
const CourseCard = ({
  course: {
    id,
    instructors,
    name,
    suggestedLevel,
    lessonPlan: { lessons },
  },
  user: { role },

}: Props) => {
  const lessonCount = lessons.length;
  // console.log(instructors);
  const history = useHistory();
  // const isAdmin: boolean = query.viewer.__typename == "Admin";
  // const isCourseCreator: boolean =
  //   instructors!!.filter((id) => id == query.viewer.id).length > 0;

  // console.log("UserId" + query.viewer.id);
  const [edit, setEdit] = useState(false);


  //fragment of code needed
  /* the thing below is used in withSidebar.tsx


  {
    viewer: graphql`
      fragment withSidebar_viewer on User {
        role: __typename
      }
    `,
  },

  */


  function openEditPage(edit: boolean) {
    if (edit) {
      console.log('We want to edit the page');
      history.push(`/courses/${id}/edit`);
    } else {
      openCoursePage();
    }
  }

  function openCoursePage() {
    console.log('Go to course page');
    history.push(`/courses/${id}`);
  }

  function displayEditButton() {

    /*Role handling here*/
    /*
    Access props from Sidebar.tsx , the role
    OR GraphQL query this thing.
    */
    var role = '';

    if(role === 'Admin' || role === 'Instructor' ) {
      //EditButton fragment
      return(
        <>
          <EditButton
            onMouseEnter={() => setEdit(true)}
            onMouseLeave={() => setEdit(false)}
          >
            <EditOutlined style={{ fontSize: '18px' }} />
          </EditButton> 
        </>
      );
    }
    else {
      //empty fragment
      return(
        <></>
      );
    }
  }

  return (
    <Card onClick={() => openEditPage(edit)}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CardTitle>{name}</CardTitle>

        <Tooltip title="Edit course">
          {displayEditButton()}
        </Tooltip>
      </div>
      <CourseLevel>
        {suggestedLevel}
        {' '}
        grade
      </CourseLevel>
      <CardDescription>
        <p style={{ fontSize: '16px' }} />
      </CardDescription>
      <CardFooter>
        <CardSlideCount>
          <ExportOutlined style={{ marginRight: '10px' }} />
          {lessonCount}
          {' '}
          Lesson
          {lessonCount !== 1 && 's'}
        </CardSlideCount>
      </CardFooter>
    </Card>
  );

};

/*add another fragment with the query in line 105*/ 

export default createFragmentContainer(CourseCard, {
  course: graphql`
    fragment CourseCard_course on Course {
      id
      name
      suggestedLevel
      instructors {
        id
        firstName
        lastName
        username
      }
      lessonPlan {
        lessons {
          title
        }
      }
    }
  `,
  user: graphql`
    fragment CourseCard_user on User {
      role: __typename
    }
  `,
});

/*
default property means:

React.ComponentType<MappedFragmentProps<Pick<Props, "course">> & {
    componentRef?: ((ref: any) => void) | undefined;
}>
*/
/*
export const createRoleFragmentContainer( CourseCard, {
  user: graphql`
    fragment User_role on User {
      role: __typename
    }
  `,

});
*/
