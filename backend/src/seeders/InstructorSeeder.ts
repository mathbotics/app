import InstructorFactory from '../factories/InstructorFactory';

InstructorFactory.create().catch((e) => {
  console.warn(e);
  process.exit(1);
});
