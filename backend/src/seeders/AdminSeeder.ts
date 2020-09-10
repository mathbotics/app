import AdminFactory from '../factories/AdminFactory';

AdminFactory.create()
  .then(() => process.exit(0))
  .catch((e) => {
    console.warn(e);
    process.exit(1);
  });
