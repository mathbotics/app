import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { StudentGradesPageQueryResponse } from '../../pages/__generated__/StudentGradesPageQuery.graphql';
import { StudentGradesPageQuery } from '../../pages/StudentGradesPage';

const columns: ColumnsType<any> = [
  {
    title: '',
    dataIndex: 'index',
  },
  {
    title: 'Lesson Title',
    dataIndex: 'title',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
  },
];

type TableItem = {
  index: number;
  key: number;
  title: string;
  level?: number;
  time?: string;
  grade?: string;

};

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

type Props = {
  studentGradesQuery: StudentGradesPageQueryResponse;
};
const StudentGradesTable = ({ 
  studentGradesQuery: { studentGradesQuery },
}: Props) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  console.log(studentGradesQuery)
  const lessons = studentGradesQuery![0]!.course!.lessons
  useEffect(() => {
    setData(
      lessons.map(({ id, title}, index: number) => ({
        index: index + 1,
        key: index,
        title,
        level: 9,
        time: '15 min',
        grade: 'A',
      })),
    );
  }, [history, lessons]);

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default createFragmentContainer(StudentGradesTable, {
  lessons: graphql`
    fragment StudentGradesTable_lessons on Query {
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
    fragment StudentGradesTable_students on Query {
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
    fragment StudentGradesTable_grades on Query {
        grades{
          courseId
          lessonId
          studentId
          grade
        }
      }
  `,
});
