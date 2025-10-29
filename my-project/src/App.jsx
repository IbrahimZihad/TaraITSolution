import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import "./App.css";

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow">
        <AppRouter />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
