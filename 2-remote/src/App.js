import React, {Suspense} from "react";
import ModuleLoader from "./platform/ModuleLoader";
import {SomeChildren} from "./SomeChildren";

function App() {
  return (
    <div className="App">
      <h1>Hello React..2-remote!</h1>
        <Suspense fallback={'Loading . . . '}>
            <SomeChildren/>
            <ModuleLoader url={'http://localhost:8082/remoteEntry.js'} scope={'remote3'} module={'Button'} />
        </Suspense>

    </div>
  );
}

export default App;
