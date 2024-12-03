import React from "react";
import './App.css'
import CustomTablePage from "./pages/CustomTablePage";
import CustomForm from "./pages/CustomForm";
import DatePicker from "./pages/DatePicker";

const App: React.FC = () => {
  return (
    <div>
     <CustomTablePage />
     <CustomForm />
     <DatePicker />
    </div>
  );
};

export default App;
