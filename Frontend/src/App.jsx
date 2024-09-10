import Adddata from "./AddData/Adddata";
import "./App.css";
import CustomFetch from "./Hooks/CustomFetch";
import Searchdata from "./SearchData/Searchdata";
import TableBooking from "./TableB/TableBookingForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Temp from "./Temp";
import SD from "./SD";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temp />}></Route>
        <Route path="/A" element={<SD />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
