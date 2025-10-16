import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/features/AppLayout";
import Religious from "./pages/Religious";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import MassRequest from "./pages/MassRequest";
import InfantBaptism from "./pages/infantBaptism";
import Records from "./pages/Records";
import History from "./pages/History";
import Articles from "./pages/Articles";
import ArticleDetails from "./features/Articles/ArticleDetails";
import Ministries from "./pages/Ministries";
import Activities from "./pages/Activities";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="history" element={<History />} />
          <Route path="articles" element={<Articles />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="programs" element={<Activities />} />
          <Route path="articles/:articleId" element={<ArticleDetails />} />
          <Route path="search-records" element={<Records />} />
          <Route path="prayer-request" element={<MassRequest />} />
          <Route path="infant-baptism" element={<InfantBaptism />} />
          <Route path="religious/:religiousId" element={<Religious />} />
        </Route>

        {/* Admin Route */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
