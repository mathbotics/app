import InstructorFactory from '../factories/InstructorFactory';

InstructorFactory.create()
  .then(() => process.exit(0))
  .catch((e) => {
    console.warn(e);
    process.exit(1);
  });
