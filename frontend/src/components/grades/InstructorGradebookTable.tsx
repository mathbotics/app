import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { InstructorGradebookPageQueryResponse } from '../../pages/__generated__/InstructorGradebookPageQuery.graphql';


type TableItem = {
  index: number;
  key: number;
  title: string;
  level?: number;
  time?: string;
  grade?: [string];
  firstName?: string;
  lastName?: string;
};

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function gradeCalculation(grade:any):string {
  if(grade === undefined){
    return '-';
  }

  let singleGrade = grade*100;
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

type Props = {
  instructorGradeBookQuery: InstructorGradebookPageQueryResponse;
};
const InstructorGradebookTable = ({
  instructorGradeBookQuery
}: any) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  const students = instructorGradeBookQuery?.students ? instructorGradeBookQuery.students : [];
  const lessons = instructorGradeBookQuery?.lessons ? instructorGradeBookQuery.lessons : [];
  const columns: ColumnsType<any> = [
    {
      title: 'Student Name',
      dataIndex: 'fullName',
      width: 150,
      key: '1',
      fixed: 'left',
    }, 
    {
      children: lessons.map(({title, id}, index:number) => ({
          title: title,
          dataIndex: 'grades',
          key: 'grades',
          width: 100,
          render: grades => (
            <div>
              {grades.length > 0 ?
                grades.map(({grade, lessonId}, indexGrade:number) => {
                  if (id === lessonId){
                    return (<strong>{gradeCalculation(grade)}</strong>);
                  } else if(id !== lessonId && index === indexGrade) {
                    return (<strong>{gradeCalculation(undefined)}</strong>)
                  }
                }) : <strong>{gradeCalculation(undefined)}</strong>
              }
            </div>
          )
        })),
    },
  ];

  useEffect(() => {
    
    setData(students!.map(
      ({ firstName, lastName, grades}, index: number) => ({
        index: index + 1,
        key: index,
        fullName: `${lastName} ${firstName}`,
        grades: grades,
      }
      )));
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
