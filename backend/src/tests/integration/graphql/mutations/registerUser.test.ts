import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import nullthrows from 'nullthrows';

import server from '../../../../app/server/index';
import clearDatabase from '../../../helpers/clearDatabase';

const { JWT_SECRET } = process.env;

const { mutate } = createTestClient(server);

const REGISTER_USER_MUTATION = gql`
  mutation RegisterUserTestMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      __typename
      username
      firstName
      lastName
    }
  }
`;

beforeEach(clearDatabase);

afterEach(clearDatabase);

test('registerUser returns instructor with instructor token', async () => {
  const input: NexusGen['inputTypes']['RegisterUserInput'] = {
    username: 'instructor',
    password: 'testpass',
    firstName: 'TestFirstName',
    lastName: 'TestLastName',
    token: jwt.sign(
      { email: 'instructor@test.com', role: 'Instructor' },
      nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
    ),
  };
  const { data } = await mutate({
    mutation: REGISTER_USER_MUTATION,
    variables: {
      input,
    },
  });
  expect(data?.registerUser.__typename).toBe('Instructor');
  expect(data?.registerUser.username).toBe(input.username);
  expect(data?.registerUser.firstName).toBe(input.firstName);
  expect(data?.registerUser.lastName).toBe(input.lastName);
});
