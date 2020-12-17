# Biologia Total - Painel Administrativo
Administration console to help a online study platform manage students, courses and enrollments. 

***

# Requirements

To run this application you'll need install:

 - [Nodejs](https://nodejs.org/en/download/package-manager/);
 - [NPM packet](https://nodejs.org/en/download/package-manager/);
 - [Docker](https://docs.docker.com/get-docker/);
 - [Docker Compose](https://docs.docker.com/compose/install/)

 ***

 # Installation

  1. Please clone our application running the following command on a terminal:

  ```bash
    git clone https://github.com/ga0125/plataforma_cursou.git
  ```

  2. Install the server:
  ```bash
    cd plataforma_cursou/backend/
    npm install
  ```

  3. Install the SPA application:
  ```bash
    cd ..
    cd plataforma_cursou/frontend/
    npm install
  ```
  *** 
  # Execution

  1. Before to execute the commands below, rename the **example.env** to **.env** on the both projects folders:
  ```bash
      # Renaming backend .env file
      mv plataforma_cursou/backend/example.env  plataforma_cursou/backend/.env
      
      # Renaming frontend .env file
      mv plataforma_cursou/frontend/example.env  plataforma_cursou/frontend/.env    
  ```

  2. To execute the backend, follow this command line:
  ```bash
    cd plataforma_cursou/backend/
    make up #It will run on port 3838 as default
  ```
  2. To execute the SPA application, follow this command line:
  ```bash
    cd ..
    cd plataforma_cursou/frontend/
    npm start #It will run on port 3000 as default
  ```
  ***

  # Application accesses

  1. After run the SPA application, you can access by [Web application](http://localhost:3000/home).
  <br>
  2. To have a clear idea and test the endpoints, you can use the Insomnia app to have a look:
 
   - [Insomnia Download]();
  
  - Add the environment on the Insomnia app:
    ```json
      {
        "server_url": "http://localhost:3838"
      }
    ```
  - Import the JSON data to the Insomnia app:
    - Get the data on:
      ```bash
      cd plataforma_cursou/backend/endpoints_docs/insomnia/insomnia_endpoints_data.json
      ```
   

***

# References

 - [GitHub API](https://developer.github.com/v3/);
 - [NodeJS](https://nodejs.org/en/);
 - [Express](https://expressjs.com/pt-br/);
 - [ReactJS](https://pt-br.reactjs.org/);
 - [ReduxJS](https://redux.js.org/);
 - [Redux-SagaJS](https://redux-saga.js.org/);
 - [Docker](https://docs.docker.com/)

***

# RoadMap (To-Do)

1. Add unit/integration tests (Jest, enzyme);
2. Create the Home page to show each created enrollment;
3. Improve the control on data management (with DELETE / UPDATE option);
4. Add validation parameters on the backend (for request parameters);
5. Implement system cache control to optimize the application (Redis on the backend and useMemo - hooks for SPA);

***

# Conclusion

  I hope you enjoy the Repo Organizer, and regardless of the completion of this test, I appreciate the opportunity where I could learn even more.