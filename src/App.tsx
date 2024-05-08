// App.tsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Home />
      </main>
    </div>
  );
}

export default App;
