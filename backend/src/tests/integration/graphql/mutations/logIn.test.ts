import { createTestClient } from 'apollo-server-testing';

import server from '../../../../app/server/index';
import InstructorFactory from '../../../../factories/InstructorFactory';

const { mutate } = createTestClient(server);

test('logIn returns instructor with instructor login', async () => {
  const instructor = await InstructorFactory.create();
  const { data } = await mutate({
    mutation: 'logIn',
    variables: { email: instructor.email },
  });
  expect(data?.__typename).toBe('Instructor');
});
