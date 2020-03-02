import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import nullthrows from 'nullthrows';

import server from '../../../../app/server/index';

const { JWT_SECRET } = process.env;

const { mutate } = createTestClient(server);

const SEND_INVITATION_EMAIL_MUTATION = gql`
  mutation SendInvitationEmailTestMutation($input: SendInvitationEmailInput!) {
    sendInvitationEmail(input: $input)
  }
`;

test('registerUser returns instructor with instructor token', async () => {
  const input: NexusGen['inputTypes']['SendInvitationEmailInput'] = {
    email: 'instructor@test.com',
    role: 'Instructor',
  };

  const token = jwt.sign(
    { email: input.email, role: input.role },
    nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined'),
  );
  const expectedUrl = `http://localhost:3000/register/${token}`;

  const { data } = await mutate({
    mutation: SEND_INVITATION_EMAIL_MUTATION,
    variables: {
      input,
    },
  });

  expect(data?.sendInvitationEmail).toBeTruthy();
  expect(data?.sendInvitationEmail).toBe(expectedUrl);
});
