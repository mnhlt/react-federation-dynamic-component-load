import useDynamicScript from "./useDynamicScript";
import React from "react";
import {loadComponent} from "./utils";

export const useDynamicModuleLoader = (url, scope, module) => {

    const { ready, failed } = useDynamicScript({
        url: module && url
    });

    if (!module) {
        return <h2>Not system specified</h2>;
    }

    if (!ready) {
        return <h2>Loading dynamic script: {url}</h2>;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {url}</h2>;
    }

    const Component = React.lazy(
        loadComponent(scope, module)
    );

    return Component;
}
