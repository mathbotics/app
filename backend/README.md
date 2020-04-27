# Mathbotics backend

## Project Structure:

The Mathbotics backend is a GraphQL api with ApolloServer to expose the graphql route and handle graphql parsing,

- prisma: Contains the prisma.schema and all the migrations (explanation in the user manual).
- scripts: Contains index.html which will serve up the page rendering a single element by the id of "root"
- src: Where the react code lives
  - components: React Components used within the Mathbotics application
    - data: Components related to the blocks
    - graphql: Components related to the course/courses
    - provider: Components related to the dashboard
    - server: Where most of the form components are stored
    - utils: Where things that do not pertain to the scope of the project reside. BE VERY WARY OF PUTTING THINGS IN HERE (utils folders tend to become a dump for things that have no better place, leading to poor design and structure).
  - graphql: Where things relating to graphql reside, this is where the "endpoints" and objects reside.
    - context: The context type resides here -- the context is passed with every single request to the resolve function of every single field.
    - mutations: These are fields that change the state of the application (they "do" things rather than "get" things).
    - objects: These are the objects, these are essentially they "types" that can be returned by mutations or queries, or be used as fields in other "types". They may also have computed fields (fields with resolve() functions).
    - queries: These fields are pure functions that simply return the applications state or something constant (these "get" things rather than "do" things).
  - provider: The services reside here, APIs for interacting with external libraries or application to simplify the code within the graphql resolvers.
  - server: The server configuration and bootstrapping occurs here.
    - middlewares: These process requests either before or after they are passed to the main application logic (the stuff in the graphql folder)
      - express: These process the request at a HTTP level (i.e. Headers).
        - passport.ts: This checks the request for an Authentication token in the cookies, these tokens contain the userId, it then finds the correct user and attaches it to the context.viewer to be used in the resolvers of all fields.
      - graphql: These process the request at a GraphQL level (after the graphql has been validated and parsed).
        - authentication.ts: This grabs the user returned from the logIn mutation and attaches its userId to the request's cookies to be fetched by the passport middleware.
        - permissions.ts: This uses GraphQL shield to set field-level permissions. At the time of writing, there are no permissions here, so the entire API may be accessed by any authenticated actor, this must be changed to only allow access to certain fields to certain actors.

## Installation Guide / Enviornment Setup:

- Use the docker compose in /docker file to start up all services.

## User Manual Docs:

- Before creating mutations or queries: We use nexus-prisma-plugin, which exposes very basic "CRUD", or Create-Read-Update-Delete, mutations and queries to reduce the amount of boilerplate code. When you find yourself needing to make a mutation or query involving some CRUD action, please first check to see that you cannot simply generate it using this plugin. (There are examples of doing this in the queries/index.ts as well as the mutations/index.ts in the extendType portion)

- Generating gql type: If you add any mutation, query, or object, make sure that it is exported at the queries/index.ts or the objects/index.ts or the mutations/index.ts. Afterwards, run `yarn gen` in the backend folder.

- Migrating Database (Prisma): When making changes to the schema, edit the prisma.schema in the prisma folder. Afterwards, docker exec into the running api container (via `docker exec -it mathbotics_api bash`) and run `yarn migrate:save`, fill the required info, this will create a new migration with the changes made to the schema, then run `yarn migrate:up` to apply that migration. Then, on your own machine, run `yarn gen` in the backend folder to generate a new version of the prisma client reflecting the new changes.

## Deployment:

We were not able to get to deploy the application, but this is how we would have gone about it:

- Here are some Heroku guides to deploying the application, the former may be more interesting since we can leverage the Dockerfiles we've created already https://devcenter.heroku.com/categories/deploying-with-docker, https://devcenter.heroku.com/articles/deploying-nodejs.
- NOTE: docker-compose is only ment for developing locally, however you can deploy the application using the compose (https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/). We recommend loosly coupling all the services. This means deploying frontend as static page and deploying backend using docker on herokus docker deployment (https://devcenter.heroku.com/categories/deploying-with-docker). Having Postgress hosted on heroku (https://www.heroku.com/postgres) and separate from where the backend/frontend are running. There is a deployment diagram you can check out that we included somewhere in all these files/folders
