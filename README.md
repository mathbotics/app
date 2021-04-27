# Guide to Set Project Up:

For first time setup or when you delete your docker container and purge all data, you do: 
1. Start docker desktop
2. docker-compose up in /docker folder
3. go into api container cli thru docker desktop 
4. run yarn migrate:save 
5. run yarn migrate:up 
6. go into backend folder and open up cli at its root directory
7. run yarn 
8. run yarn gen 
9. go into api container cli thru docker desktop 
10. run yarn adminseed to generate a new admin user
11. go into frontend folder and open up cli at its root directory
12. run yarn 
13. run yarn relay 
14. access web and gql playground 
15. if web app doesn’t seem to be popping up, clear out all cookies/caches in your browser

For development, you can use the python `local_deploy.py` file to start the project up and use the python `local_teardown file.py` to tear down the project.

Note that if your project doesn’t have hot reloading when making changes, you need to restart your api container anytime you make a change and want to see that change.

# Docker:

Installation Guide : https://docs.docker.com/compose/install/

Start/Run Docker image command : docker-compose up

Access to login page : http://localhost:3000/login

Apollo GraphQL Endpoint : http://localhost:5000/graphql

Access to Mailhog: http://localhost:8025/ 

# Backend:

## Project Structure:

The MathBotics backend is a GraphQL API with ApolloServer to expose the GraphQL route and handle GraphQL parsing. 

NOTE: Because the Nexus Plugin Prisma was removed as previously mentioned, a lot of the backend had to be rewritten. 
There will still be leftover Nexus code that is not used, but was left to have a reference to what the previous 
GraphQL objects should look like when moving to a pure GraphQL definition. 

For example, all files under src/app/graphql/objects is Nexus code and should be removed in the future once done refining the remaining GraphQL objects.

- prisma: Contains the prisma.schema and all the migrations (explanation in the user manual).
- scripts: Contains index.html which will serve up the page rendering a single element by the id of "root"
- src:
  - data: Where the services relating to data retrieval exist.
  - graphql: Where things relating to GraphQL reside, this is where the "endpoints" and objects reside.
    - context: The context type resides here -- the context is passed with every
                single request to the resolve function of every single field.
    - mutations: These are fields that change the state of the application (they
                  "do" things rather than "get" things). NOTE: These files were rewritten to fit the GraphQL equivalent. 
    - objects: These are the objects, these are essentially the "types" that can be returned by mutations or queries, or be used as fields in other "types".
                They may also have computed fields (fields with resolve() functions). 
                NOTE: These are files using Nexus and should be removed. We kept it here as a reference for previous definitions of GraphQL objects.
    - queries: These fields are pure functions that simply return the applications
                state or something constant (these "get" things rather than "do" things). NOTE: These are files using Nexus and should later be removed. 
                We kept it here as a guidance for previous definitions of GraphQL queries.
  - provider: The services reside here, APIs for interacting with external libraries or
                application to simplify the code within the GraphQL resolvers.
  - server: The server configuration and bootstrapping occurs here.
      - middlewares: These process requests either before or after they are passed to the main application logic (the stuff in the GraphQL folder)
      - express: These process the request at a HTTP level (i.e. Headers). 
          - passport.ts: This checks the request for an Authentication token in the cookies, these tokens contain the userId, 
                          it then finds the correct user and attaches it to the context.viewer to be used in the resolvers of all fields.
      - graphql: These process the request at a GraphQL level (after the GraphQL has been validated and parsed).
        - authentication.ts: This grabs the user returned from the logIn mutation and attaches its userId to the request's cookies to be fetched 
                                by the passport middleware.
        - permissions.ts: This uses GraphQL shield to set field-level permissions. At the time of writing, there are no permissions here, 
                            so the entire API may be accessed by any authenticated actor, this must be changed to only allow access to certain fields to certain actors.
    - GraphQLSchema.ts: Some GQL object definitions and all query definitions exist here. Also references to the mutations definitions that exist under 
                        the mutations folder.
    - objects: Some GQL object definitions exist here such as objects related to courses and related to blocks
- factories: Code to create database entities.
- seeders: Scripts to run code that creates database entities.
- tests: Code to test other code. Run yarn test to run the tests.
  - integration: Code to test the entire feature of the backend from top to bottom (query/mutation to response).
  - unit: Code to test specific functions of the application. 
            Please read https://testing.googleblog.com/2014/03/testing-on-toilet-what-mak es-good-test.html​and abide by it before writing tests. 
            Bad tests are worse than no tests. In general, a unit test should test a SINGLE path down a function, try to maintain this for integration tests as well.

## Installation Guide / Environment Setup:

- Use the docker compose in /docker file to start up all services.

## User Manual Docs:

- Generating gql type:  Note that whenever you do the logic for the accessing or changing of database data, you use Prisma. 
                          To use GraphQL, refer to the API: https://graphql.org/graphql-js/graphql/ . 
                          To use Prisma, refer to the API: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference .
    - Adding mutations/Changing database data: If you want to do something that changes data in the database, then you write a mutation. 
                                                  Under src/app/graphql/mutations, you add a new file and call it the action that it’s going to achieve. 
                                                  For example, if you want to calculate grades for a recently completed lesson by a student, 
                                                  then call it calculateGradeForStudent. A mutation typically consists of an args field 
                                                  which is the GraphQLInputObjectType, the type of inputs expected for this mutation. 
                                                  It also has a type field which is the return type that the mutation is expected to return at the end. 
                                                  It has a resolve field where all the logic for this mutation goes into. 
                                                  Make sure to export this in the Mutations.ts file. 
    - Adding queries/Accessing database data: If you want to get data from the database, then you write a query. 
                                                Under src/app/server/GraphQLSchema.ts file and under the RootQuery, you add the query there. 
                                                Assign it a name, give it a return type under the type field, give it the inputs it expects under the args field,
                                                and write the logic inside the resolve. 
    - Adding a new GraphQL object: Ideally, add a new object where the rest of the GQL objects reside. Currently they’re residing under src/app/server/objects.
                                      A GQL object typically consists of its name, its description, and any fields it has. 
                                      A GQL field will consist of its type and its resolve, if there is any logic that needs to be done with Prisma. 
    - NOTE: To verify your GraphQL change worked, check that these objects, queries and mutations show up under Docs in the GraphQLPlayground. 
              If it doesn’t, it might not be exported properly or you need to restart your api docker container. 
    - NOTE: Anytime there is a new graphql object, mutation or query definition, you need to download the SDL under Schema in the GraphQLPlayground. 
              With this new sdl, replace the schema.graphql that exists under the outer app folder where backend and frontend folders exist. 
              Refer to the Front User Manual for next steps.
- Migrating Database (Prisma): When you want to change the database entities and relations,  edit the prisma.schema in the prisma folder. 
                                  Afterwards, docker exec into the running api container (via docker exec -it mathbotics_api bash) and run yarn migrate:save, 
                                  fill the required info, this will create a new migration with the changes made to the schema, 
                                  then run yarn migrate:up to apply that migration. Then, on your own machine, run yarn gen in the backend folder 
                                  to generate a new version of the prisma client reflecting the new changes.
- Seeding, creating users: Go into the docker api container through the docker desktop and run yarn adminseed to create an admin, or for other types as well.


# Frontend:

## Project Structure:

The MathBotics frontend is React based and was created using CRA (CreateReactApp), therefore it has a familiar folder structure.

- public: Contains index.html which will serve up the page rendering a single element by the id of "root"
- src: Where the react code lives
  - components: React Components used within the Mathbotics application
    - block: Components related to the blocks
    - course: Components related to the course/courses
    - dashboard: Components related to the dashboard
    - form: Where most of the form components are stored
    - grades: Components related to Instructor Gradebook and Student Grades
    - hoc: Any Higher Order Components should go here ie. withSidebar hoc
    - icons: Contains icons related to Mathbotics
    - lessons: Components related to lessons/lesson
    - slides: Components related to slides/slide
    - students: Components related to students/student
  - graphql: Relay configuration and mutations
    - mutations: Mutations used by components
  - pages: Contains the entry point to all the page components served up by Mathbotics application
  - routes: Contains logic for specific routes ie. ProtectedRoute = logic for a protected route
  - types: Contains the types which arent defined by a library or the application
  - utils: Helper functions

## Installation Guide / Enviornment Setup:

- Use the docker compose in /docker file to start up the frontend + other related services

## User Manual Docs:
- NOTE: The frontend now uses legacy React-Relay code. Refer to the legacy API: https://relay.dev/docs/api-reference/legacy-apis/ when calling mutations or queries.

- Generating gql type: If you updated any GraphQL object, query or mutation definition in the backend then download the new SDL from the GraphQLPlayground under the Schema tab. With this new one, replace the schema.graphql in the outer app folder where backend and frontend folders exist and run `yarn relay` at the root of the /frontend directory.
  - NOTE: if you get any errors, it might be because there’s some inconsistency between previous graphql calls and queries, and your new ones. Resolve those.
- Using a GraphQL mutation: Under graphql/mutations, add in a file that will hold your mutation call. It typically consists of a mutation call like how you would write it in the GraphQLPlayground and the Relay call that will execute the mutation for you. Later on, in a specific file where you want to do a database action, you will use the commit mutation call that Relay provides for you. Refer to this: https://relay.dev/docs/v10.1.3/mutations/ for more information.
- Using a GraphQL Query: If you want to access data from the database to display onto a page, you add the graphql query under the pages folder. It typically consists of the graphql query call and the page component that uses the Relay Query Renderer which will execute the query call when this page is rendered. In the subsequent files related to this page, you can use Relay fragment containers that will allow you to easily access certain graphql endpoints that the original query call returned. For example, if you queried on a course and it has an endpoint for its students, then a fragment can be used to only get the students of that course for a specific React component to show. Refer to this for more information: https://relay.dev/docs/v10.1.3/query-renderer/ and https://relay.dev/docs/v10.1.3/fragment-container/ .
- NOTE: Anytime you add a new graphql call in the frontend or a new fragment container, always run `yarn relay` at the root /frontend directory. This will generate needed React-Relay files that gives it more information on what information to bring back to you, it allows you to see the whole graphql mutation/query call that Relay is doing and it gives you the types it returned from these calls.  
- NOTE: Version Two of MathBotics should not have an infinite loading screen issue. However, in the case that you encounter this problem, remove the cookie on the browser (CMD + SHFT + C -> Application -> cookies -> clear)


# Deployment:

As this application has not been completed, it is not yet ready for deployment. However the following information was left over from version one of the project.

- Since this is a react application there are tons of guides on packaging and deploying: Ref https://blog.heroku.com/deploying-react-with-zero-configuration
- NOTE: docker-compose is only meant for developing locally, however you can deploy the application using the compose (https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/). We recommend loosly coupling all the services. This means deploying frontend as static page and deploying backend using docker on herokus docker deployment (https://devcenter.heroku.com/categories/deploying-with-docker). Having Postgress hosted on heroku (https://www.heroku.com/postgres) and separate from where the backend/frontend are running. There is a deployment diagram you can check out that we included somewhere in all these files/folders
