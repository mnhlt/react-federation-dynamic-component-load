import {checkIfEntryLoaded} from "./utils";

export function loadscript(url) {
    return new Promise((resolve, reject) => {

        if(checkIfEntryLoaded(url)) {
            resolve();
            return;
        }

        const element = document.createElement("script");

        element.src = args.url;
        element.type = "text/javascript";
        element.async = true;

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            resolve();
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            reject();
        };

        document.head.appendChild(element);
    })
}
