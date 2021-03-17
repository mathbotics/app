import React, { useState } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { BookOutlined } from '@ant-design/icons';
import { createFragmentContainer } from 'react-relay';
import { Typography, Button } from 'antd';

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { Dashboard_dashboard } from './__generated__/Dashboard_dashboard.graphql';

const { Title } = Typography;

type Props = {
  dashboard: Dashboard_dashboard;
};

const Dashboard = ({
  dashboard: {
    viewer: { id, firstName, lastName },
  },
}: Props) => {
  const history = useHistory();
  /*
  TODO
  selected,setSelected are currently not being used
  May be used in the future to set if something is selected or not
   */
  // eslint-disable-next-line
  const [selected, setSelected] = useState<number>(1);
  console.log("id of user?", id)
  return (
    <>
      <Banner>
        <div style={{ width: '400px' }}>
          <Title level={1} style={{ fontWeight: 800, color: '#454d55' }}>
            Welcome
            {' '}
            <br />
            {firstName}
            {' '}
            {lastName}
            !
          </Title>
          <p style={{ fontWeight: 600, color: '#454d55', fontSize: '18px' }}>
            The Mathbotics learning platform will serve as an educational tool
            for students K-12 to learn about robots through educational content
          </p>
          <Button
            type="primary"
            icon={<BookOutlined />}
            size="large"
            onClick={() => history.push('/courses')}
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
        id
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
