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
function maxWidth(students:any):number {
  let max = 0;
  students.map(({firstName, lastName}) => {
    if (`${firstName} ${lastName}`.length > max){
      max = `${firstName} ${lastName}`.length;
    }
  });

  return max+15;
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
};

function gradeColumnRender(lessons, grades, id, index){
  for(let n = 0; n < lessons.length; n++){
    if (n >= grades.length) {
      return (<strong>{gradeCalculation(undefined)}</strong>);
    } else if (id === grades[n].lessonId){
      return (<strong>{gradeCalculation(grades[n].grade)}</strong>);
    } else if(id !== grades[n].lessonId && index === n) {
      return (<strong>{gradeCalculation(undefined)}</strong>);
    }
  }
};

type Props = {
  instructorGradeBookQuery: InstructorGradebookPageQueryResponse;
};
const InstructorGradebookTable = ({
  instructorGradeBookQuery
}: any) => {
  const history = useHistory();
  const isEmpty = instructorGradeBookQuery === undefined ? true : false;
  const [data, setData] = useState<ColumnsType<TableItem>>();
  const students = instructorGradeBookQuery?.students ? instructorGradeBookQuery.students : [];
  const lessons = instructorGradeBookQuery?.lessons ? instructorGradeBookQuery.lessons : [];
  const columnWidth = maxWidth(students);
  const columns: ColumnsType<any> = [
    {
      title: 'Student Name',
      dataIndex: 'fullName',
      width: columnWidth,
      key: '1',
      fixed: 'left',
    }, 
    {
      children: lessons.map(({title, id}, index:number) => ({
          title: <div style={{marginLeft:'auto', marginRight: 'auto', textAlign: 'center'}}>{title}</div>,
          dataIndex: 'grades',
          key: 'grades',
          width: 70,
          render: grades => (
            <div style={{marginLeft:'auto', marginRight: 'auto', textAlign: 'center'}}>
              {grades.length > 0 ?
                gradeColumnRender(lessons, grades, id, index)
                : <strong>{gradeCalculation(undefined)}</strong>
              }
            </div>
          )
        })),
    },
  ];

  useEffect(() => {
    if(!isEmpty){
      setData(students!.map(
        ({ firstName, lastName, grades}, index: number) => ({
          index: index + 1,
          key: index,
          fullName: `${firstName} ${lastName}`,
          grades: grades,
        }
        )));
    }
  }, [students]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      scroll={{ x: 1500, y: 600 }}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30'],
      }}
    />
  );
};

export default createFragmentContainer(InstructorGradebookTable, {
  
});
