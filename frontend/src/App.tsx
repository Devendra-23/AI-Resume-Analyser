import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ResumeUpload from "./components/ResumeUpload";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ResumeUpload />
    </div>
  );
}

export default App;
