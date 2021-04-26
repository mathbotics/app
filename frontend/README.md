# Mathbotics frontend

### Project Structure:

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

### Installation Guide / Enviornment Setup:

- Use the docker compose in /docker file to start up the frontend + other related services

### User Manual Docs:
- NOTE: The frontend now uses legacy React-Relay code. Refer to the legacy API: https://relay.dev/docs/api-reference/legacy-apis/ when calling mutations or queries.

- Generating gql type: If you updated any GraphQL object, query or mutation definition in the backend then download the new SDL from the GraphQLPlayground under the Schema tab. With this new one, replace the schema.graphql in the outer app folder where backend and frontend folders exist and run `yarn relay` at the root of the /frontend directory.
  - NOTE: if you get any errors, it might be because there’s some inconsistency between previous graphql calls and queries, and your new ones. Resolve those.
- Using a GraphQL mutation: Under graphql/mutations, add in a file that will hold your mutation call. It typically consists of a mutation call like how you would write it in the GraphQLPlayground and the Relay call that will execute the mutation for you. Later on, in a specific file where you want to do a database action, you will use the commit mutation call that Relay provides for you. Refer to this: https://relay.dev/docs/v10.1.3/mutations/ for more information.
- Using a GraphQL Query: If you want to access data from the database to display onto a page, you add the graphql query under the pages folder. It typically consists of the graphql query call and the page component that uses the Relay Query Renderer which will execute the query call when this page is rendered. In the subsequent files related to this page, you can use Relay fragment containers that will allow you to easily access certain graphql endpoints that the original query call returned. For example, if you queried on a course and it has an endpoint for its students, then a fragment can be used to only get the students of that course for a specific React component to show. Refer to this for more information: https://relay.dev/docs/v10.1.3/query-renderer/ and https://relay.dev/docs/v10.1.3/fragment-container/ .
- NOTE: Anytime you add a new graphql call in the frontend or a new fragment container, always run `yarn relay` at the root /frontend directory. This will generate needed React-Relay files that gives it more information on what information to bring back to you, it allows you to see the whole graphql mutation/query call that Relay is doing and it gives you the types it returned from these calls.  
- NOTE: Version Two of MathBotics should not have an infinite loading screen issue. However, in the case that you encounter this problem, remove the cookie on the browser (CMD + SHFT + C -> Application -> cookies -> clear)

### Deployment:

As this application has not been completed, it is not yet ready for deployment. However the following information was left over from version one of the project.

- Since this is a react application there are tons of guides on packaging and deploying: Ref https://blog.heroku.com/deploying-react-with-zero-configuration
- NOTE: docker-compose is only meant for developing locally, however you can deploy the application using the compose (https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/). We recommend loosly coupling all the services. This means deploying frontend as static page and deploying backend using docker on herokus docker deployment (https://devcenter.heroku.com/categories/deploying-with-docker). Having Postgress hosted on heroku (https://www.heroku.com/postgres) and separate from where the backend/frontend are running. There is a deployment diagram you can check out that we included somewhere in all these files/folders
  
