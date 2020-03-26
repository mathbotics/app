import React, { useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { Typography } from "antd";

import { Dashboard_dashboard } from "./__generated__/Dashboard_dashboard.graphql";

const { Title } = Typography;

type Props = {
  dashboard: Dashboard_dashboard;
};

const Dashboard = ({
  dashboard: {
    viewer: { firstName, lastName }
  }
}: Props) => {
  const [selected, setSelected] = useState<number>(1);
  return (
    <>
      <Title level={2}>
        Hey there, {firstName} {lastName}!
      </Title>
    </>
  );
};

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
  `
});
