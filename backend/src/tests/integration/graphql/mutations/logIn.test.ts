import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';

import server from '../../../../app/server/index';
import InstructorFactory from '../../../../factories/InstructorFactory';
import clearDatabase from '../../../helpers/clearDatabase';
import AdminFactory from '../../../../factories/AdminFactory';

const { mutate } = createTestClient(server);

const LOGIN_MUTATION = gql`
  mutation LogInTestMutation($input: LogInInput!) {
    logIn(input: $input) {
      __typename
      username
    }
  }
`;

beforeEach(clearDatabase);

afterEach(clearDatabase);

test('logIn returns instructor with instructor login', async () => {
  const instructor = await InstructorFactory.create();
  const { data } = await mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      input: { username: instructor.user.username, password: 'instructor' },
    },
  });
  expect(data?.logIn.username).toBe(instructor.user.username);
  expect(data?.logIn.__typename).toBe('Instructor');
});

test('logIn returns admin with admin login', async () => {
  const admin = await AdminFactory.create();
  const { data } = await mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      input: { username: admin.user.username, password: 'admin' },
    },
  });
  expect(data?.logIn.username).toBe(admin.user.username);
  expect(data?.logIn.__typename).toBe('Admin');
});
