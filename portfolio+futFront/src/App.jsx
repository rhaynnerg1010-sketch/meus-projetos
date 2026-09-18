import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/Portal/PortalPublico";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import Home from "./routes/Portal/Home";
import SaaS from "./routes/Portal/SaaS";
import Login from "./routes/Dashboard/Login";
import Overview from "./routes/Dashboard/Overview";
import Atividades from "./routes/Dashboard/Atividades";
import Configuracoes from "./routes/Dashboard/Configuracoes";
import NovoProjeto from "./routes/Dashboard/NovoProjeto";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público */}
        <Route path="/" element={<PortalPublico/>}>
          <Route index element={<Home />} />
          <Route path="fut-Rhaynner" element={<SaaS />} />
        </Route>


        {/* Autenticação independente da navegação privada */}
        <Route path="/login" element={<Login />} />

        {/* Área privada */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="atividades" element={<Atividades />} />
          <Route path="configurações" element={<Configuracoes />} />
          <Route path="novo-projeto" element={<NovoProjeto />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;