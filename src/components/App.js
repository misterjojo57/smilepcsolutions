import { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

export default App;
