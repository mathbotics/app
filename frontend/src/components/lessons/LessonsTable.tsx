import React, { useState, useEffect } from 'react';
import { Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { LessonsTable_lessons } from './__generated__/LessonsTable_lessons.graphql';

const DeleteButton = styled.div`
  :hover {
    color: #ff4d4e;
  }
`;
const EditButton = styled.div`
  :hover {
    color: #1890ff;
  }
`;

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
    title: 'Action',
    dataIndex: 'action',
  },
];

type TableItem = {
  index: number;
  key: number;
  title: string;
  level?: number;
  time?: string;
  slide_count?: number;
};

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

type Props = {
  lessons: LessonsTable_lessons;
  onClickRemove: (lessonId: string) => void;
};
const LessonsTable = ({ onClickRemove, lessons: { lessons } }: Props) => {
  const history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  useEffect(() => {
    const lessonsList = lessons.filter(value => value != null)  
    setData(
      lessonsList.map(({ id, title, slides }, index: number) => ({
        index: index + 1,
        key: index,
        title,
        level: 9,
        time: '15 min',
        slide_count: slides.length,
        action: (
          <EditLessonTableButtons
            id={id}
            onClickRemove={onClickRemove}
            history={history}
          />
        ),
      })),
    );
  }, [history, lessons]);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

type EditLessonTableButtonProps = {
  id: string;
  history;
  onClickRemove: (string) => void;
};

const EditLessonTableButtons = ({
  id,
  onClickRemove,
  history,
}: EditLessonTableButtonProps) => (
  <div
    style={{
      display: 'flex',
      fontSize: '16px',
      alignItems: 'center',
    }}
  >
    <Tooltip title="Edit Lesson">
      <EditButton onClick={() => history.push(`/lessons/${id}/slides`)}>
        <EditOutlined />
      </EditButton>
    </Tooltip>
    <Tooltip title="Delete Lesson">
      <DeleteButton
        onClick={() => {
          console.log(id);
          onClickRemove(id);
        }}
      >
        <DeleteOutlined style={{ margin: '0px 0px 0px 15px' }} />
      </DeleteButton>
    </Tooltip>
  </div>
);

export default createFragmentContainer(LessonsTable, {
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
