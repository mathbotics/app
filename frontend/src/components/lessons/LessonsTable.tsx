import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { LessonsPageQueryResponse } from "../../pages/__generated__/LessonsPageQuery.graphql";
import { LessonPreview_lesson } from "./__generated__/LessonPreview_lesson.graphql";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

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
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
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
    dataIndex: "slide_count"
  }
];

type TableItem = {
  key: number;
  title: string;
  level?: number;
  time?: string;
  slide_count?: number;
};

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

type Props = {
  lessons: LessonsPageQueryResponse["lessons"];
};
const LessonsTable = ({ lessons }: Props) => {
  const [data, setData] = useState<ColumnsType<TableItem>>();
  useEffect(() => {
    lessons.map((lesson, index: number) =>
      console.log(
        "Need lessons here and store ins tate to pass to Table component from Antd"
      )
    );
  }, []);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default LessonsTable;
