import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { InstructorGradebookTable_lessons } from './__generated__/InstructorGradebookTable_lessons.graphql';




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
};
const InstructorGradebookTable = ({ lessons: { lessons } }: Props) => {
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
      title: 'Lesson Titles',
      children: 
      lessons.map(function(lesson) {
      return {
        title: lesson.title,
        dataIndex: 'lessonGrade',
        key: '1',
        width: 100,
      }
    })}
  ];
  useEffect(() => {
    setData(
      lessons.map(({ id, title, slides }, index: number) => ({
        index: index + 1,
        key: index,
        title,
        lessonGrade: 'A',
        fullName: 'Jessica ' + index,
      })),
    );
  }, [history, lessons]);
  return <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 1500, y:500}} 
  pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
  />;
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
});
