import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "@/common/Header/Header";
import Footer from "@/common/Footer/Footer";
import ScrollToTop from "@/common/ScrollToTop/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <div className="flex flex-col min-h-screen ">
        <Header />
         <main className="flex-1 mt-16">
          <AppRoutes />
          <h1>Hello</h1>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


