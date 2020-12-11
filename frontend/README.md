# Mathbotics frontend


##### Fall 2020 Updates:
  - Gradebook for students & instructors added. _*Hard coded*_ values for display purposes are shown.

### Project Structure:

The Mathbotics FrontEnd is a React based frontend and was created using CRA(CreateReactApp), therefore it has a familiar folder structure.

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

- Generating gql type: If you update or add to any graphql query or mutation on the frontend you will have to generate the types, run `yarn relay` at the root of the /frontend directory
- Stuck on loading screen: Sometimes when you restart the application using docker, the users will be removed but you will still have the session cookie on your browser. This will lead to an infinite loading screen. To fix, remove the cookie on the browser (CMD + SHFT + C -> Application -> cookies -> clear)
### NOTE: 
Version Two of MathBotics should not have an infinite loading screen issue. However, in the case that you encounter this problem, remove the cookie on the browser (CMD + SHFT + C -> Application -> cookies -> clear)
### Deployment:

We were not able to get to deploy the application, however i have linked 1 way of going about deploying the frontend

- Since this is a react application there are tons of guides on packaging and deploying: Ref https://blog.heroku.com/deploying-react-with-zero-configuration
- NOTE: docker-compose is only ment for developing locally, however you can deploy the application using the compose (https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/). We recommend loosly coupling all the services. This means deploying frontend as static page and deploying backend using docker on herokus docker deployment (https://devcenter.heroku.com/categories/deploying-with-docker). Having Postgress hosted on heroku (https://www.heroku.com/postgres) and separate from where the backend/frontend are running. There is a deployment diagram you can check out that we included somewhere in all these files/folders
