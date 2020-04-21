import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { StudentsTable_course } from "./__generated__/StudentsTable_course.graphql";
import { useHistory } from "react-router-dom";

const columns: ColumnsType<any> = [
  {
    title: "",
    dataIndex: "index",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
  },
  {
    title: "Grade Level",
    dataIndex: "gradeLevel",
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
  console.log("params", pagination, filters, sorter, extra);
}

type Props = {
  course: StudentsTable_course;
};
const LessonsTable = ({ course: { students } }: Props) => {
  let history = useHistory();
  const [data, setData] = useState<ColumnsType<TableItem>>();
  useEffect(() => {
    setData(
      students.map(({ firstName, lastName, gradeLevel }, index: number) => ({
        index: index + 1,
        key: index,
        firstName,
        lastName,
        gradeLevel,
      }))
    );
  }, [students]);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default createFragmentContainer(LessonsTable, {
  course: graphql`
    fragment StudentsTable_course on Course {
      students {
        firstName
        lastName
        gradeLevel
      }
    }
  `,
});
