import AdminFactory from '../factories/AdminFactory';

AdminFactory.create()
  .then(() => process.exit(0))
  .catch((e) => {
      // eslint-disable-next-line no-console
    console.warn(e);
    process.exit(1);
  });
