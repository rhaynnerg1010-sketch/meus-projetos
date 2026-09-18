import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from './routes/Portal/Home';
import Login from './routes/Dashboard/Login';
import FutRhaynnerSection from "./routes/Portal/futRhaynner";
import Dashboard from "./routes/Dashboard/Dashboard";
import Configuracoes from "./routes/Dashboard/Configuracoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público */}
        <Route path="/" element={<PortalPublico/>}>
          <Route index element={<Home />} />
          <Route path="fut-Rhaynner" element={<FutRhaynnerSection/>} />
        </Route>


        {/* Autenticação independente da navegação privada */}
        <Route path="/login" element={<Login />} />

        {/* Área privada */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="configurações" element={<Configuracoes />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;