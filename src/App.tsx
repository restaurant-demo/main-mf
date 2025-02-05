import React, { Suspense } from "react";
import Layout from "./components/Layout";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout />
  </Suspense>
);

export default App;
