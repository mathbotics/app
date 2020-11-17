import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { EditOutlined } from '@ant-design/icons';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { LessonsTable_lessons } from '../lessons/__generated__/LessonsTable_lessons.graphql';

const columns: ColumnsType<any> = [
  {
    title: '',
    dataIndex: 'index',
  },
  {
    title: 'Lessons Title',
    dataIndex: 'title',
  },
  {
    title: 'Number of slides',
    dataIndex: 'slide_count',
  },
  {
    title: '',
    dataIndex: 'edit_button',
  },
];

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

type Props = {
  lessons: LessonsTable_lessons;
};
const GradesTable = ({ lessons: { lessons } }: Props) => {
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
        slide_count: slides.length,
        edit_button: (
          <EditOutlined
            style={{ fontSize: '18px' }}
            onClick={() => history.push(`/lessons/${id}/slides`)}
          />
        ),
      })),
    );
  }, [history, lessons]);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default createFragmentContainer(GradesTable, {
  lessons: graphql`
    fragment LessonsTable_lessons on Query {
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
