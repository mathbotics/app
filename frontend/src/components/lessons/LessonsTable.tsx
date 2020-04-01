import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { EditOutlined } from "@ant-design/icons";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { LessonsTable_lessons } from "./__generated__/LessonsTable_lessons.graphql";
import { useHistory } from "react-router-dom";

const columns: ColumnsType<any> = [
  {
    title: "Lessons Title",
    dataIndex: "title"
  },
  {
    title: "Grade Level",
    dataIndex: "level",
    defaultSortOrder: "descend",
    filters: [
      {
        text: "12th",
        value: "12"
      },
      {
        text: "11th",
        value: "11"
      },
      {
        text: "10th",
        value: "10"
      },
      {
        text: "9th",
        value: "9"
      },

      {
        text: "8th",
        value: "8"
      },
      {
        text: "7th",
        value: "7"
      },
      {
        text: "6th",
        value: "6"
      },
      {
        text: "5th",
        value: "5"
      },
      {
        text: "4th",
        value: "4"
      }
    ]
  },
  {
    title: "Completion time",
    dataIndex: "time"
  },
  {
    title: "Number of slides",
    dataIndex: "slide_count"
  },
  {
    title: "",
    dataIndex: "edit_button"
  }
];

type TableItem = {
  key: number;
  title: string;
  level?: number;
  time?: string;
  slide_count?: number;
  edit_button?: JSX.Element;
};

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

type Props = {
  lessons: LessonsTable_lessons;
};
const LessonsTable = ({ lessons: { lessons } }: Props) => {
  let history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  useEffect(() => {
    setData(
      lessons.map(({ id, title, slides }, index: number) => ({
        key: index,
        title,
        level: 0,
        time: "",
        slide_count: slides.length,
        edit_button: (
          <EditOutlined
            style={{ fontSize: "18px" }}
            onClick={() => history.push(`/lessons/${id}/slides`)}
          />
        )
      }))
    );
  }, [lessons]);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

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
  `
});
