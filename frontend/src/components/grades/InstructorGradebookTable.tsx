import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { InstructorGradebookTable_lessons } from './__generated__/InstructorGradebookTable_lessons.graphql';

const columns: ColumnsType<any> = [

  {
    title: 'First Name',
    dataIndex: 'firstName',
    width: 100,
    key: 'firstName',
    fixed: 'left',
  },  
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    width: 100,
    key: 'lastName',
    fixed: 'left',
  },  
  {
    title: 'Lesson 1',
    dataIndex: 'lessonGrade',
    key: '1',
    width: 150,
  },
  {
    title: 'Lesson 2',
    dataIndex: 'lessonGrade',
    key: '2',
    width: 150,
  },
  {
    title: 'Lesson 3',
    dataIndex: 'lessonGrade',
    key: '3',
    width: 150,
  },
  {
    title: 'Lesson 4',
    dataIndex: 'lessonGrade',
    key: '4',
    width: 150,
  },
  {
    title: 'Lesson 5',
    dataIndex: 'lessonGrade',
    key: '5',
    width: 150,
  },
  {
    title: 'Lesson 6',
    dataIndex: 'lessonGrade',
    key: '6',
    width: 150,
  },
  {
    title: 'Lesson 7',
    dataIndex: 'lessonGrade',
    key: '7',
    width: 150,
  },
];

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
  
  useEffect(() => {
    setData(
      lessons.map(({ id, title, slides }, index: number) => ({
        index: index + 1,
        key: index,
        title,
        level: 9,
        time: '15 min',
        lessonGrade: 'A',
        firstName: 'Jessica',
        lastName: index + 1,
      })),
    );
  }, [history, lessons]);
  return <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 1500, y: 300 }}/>;
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
