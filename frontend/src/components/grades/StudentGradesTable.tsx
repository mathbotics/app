import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { StudentGradesTable_lessons } from './__generated__/StudentGradesTable_lessons.graphql';
import { StudentGradesTable_grades } from './__generated__/StudentGradesTable_grades.graphql';

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
  lessons: StudentGradesTable_lessons;
  grades: StudentGradesTable_grades;
};
const StudentGradesTable = ({ lessons: { lessons }, grades: {grades}}: Props) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  useEffect(() => {
    setData(
      lessons.map(({ id, title, slides }, index: number) => ({
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
