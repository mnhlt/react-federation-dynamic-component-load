import React, {Suspense} from "react";
import ModuleLoader from "./platform/ModuleLoader";

function App() {
  return (
    <div className="contentWrapper">
      1-host content
      <div className="App">
        <h1>Hello React..!</h1>
          <Suspense fallback={'Loading . . . '}>
              <ModuleLoader url={'http://localhost:8081/remoteEntry.js'} scope={'remote'} module={'./App'} />
          </Suspense>
      </div>
    </div>
  );
}

export default App;
