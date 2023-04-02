import React, { Suspense } from "react";
import useDynamicScript from "./useDynamicScript";
import {loadComponent} from "./utils";
function ModuleLoader(props) {
    const { ready, failed } = useDynamicScript({
        url: props.module && props.url
    });

    if (!props.module) {
        return <h2>Not system specified</h2>;
    }

    if (!ready) {
        return <h2>Loading dynamic script: {props.url}</h2>;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {props.url}</h2>;
    }

    const Component = React.lazy(
        loadComponent(props.scope, props.module)
    );

    return (
        <Suspense fallback="Loading Module">
            <Component />
        </Suspense>
    );
}

export default ModuleLoader;
