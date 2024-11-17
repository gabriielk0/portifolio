import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Slidebar";
import Home from "./components/Home";
import Curriculo from "./components/Curriculo";
import Projetos from "./components/Projetos";
import PaginaPadrao from "./PaginaPadrao";

function AppRouters() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="curriculo" element={<Curriculo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
