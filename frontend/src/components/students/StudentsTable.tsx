import React, { useState, useEffect } from 'react';
import { Table, Button, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { StudentsTable_course } from './__generated__/StudentsTable_course.graphql';


type Props = {
  course: StudentsTable_course;

};

const EditButton = styled.div`
  :hover {
    color: #1890ff;
  }
`;
const DeleteButton = styled.div`
  :hover {
    color: #ff4d4e;
  }
`;
let edit = false;
const columns: ColumnsType<any>  = [
  {
    title: '',
    dataIndex: 'index',
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Grade Level',
    dataIndex: 'gradeLevel',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: () => (
      <div
        style={{
          display: 'flex',
          fontSize: '16px',
          alignItems: 'center',
        }}
      >
        <Tooltip title="Edit Student">
          <EditButton
                // TODO Add edit a student modal
            onClick={() => {
                edit = !edit;
                console.log(edit);
            }}
          >
            <EditOutlined />
          </EditButton>
        </Tooltip>
        <Tooltip title="Delete Student">
          <DeleteButton
                // TODO Add confirmation popup to delete a students
            onClick={() => console.log("handle delete here")}
          >
            <DeleteOutlined style={{ margin: '0px 0px 0px 15px' }} />
          </DeleteButton>
        </Tooltip>

      </div>
    ),
  },
];

type TableItem = {
  index: number;
  key: number;
  title: string;
  level?: number;
  time?: string;
  slide_count?: number;
  edit_button?: JSX.Element;
};

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
// const handleDelete = (key) => {
//   const dataSource = [...columns];
//   setState({
//     columns: columns.filter((item) => item.key !== key),
//   });
// };

// type Props = {
//   course: StudentsTable_course;
// };
const LessonsTable = ({ course: { students } }: Props) => {
  const [data, setData] = useState<ColumnsType<TableItem>>();

  useEffect(() => {
    setData(
        students.map(
            ({ firstName, lastName, gradeLevel, username }, index: number) => ({
              index: index + 1,
              key: index,
              firstName,
              lastName,
              gradeLevel,
              username,
            }),
        ),
    );
  }, [students]);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default createFragmentContainer(LessonsTable, {
  course: graphql`
    fragment StudentsTable_course on Course {
      students {
        username
        firstName
        lastName
        gradeLevel
      }
    }
  `,
});
