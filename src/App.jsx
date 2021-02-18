import React from "react";
import { GlobalStyles } from "assets/styles";

const App = () => {
  /**
   * You will see 'development' mode in console in your browser via development starting.
   * But you can't see 'production' mode now, since it is will be shown only on deployed version of app.
   */
  console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

  return (
    <>
      <div className="wrapper">Hi</div>
      <GlobalStyles />
    </>
  );
};

export default App;
