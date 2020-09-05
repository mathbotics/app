import React, { useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { BookOutlined } from "@ant-design/icons";
import { createFragmentContainer } from "react-relay";
import { Typography, Button } from "antd";

import { Dashboard_dashboard } from "./__generated__/Dashboard_dashboard.graphql";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

const { Title } = Typography;

type Props = {
  dashboard: Dashboard_dashboard;
};

const Dashboard = ({
  dashboard: {
    viewer: { firstName, lastName },
  },
}: Props) => {
  let history = useHistory();
  const [selected, setSelected] = useState<number>(1);
  return (
    <>
      <Banner>
        <div style={{ width: "400px" }}>
          <Title level={1} style={{ fontWeight: 800, color: "#454d55" }}>
            Welcome <br />
            {firstName} {lastName}!
          </Title>
          <p style={{ fontWeight: 600, color: "#454d55", fontSize: "18px" }}>
            The Mathbotics learning platform will serve as an educational tool
            for students K-12 to learn about robotos through educational content
          </p>
          <Button
            type="primary"
            icon={<BookOutlined />}
            size="large"
            onClick={() => history.push("/courses")}
          >
            View Courses
          </Button>
        </div>
      </Banner>
    </>
  );
};

const Banner = styled.div`
  width: 100%;
  border-radius: 10px;
  transition: all 0.15s ease-in-out;
  line-height: 30px;
`;

export default createFragmentContainer(Dashboard, {
  dashboard: graphql`
    fragment Dashboard_dashboard on Query {
      viewer {
        firstName
        lastName
        ... on Instructor {
          email
        }
        ... on Admin {
          email
        }
      }
    }
  `,
});
