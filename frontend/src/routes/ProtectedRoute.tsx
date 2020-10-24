import React from 'react';
import { Spin } from 'antd';
import { Route, Redirect } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import QueryLookupRenderer from 'relay-query-lookup-renderer';
import nullthrows from 'nullthrows';

import { ProtectedRouteQueryResponse } from './__generated__/ProtectedRouteQuery.graphql';
import { ProtectedRoute_viewer } from './__generated__/ProtectedRoute_viewer.graphql';
import { NotFoundPage } from "../pages";
import { environment } from '../graphql/relay';

const ViewerQuery = graphql`
  query ProtectedRouteQuery {
    viewer {
      ...ProtectedRoute_viewer
    }
  }
`;

type Props = Omit<React.ComponentProps<typeof Route>, 'component'> & {
  component: React.FC;
  viewer: ProtectedRoute_viewer;
  allowedRoles?: Array<'Admin' | 'Guardian' | 'Instructor' | 'Student'>;
};

const ProtectedRoute = createFragmentContainer(
  ({ component: Component, allowedRoles, viewer, ...rest }: Props) => {
    const allowed =
      !allowedRoles || allowedRoles.some((role) => role === viewer.role);
    return (
      <Route
        {...rest}
        render={() => (allowed ? <Component /> : <NotFoundPage />)}
      />
    );
  },
  {
    viewer: graphql`
      fragment ProtectedRoute_viewer on User {
        role: __typename
      }
    `,
  },
);

export default (props: Omit<Props, 'viewer'>) => (
  <QueryLookupRenderer
    lookup
    environment={environment}
    query={ViewerQuery}
    variables={{}}
    render={(queryResponse: {
      props?: ProtectedRouteQueryResponse;
      error?: Error;
    }) => {
      if (!queryResponse?.props && !queryResponse.error) {
        return (
          <Spin
            size="large"
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        );
      }
      if (queryResponse.error) {
        return <Redirect to="/login" />;
      }
      return (
        <ProtectedRoute
          viewer={nullthrows(queryResponse?.props?.viewer)}
          {...props}
        />
      );
    }}
  />
);
