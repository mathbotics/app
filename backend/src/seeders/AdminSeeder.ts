import AdminFactory from '../factories/AdminFactory';

AdminFactory.create().catch((e) => {
  console.warn(e);
  process.exit(1);
});
