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
  }
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

function gradeCalculation(grades:any, id:any):string {
  if(grades === undefined){
    return '-';
  }
  let singleGrade;
  
  grades.forEach(({lessonId, grade}) => {
    if(lessonId === id){
      singleGrade = grade;
    }
  })

  singleGrade = singleGrade*100;
  if(singleGrade >= 90){
    return 'A';
  }
  else if(singleGrade >= 80 && singleGrade < 90){
    return 'B';
  }
  else if(singleGrade >= 70 && singleGrade < 80){
    return 'C';
  }
  else if(singleGrade >= 60 && singleGrade < 70){
    return 'D';
  }
  return 'F';
}

const StudentGradesTable = ({ 
  studentGradesQuery 
}: any) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  const grades = studentGradesQuery.student.grades;
  const lessons = studentGradesQuery.course!.lessons;
  useEffect(() => {
    setData(
      lessons.map(({ id, title}, index: number) => ({
        index: index + 1,
        key: index,
        title,
        level: 9,
        time: '15 min',
        grade: gradeCalculation(grades, id),
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
