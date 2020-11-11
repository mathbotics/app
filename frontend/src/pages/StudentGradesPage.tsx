import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';

import { QueryRenderer } from 'react-relay';
import { environment } from '../graphql/relay';
import Dashboard from '../components/dashboard/Dashboard';
import { DashboardPageQueryResponse } from './__generated__/DashboardPageQuery.graphql';

const Query = graphql`
  query DashboardPageQuery {
    ...Dashboard_dashboard
  }
`;

export const StudentGradesPage = (): JSX.Element => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={Query}
    render={({ props, error }) =>
      !error &&
      props && <Dashboard dashboard={props as DashboardPageQueryResponse} />}
  />
);
