import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Selection from "./pages/Selection";
import TravelBooking from "./pages/TravelBookin"
import Flight from "./pages/Flight";
import FlightList from "./pages/FlightList";

function App() {

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/travelbooking" element={<TravelBooking/>}/>
        <Route path="/flight" element={<Flight/>}/>
         <Route path="/flightlist" element={<FlightList/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
