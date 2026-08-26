import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
import Home from './routes/Portal/Home';
import Login from './routes/Portal/Login';
import FutRhaynnerSection from "./routes/Portal/futRhaynner";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público */}
        <Route path="/" element={<PortalPublico/>}>
          <Route index element={<Home />} />
          <Route path="litera" element={<FutRhaynnerSection/>} />
          <Route path="login" element={<Login />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;