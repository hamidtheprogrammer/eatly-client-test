import React from "react";
import { Route, Routes } from "react-router";
import { Home, Layout } from "./constants/Imports.tsx";

const App: React.FC = () => {
  return (
    <div className="relative bg-[#eff2f7]">
      <div className="absolute flxColCenter items-center max-lg:hidden h-[60rem] w-[60rem] pointer-events-none overflow-x-hidden  right-0 ">
        <aside className="hero-bg aspect-square w-[38rem] inset-0 rotate-[38deg] rounded-3xl translate-x-[90%]"></aside>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
