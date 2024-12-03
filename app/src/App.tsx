import React from "react";
import './App.css'
import CustomTablePage from "./pages/CustomTablePage";
import CustomForm from "./pages/CustomForm";

const App: React.FC = () => {
  return (
    <div>
     <CustomTablePage />
     <CustomForm />
    </div>
  );
};

export default App;
