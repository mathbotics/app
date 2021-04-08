import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExportOutlined, EditOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
import { createFragmentContainer, createRefetchContainer, fetchQuery } from 'react-relay';
import { environment } from "../../graphql/relay";
import { graphql } from 'babel-plugin-relay/macro';

import { CourseCard_course } from './__generated__/CourseCard_course.graphql';

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

type Props = { course: CourseCard_course };
const CourseCard = ({
  course: {
    id,
    name,
    suggestedLevel
  },
}: Props) => {
  // const lessonCount = lessons.length;
  // console.log(instructors);
  const history = useHistory();
  // const isAdmin: boolean = query.viewer.__typename == "Admin";
  // const isCourseCreator: boolean =
  //   instructors!!.filter((id) => id == query.viewer.id).length > 0;

  // console.log("UserId" + query.viewer.id);
  const [edit, setEdit] = useState(false);
  const [viewer, setViewer] = useState<String>();
  const [role, setRole] = useState<String>();

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

  const mainQuery = graphql`
  query CourseCardQuery {
    viewer {
      id
      __typename
    }

    }
`;

  function fetchCurrentViewer() {
    var viewerId = "";
    fetchQuery(environment, mainQuery, {}).then((data: any) => {
    viewerId = data.viewer.id;
    setViewer(viewerId);
    })
    }

  function fetchCurrentViewerTypename() {
      var viewerTypeName = "";
      fetchQuery(environment, mainQuery, {}).then((data: any) => {
        viewerTypeName = data.viewer.__typename;
        setRole(viewerTypeName);
      })
      }


    function displayEditButton() {
      fetchCurrentViewerTypename();
      const roleRetrieved = role;
      switch(roleRetrieved)
      {
        case 'Instructor':
          {
          return (
            <>
            <Tooltip title="Edit course">
              <EditButton
              onMouseEnter={() => setEdit(true)}
              onMouseLeave={() => setEdit(false)}
              >
              <EditOutlined style={{ fontSize: '18px' }} />
              </EditButton>
            </Tooltip>
            </>
          );
          }  
        default:
          {
            //nothing
          }
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

        {displayEditButton()}
      </div>
      <CourseLevel>
        {suggestedLevel}
        {' '}
        grade
      </CourseLevel>
      <CardDescription>
        <p style={{ fontSize: '16px' }} />
      </CardDescription>
      {/* <CardFooter>
        <CardSlideCount>
          <ExportOutlined style={{ marginRight: '10px' }} />
          {lessonCount}
          {' '}
          Lesson
          {lessonCount !== 1 && 's'}
        </CardSlideCount>
      </CardFooter> */}
    </Card>
  );
};

export default createFragmentContainer(CourseCard, {
  course: graphql`
    fragment CourseCard_course on Course {
      id
      name
      suggestedLevel
    }
  `,
});
