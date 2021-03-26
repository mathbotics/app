import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { InstructorGradebookTable_lessons } from './__generated__/InstructorGradebookTable_lessons.graphql';
import { InstructorGradebookTable_course } from './__generated__/InstructorGradebookTable_course.graphql';

type TableItem = {
  index: number;
  key: number;
  title: string;
  level?: number;
  time?: string;
  grade?: string;
  firstName?: string;
  lastName?: string;
};

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

type Props = {
  lessons: InstructorGradebookTable_lessons;
  course: InstructorGradebookTable_course;
};
const InstructorGradebookTable = ({
  lessons: { lessons },
  course: { students },
}: Props) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();

  const columns: ColumnsType<any> = [
    {
      title: 'Student Name',
      dataIndex: 'fullName',
      width: 150,
      key: 'fullName',
      fixed: 'left',
    },
    {
      children: lessons.map((lesson) => ({
          title: lesson.title,
          dataIndex: 'grade',
          key: '1',
          width: 100,
        })),
    },
  ];

  useEffect(() => {
    setData(
      students.map(
        ({ firstName, lastName, grades}, index: number) => ({
          index: index + 1,
          key: index,
          fullName: `${lastName} ${firstName}`,
          grade: grades![0].grade,
        }),
      ),
      
    );
  }, [history, students]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      scroll={{ x: 1500, y: 500 }}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30'],
      }}
    />
  );
};

export default createFragmentContainer(InstructorGradebookTable, {
  lessons: graphql`
    fragment InstructorGradebookTable_lessons on Query {
      lessons {
        id
        title
        slides {
          id
        }
      }
    }
  `,
  course: graphql`
    fragment InstructorGradebookTable_course on Query {
      students {
        username
        firstName
        lastName
        gradeLevel
        id
        grades{
          lessonId
          grade
        }
      }
    }
  `,
});
