### Task 6. Redux

1. Go through API docs in swagger: http://localhost:4000/api-docs
2. Make your components perform real AJAX requests. Implement data fetches as async actions and pass data to your components with redux.
3. Implement creating, editing and updating films according to the design operations as redux actions.
4. Implement filtering and sorting (by genre, rating, and release date) as redux actions.

**Evaluation criteria**

2 - All data fetches done as actions and received from store by components  
3 - Creating, editing, deleting and updating (CRUD operations) of films are done as redux actions  
4 - Filtering by release date and rating done as redux actions  
5 - Sorting by genre is done as redux actions

### Task 5: Hooks

Implement markup and styles for ["Movie details"](https://projects.invisionapp.com/share/F9VXQ7IMZGY/#/screens/407583174) page.  
In your project, change Class components into Functional components and use hooks where applicable.

**Evaluation criteria**

2 - Implement “Movie details” page. Use “useState” hooks  
3 - Use “useCallback” hooks  
4 - Use “useEffect” hooks  
5 - Usage of custom hooks (discuss with your mentor)

### Task 4. Components. Part 2

Implement markup and styles for ["Add movie"](https://projects.invisionapp.com/share/F9VXQ7IMZGY/#/screens/406802247), ["Edit"](https://projects.invisionapp.com/share/F9VXQ7IMZGY/#/screens/406802252), ["Delete"](https://projects.invisionapp.com/share/F9VXQ7IMZGY/#/screens/406802251) modal windows and "sorting".  
No need to implement real API calls. Only add pages with mocked data. No need to implement hooks in this task.

**Evaluation criteria**

2 - Implementation of markup and styles  
3 - Use stateless/stateful approach  
4 - Use React synthetic events  
5 - Use lifecycle methods (discuss with mentor)

---

### Task 3: Components. Part 1

Write components implementing HTML markup for required design for home page of [InVision prototype](https://projects.invisionapp.com/share/F9VXQ7IMZGY/#/screens/406802250) (Only UI part). For this part, no need to implement API calls and routing, the task can be done with mocked data.  
Use [`<ErrorBoundary>`](https://reactjs.org/docs/error-boundaries.html) component for catching and displaying errors . You could create one component and wrap all your application or use several components.

**Evaluation criteria**

2 - Markup is done with React Components and React Fragments (parent-child)  
3 - Apply styles (no need to do pixel perfect and strict colors following)  
4 - Use PropTypes  
5 - Use <ErrorBoundary> component for catching and displaying errors

---

### Task 2: Webpack

Create package.json file and install React, Redux, React-Redux, React-Router, Jest. Install and configure Webpack & Babel to get build artifact by running npm command.  
Set DEV and PROD build configuration. Use env variables, dev server, optimizations for PROD build. Set up testing. You should have test command in your package.json file, which will run your future tests. Don’t use any React boilerplate (like create-react-app) for this task.

**Evaluation criteria**

2 - Installed React, Redux, React-Redux, React-Router, Jest  
3 - Configured Webpack  
4 - Configured Babel. Configured tests script  
5 - Have DEV and PROD build commands (use env variables)
