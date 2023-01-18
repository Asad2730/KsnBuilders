import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import AddPartner from './components/AddPartner';
import AddRecord from './components/AddRecord';
import Category from './components/Categories';
import Dashboard from './components/Dashboard';
import Record from './components/Records';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/addPartner" element={<AddPartner />} />
        <Route path="/addRecord" element={<AddRecord />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/record" element={<Record />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </>
  );
}

export default App;
