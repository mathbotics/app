import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { InstructorGradebookTable_lessons } from './__generated__/InstructorGradebookTable_lessons.graphql';
import { InstructorGradebook_courses } from './__generated__/InstructorGradebook_courses.graphql';
import { InstructorGradebookTable_grades } from './__generated__/InstructorGradebookTable_grades.graphql';
import { InstructorGradebookTable_students } from './__generated__/InstructorGradebookTable_students.graphql';
import { InstructorGradebookPageQueryResponse } from '../../pages/__generated__/InstructorGradebookPageQuery.graphql';


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
  instructorGradeBookQuery: InstructorGradebookPageQueryResponse;
};
const InstructorGradebookTable = ({
  instructorGradeBookQuery: { instructorGradeBookQuery },
}: Props) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  const students = instructorGradeBookQuery[0].students
  const lessons = instructorGradeBookQuery[0].lessons
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
      students!.map(
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
    fragment InstructorGradebookTable_lessons on Course {
      lessons {
        id
        title
        slides {
          id
        }
      }
    }
  `,
  students: graphql`
    fragment InstructorGradebookTable_students on Course {
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
  grades: graphql`
    fragment InstructorGradebookTable_grades on Query {
      grades{
        courseId
        lessonId
        grade
      }
    }
  `,
});
