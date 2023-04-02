import React, {Suspense} from "react";
import {SomeChildren} from "./SomeChildren";
import ModuleLoader from "platform/ModuleLoader";

function App() {
  return (
    <div className="App">
      <h1>Hello React..2-remote!</h1>
        <Suspense fallback={'Loading . . . '}>
            <SomeChildren/>
            <ModuleLoader url={'http://localhost:8082/remoteEntry.js'} scope={'remote3'} module={'Button/Button/SomeButton'} />
        </Suspense>

    </div>
  );
}

export default App;
