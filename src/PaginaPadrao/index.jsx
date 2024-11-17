import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PaginaPadrao() {
  return (
    <main>
      <Navbar />

      <Outlet />
    </main>
  );
}
