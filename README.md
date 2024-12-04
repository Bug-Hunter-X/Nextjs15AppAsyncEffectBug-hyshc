# Next.js 15 App with Unexpected Behavior

This repository demonstrates an unexpected behavior in a Next.js 15 application when using `React.useEffect` and asynchronous operations within a component.  The `MyComponent` updates the count asynchronously, but this causes issues in rendering and potentially other unexpected behavior due to the way state updates are handled in the functional component.