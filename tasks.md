### Task 10. Server-Side Rendering

Implement server rendering in your NodeJS application.

Use async actions, redux should provide initial state from server.  
Server should handle query parameters to compute correct initial state.  
Implement route masking. Next.js provides this functionality out of the box, but its usage is not required. Example of route masking:  
_localhost/search/Hello%20Friend; localhost/search/Search%20Query_  
When a new user lands on the page with such URL, you should perform search and display results.  
Add code splitting to your app. You can use dynamic import() syntax in conjunction with webpack and React.lazy, some library (react-loadable), or next.js.

**Evaluation criteria**

2 - Async actions, redux provides initial state from server  
3 - Server app handles query params to compute initial state  
4 - Route masking. Can be implemented, or mentee can switch to next.js for SSR  
5 - Code splitting for optimized performance. Goes out of the box with next.js

---

### Task 9. Testing

Write unit tests for your application (consider using Jest, @testing-library/react or Enzyme, react-test-renderer, React-test-utils, etc.)

Subtasks:

1. Cover 1 simple presentational component with snapshot tests.
2. Cover 1 reducer and all its actions with unit-tests.
3. Measure coverage level with coverage report.
4. Cover “Add movie” modal dialog components with unit-tests, mock all external dependencies using Jest mocks.

**Evaluation criteria**

2 - Subtask 1 is implemented  
3 - Subtasks 2 and 3 are implemented  
4 - Subtask 4 “Add movie” modal dialog and all its components coverage > 70%  
5 - Global coverage > 90%. Added unit tests for hooks

---

### Task 8. Routing

Create routing for your application (via React Router).  
Add 404 (error page) and ‘No movies found’ page.  
Link app states between each other with React Router.  
By default, user lands on a new page with empty results state.  
When user clicks on a film item, redirect them to:
_localhost/film/id_.  
Handle invalid URLs, display a 404 page, where user will be redirected in case of invalid URL.  
On switching search type or sorting type you shouldn’t switch any routes.  
When user performs a new search, you should redirect them to: _localhost/search/Search%20Query_.  
When a new user lands on the page with such URL, you should perform search and display results.

**Evaluation criteria**

2.1 - Add 404 and “No movies found” pages with markup  
2.2 - Have 2+ pages which displays on different URLs  
3 - Implement displaying 404 page for all invalid URLs  
4 - By default, user lands on a new page with empty results page  
5.1 - When user performs a search on the page, change URL and show search results  
5.2 - When new user enters the site using direct link with search parameters – show search results

---

### Task 7. Forms

1. Implement «Add movie» form.
2. Implement «Edit movie» form.

Required validation criteria: http://localhost:4000/api-docs

**Evaluation criteria**

2 - Installed formik  
3 - Implementation of “Add movie” form with validation  
4 - Implementation of “Edit movie” form with validation  
5 - Use hooks from formik

---

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

---

### Task 5: Hooks

Implement markup and styles for ["Movie details"](https://projects.invisionapp.com/share/F9VXQ7IMZGY/#/screens/407583174) page.  
In your project, change Class components into Functional components and use hooks where applicable.

**Evaluation criteria**

2 - Implement “Movie details” page. Use “useState” hooks  
3 - Use “useCallback” hooks  
4 - Use “useEffect” hooks  
5 - Usage of custom hooks (discuss with your mentor)

---

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
