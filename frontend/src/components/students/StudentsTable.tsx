import React, { useState, useEffect } from 'react';
import { Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { string } from 'prop-types';
import { StudentsTable_course } from './__generated__/StudentsTable_course.graphql';

type Props = {
  course: StudentsTable_course;
  onClickEdit: (studentId: string) => void;
  onClickRemove: (studentId: string) => void;
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

const LessonsTable = ({
  course: { students },
  onClickEdit,
  onClickRemove,
}: Props) => {
  const columns: ColumnsType<any> = [
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
    },
  ];
  const [data, setData] = useState<ColumnsType<TableItem>>();

  useEffect(() => {
    setData(
      students.map(
        ({ firstName, lastName, gradeLevel, username, id }, index: number) => ({
          index: index + 1,
          key: index,
          firstName,
          lastName,
          gradeLevel,
          username,
          action: (
            <EditStudentTableButton
              id={id}
              onClickEdit={onClickEdit}
              onClickRemove={onClickRemove}
            />
          ),
        }),
      ),
    );
  }, [students]);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

type EditStudentTableButtonProps = {
  id: string;
  onClickEdit: (string) => void;
  onClickRemove: (string) => void;
};
const EditStudentTableButton = ({
  id,
  onClickEdit,
  onClickRemove,
}: EditStudentTableButtonProps) => (
  <div
    style={{
        display: 'flex',
        fontSize: '16px',
        alignItems: 'center',
      }}
  >
    <Tooltip title="Edit Student">
      <EditButton
        onClick={(e) => {
            onClickEdit(id);
          }}
      >
        <EditOutlined />
      </EditButton>
    </Tooltip>
    <Tooltip title="Delete Student">
      <DeleteButton onClick={() => { console.log(id); onClickRemove(id) }}>
        <DeleteOutlined style={{ margin: '0px 0px 0px 15px' }} />
      </DeleteButton>
    </Tooltip>
  </div>
  );

export default createFragmentContainer(LessonsTable, {
  course: graphql`
    fragment StudentsTable_course on Course {
      students {
        username
        firstName
        lastName
        gradeLevel
        id
      }
    }
  `,
});
